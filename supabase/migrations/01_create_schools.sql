CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE IF NOT EXISTS public.schools (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  address_detail TEXT,
  zipcode TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  sido TEXT,
  edu_office TEXT,
  school_type TEXT,
  establishment_type TEXT,
  founded_date TEXT,
  english_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_schools_name
  ON public.schools
  USING gin (name gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_schools_sido
  ON public.schools (sido);

CREATE INDEX IF NOT EXISTS idx_schools_coords
  ON public.schools (lat, lng)
  WHERE lat IS NOT NULL AND lng IS NOT NULL;

ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'schools'
      AND policyname = 'Anyone can read schools'
  ) THEN
    CREATE POLICY "Anyone can read schools"
      ON public.schools
      FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'schools'
      AND policyname = 'Service role can do everything'
  ) THEN
    CREATE POLICY "Service role can do everything"
      ON public.schools
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END
$$;
