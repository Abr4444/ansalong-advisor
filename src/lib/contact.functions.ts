import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const requestSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  telefono: z.string().trim().min(6).max(40),
  email: z.string().email().max(250),
  seguro: z.enum(["Coche", "Hogar", "Vida", "Protección jurídica", "Salud y dental", "Autónomos y empresas", "Otro"]),
  mensaje: z.string().trim().min(5).max(5000),
  privacidad_aceptada: z.literal(true),
  website: z.string().max(200).default(""),
});

export const sendContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => requestSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("solicitudes_contacto").insert({
      nombre: data.nombre, telefono: data.telefono, email: data.email, seguro: data.seguro,
      mensaje: data.mensaje, privacidad_aceptada: data.privacidad_aceptada,
    });
    if (error) throw new Error("No hemos podido guardar tu mensaje. Inténtalo de nuevo.");
    return { ok: true };
  });