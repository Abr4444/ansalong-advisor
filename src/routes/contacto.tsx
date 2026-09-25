import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, meta } from "@/components/site";
import { sendContactRequest } from "@/lib/contact.functions";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>) => ({ asunto: typeof search["asunto"] === "string" ? search["asunto"] : undefined }),
  head: () => meta("Contacto", "Contacta con GS Ansalong en Bellpuig. Pide presupuesto o revisión de tu póliza por teléfono, email o formulario. Atendemos todo el territorio nacional."),
  component: Contact,
});

function Contact() {
  const { asunto } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [tipo, setTipo] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (!tipo) { setError("Selecciona qué quieres asegurar."); return; }
    setBusy(true); setError("");
    try {
      await sendContactRequest({ data: {
        nombre: String(fields.get("nombre") ?? ""), telefono: String(fields.get("telefono") ?? ""),
        email: String(fields.get("email") ?? ""), seguro: tipo as "Coche" | "Hogar" | "Vida" | "Protección jurídica" | "Salud y dental" | "Autónomos y empresas" | "Otro",
        mensaje: String(fields.get("mensaje") ?? ""), privacidad_aceptada: true,
        website: String(fields.get("website") ?? ""),
      } });
      setDone(true); form.reset(); setTipo("");
    } catch { setError("No hemos podido enviar tu mensaje. Inténtalo de nuevo o llámanos al 973 320 821."); }
    finally { setBusy(false); }
  }
  return <><PageIntro eyebrow="ESTAMOS AQUÍ PARA TI" title="Hablemos."><p>Cuéntanos qué quieres asegurar o qué póliza quieres revisar. Puedes llamarnos, escribirnos, pasar por la oficina o quedar por videollamada, vivas donde vivas dentro del territorio nacional.</p></PageIntro><section className="site-container contact-layout"><div><div className="contact-method"><MapPin size={21}/><div><small>VISÍTANOS</small><span>GS ANSALONG S.L.<br/>Calle Homenatge a la Vellesa, 7, bajos<br/>25250 Bellpuig (Lleida)</span></div></div><div className="contact-method"><Phone size={21}/><div><small>LLÁMANOS</small><a href="tel:+34973320821">973 320 821</a></div></div><div className="contact-method"><Mail size={21}/><div><small>ESCRÍBENOS</small><a href="mailto:gseguros40@zurichagente.es">gseguros40@zurichagente.es</a></div></div><div className="contact-method"><Clock size={21}/><div><small>HORARIO</small><span>Pendiente de completar</span></div></div></div><div className="contact-form"><h2>{asunto === "revision" ? "Revisamos tu póliza" : "Cuéntanos tu caso"}</h2><p>Rellena el formulario y nos pondremos en contacto contigo.</p>{done ? <div role="status" className="form-status">Gracias por escribirnos. Te responderemos lo antes posible. <Button variant="link" onClick={() => setDone(false)}>Enviar otro mensaje</Button></div> : <form onSubmit={submit}><div className="form-grid"><div className="form-field"><label htmlFor="nombre">Nombre *</label><input id="nombre" name="nombre" autoComplete="name" required minLength={2}/></div><div className="form-field"><label htmlFor="telefono">Teléfono *</label><input id="telefono" name="telefono" type="tel" autoComplete="tel" required minLength={6}/></div></div><div className="form-field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required/></div><div className="form-field"><label htmlFor="seguro">¿Qué quieres asegurar? *</label><select id="seguro" name="seguro" required value={tipo} onChange={event => setTipo(event.target.value)}><option value="">Selecciona una opción</option>{["Coche", "Hogar", "Vida", "Protección jurídica", "Salud y dental", "Autónomos y empresas", "Otro"].map(item => <option key={item}>{item}</option>)}</select></div><div className="form-field"><label htmlFor="mensaje">Mensaje *</label><textarea id="mensaje" name="mensaje" required minLength={5} defaultValue={asunto === "revision" ? "Me gustaría revisar mi póliza actual." : ""} placeholder="Cuéntanos en qué podemos ayudarte..."/></div><div className="hidden" aria-hidden="true"><label htmlFor="website">Sitio web</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div><label className="privacy-check"><input type="checkbox" name="privacidad" required/><span>He leído y acepto la <Link to="/politica-de-privacidad">política de privacidad</Link>. *</span></label><Button type="submit" size="lg" disabled={busy}>{busy ? "Enviando..." : "Enviar mensaje"}<ArrowUpRight/></Button>{error && <p role="alert" className="form-status">{error}</p>}</form>}</div></section><iframe className="map-frame" title="Ubicación de GS ANSALONG en Bellpuig" src="https://maps.google.com/maps?q=Calle%20Homenatge%20a%20la%20Vellesa%207%2C%20Bellpuig%2C%20Lleida&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></>;
}