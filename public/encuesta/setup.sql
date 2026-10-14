-- ============================================================
-- HERSA · Encuesta Electoral Ambato 2027 · 25 preguntas
-- Ejecutar en: Supabase hersaambato@gmail.com
-- SQL Editor → New Query → Run
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.survey_responses_25 (
  id               uuid        primary key default gen_random_uuid(),
  survey_id        text        not null,
  survey_version   text        not null check (survey_version in ('A','B','C','D','E','F','G','H')),
  sample_slot      integer     not null check (sample_slot between 1 and 1000),
  sample_point_id  text        not null,
  interviewer_id   text        null,
  interview_key    text        not null unique,
  area             text        not null check (area in ('Urbana','Rural')),
  parroquia        text        not null,
  mayor_order      jsonb       not null,
  prefecture_order jsonb       not null,
  answers          jsonb       not null default '{}'::jsonb,
  derived          jsonb       not null default '{}'::jsonb,
  started_at       timestamptz not null,
  completed_at     timestamptz not null,
  created_at       timestamptz not null default now()
);

create index if not exists enc25_version_idx  on public.survey_responses_25 (survey_version);
create index if not exists enc25_point_idx    on public.survey_responses_25 (sample_point_id);
create index if not exists enc25_area_idx     on public.survey_responses_25 (area);
create index if not exists enc25_answers_gin  on public.survey_responses_25 using gin (answers);
create index if not exists enc25_derived_gin  on public.survey_responses_25 using gin (derived);

alter table public.survey_responses_25 enable row level security;

-- Anon puede insertar (encuestadores sin login)
create policy "anon_insert_enc25"
  on public.survey_responses_25 for insert to anon with check (true);

-- Anon puede leer (para el dashboard)
create policy "anon_read_enc25"
  on public.survey_responses_25 for select to anon using (true);

-- Vistas de control de avance
create or replace view public.enc25_por_version as
  select survey_version, count(*) as n
  from public.survey_responses_25
  group by survey_version order by survey_version;

create or replace view public.enc25_por_punto as
  select sample_point_id, area, count(*) as n
  from public.survey_responses_25
  group by sample_point_id, area
  order by area, sample_point_id;

create or replace view public.enc25_avance as
  select
    count(*) as total,
    count(*) filter (where area='Urbana') as urbanas,
    count(*) filter (where area='Rural')  as rurales,
    round(count(*)::numeric / 10, 1)      as pct_meta
  from public.survey_responses_25;
