CREATE TABLE public.solicitudes_contacto (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  email text NOT NULL,
  seguro text NOT NULL,
  mensaje text NOT NULL,
  privacidad_aceptada boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.solicitudes_contacto TO service_role;
ALTER TABLE public.solicitudes_contacto ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.actualizar_solicitudes_contacto_fecha()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;
CREATE TRIGGER solicitudes_contacto_fecha BEFORE UPDATE ON public.solicitudes_contacto FOR EACH ROW EXECUTE FUNCTION public.actualizar_solicitudes_contacto_fecha();