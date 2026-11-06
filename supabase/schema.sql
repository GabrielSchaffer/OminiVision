-- Pauta · schema Supabase
-- Rode no SQL Editor do seu projeto Supabase (uma vez).
-- Cada usuário só enxerga os próprios dados (Row Level Security).

-- ============ PASTAS (menu e submenus do sidebar) ============
create table if not exists public.folders (
  id          text primary key,
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  parent_id   text references public.folders(id) on delete cascade,
  name        text not null default 'Nova pasta',
  kind        text check (kind in ('backlog','active','delivered')),  -- null = pasta comum
  collapsed   boolean not null default false,
  position    integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ============ PROJETOS ============
create table if not exists public.projects (
  id            text primary key,
  user_id       uuid not null default auth.uid() references auth.users(id) on delete cascade,
  folder_id     text references public.folders(id) on delete set null,
  name          text not null default '',
  context       text not null default '',
  color         text not null default 'orange',
  status        text not null default 'ativo' check (status in ('ativo','pausado','concluido')),
  start_date    date,
  due_date      date,
  on_roadmap    boolean not null default false,
  delivered_at  timestamptz,
  updated_at    timestamptz not null default now(),   -- base da regra "x dias sem atualização"
  position      integer not null default 0,
  created_at    timestamptz not null default now()
);

-- ============ TAREFAS ============
create table if not exists public.tasks (
  id          text primary key,
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  project_id  text not null references public.projects(id) on delete cascade,
  text        text not null default '',
  start_date  date,
  due_date    date,
  done        boolean not null default false,
  kind        text not null default 'task',
  parent_id   text references public.tasks(id) on delete set null,
  position    integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ============ BLOCOS DE NOTAS ============
create table if not exists public.blocks (
  id          text primary key,
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  project_id  text not null references public.projects(id) on delete cascade,
  type        text not null default 'text'
              check (type in ('text','h1','h2','h3','bullet','numbered','todo','toggle','quote','callout','code','divider')),
  text        text not null default '',
  html        text,                 -- texto com negrito/itálico/links
  body        text,                 -- descrição do accordion
  body_html   text,
  color       text not null default 'default',
  bg          text not null default 'none',
  checked     boolean not null default false,
  open        boolean not null default false,
  position    integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ============ CONFIGURAÇÕES ============
create table if not exists public.user_settings (
  user_id     uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  warn_days   integer not null default 3 check (warn_days >= 1),
  crit_days   integer not null default 7 check (crit_days >= 2),
  accent      text not null default '#F56738',
  theme       text not null default 'light',
  ical_url    text not null default '',
  roadmap_enabled boolean not null default true,
  liquid_bg  text not null default '#050814',
  liquid_light text not null default '#3B82F6',
  updated_at  timestamptz not null default now()
);

-- Bancos já criados: objetivo do projeto e configurações da conta.
alter table public.projects add column if not exists context text not null default '';
alter table public.projects add column if not exists on_roadmap boolean not null default false;
alter table public.user_settings add column if not exists theme text not null default 'light';
alter table public.user_settings add column if not exists ical_url text not null default '';
alter table public.user_settings add column if not exists roadmap_enabled boolean not null default true;
alter table public.user_settings add column if not exists liquid_bg text not null default '#050814';
alter table public.user_settings add column if not exists liquid_light text not null default '#3B82F6';
alter table public.tasks add column if not exists start_date date;
alter table public.tasks add column if not exists kind text not null default 'task';
alter table public.tasks add column if not exists parent_id text references public.tasks(id) on delete set null;

-- ============ ÍNDICES ============
create index if not exists folders_user_idx   on public.folders (user_id);
create index if not exists projects_user_idx  on public.projects (user_id);
create index if not exists projects_folder_idx on public.projects (folder_id);
create index if not exists tasks_project_idx  on public.tasks (project_id);
create index if not exists tasks_due_idx      on public.tasks (user_id, due_date) where done = false;
create index if not exists blocks_project_idx on public.blocks (project_id, position);

-- ============ RLS ============
alter table public.folders       enable row level security;
alter table public.projects      enable row level security;
alter table public.tasks         enable row level security;
alter table public.blocks        enable row level security;
alter table public.user_settings enable row level security;

do $$
declare t text;
begin
  foreach t in array array['folders','projects','tasks','blocks','user_settings'] loop
    execute format('drop policy if exists "own_rows" on public.%I', t);
    execute format(
      'create policy "own_rows" on public.%I for all to authenticated
         using (user_id = auth.uid()) with check (user_id = auth.uid())', t);
  end loop;
end $$;

-- ============ VIEW ÚTIL: saúde dos projetos ============
-- Mesma lógica do app: atenção após warn_days, crítico após crit_days ou prazo vencido.
create or replace view public.project_health
with (security_invoker = true) as
select
  p.id, p.name, p.status, p.due_date, p.updated_at,
  (current_date - p.updated_at::date) as days_without_update,
  case
    when p.status = 'concluido' then 'done'
    when p.status = 'pausado'   then 'paused'
    when p.due_date is not null and p.due_date < current_date then 'crit'
    when (current_date - p.updated_at::date) >= coalesce(s.crit_days, 7) then 'crit'
    when (current_date - p.updated_at::date) >= coalesce(s.warn_days, 3) then 'warn'
    else 'ok'
  end as health
from public.projects p
left join public.user_settings s on s.user_id = p.user_id;
