import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "Quiénes somos" },
  { to: "/seguros", label: "Seguros" },
  { to: "/como-trabajamos", label: "Cómo trabajamos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Brand() {
  return <Link to="/" className="brand-mark" aria-label="GS ANSALONG, ir al inicio"><span className="brand-monogram">GS<span className="brand-dot">.</span></span><span className="brand-name">ANSALONG<small>AGENCIA DE SEGUROS</small></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-container header-inner">
    <Brand />
    <nav className="desktop-nav" aria-label="Navegación principal">{links.map(link => <Link key={link.to} to={link.to} activeProps={{ className: "nav-active" }} activeOptions={{ exact: true }}>{link.label}</Link>)}</nav>
    <Button asChild size="lg" className="header-cta"><Link to="/contacto" search={{ asunto: "presupuesto" }}>Pide tu presupuesto <ArrowUpRight size={16}/></Link></Button>
    <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-nav" aria-label="Navegación móvil">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16}/></Link>)}<Link to="/contacto" search={{ asunto: "presupuesto" }} onClick={() => setOpen(false)}>Pide tu presupuesto<ArrowUpRight size={16}/></Link></nav>}</header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div><Brand/><p>Seguros con nombre y apellido.<br/>Cerca de ti, cuando más importa.</p><div className="footer-insurers"><span>Zurich</span><span>ARAG</span><span>DKV</span></div></div>
    <div><h3>Explora</h3><div className="footer-links">{links.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}<Link to="/quien-te-atiende">Quién te atiende</Link></div></div>
    <div><h3>Hablemos</h3><div className="footer-links"><a href="tel:+34973320821"><Phone size={15}/> 973 320 821</a><a href="mailto:gseguros40@zurichagente.es"><Mail size={15}/> gseguros40@zurichagente.es</a><a href="https://www.google.com/maps/search/?api=1&query=Calle+Homenatge+a+la+Vellesa+7+Bellpuig" target="_blank" rel="noreferrer"><MapPin size={15}/> C/ Homenatge a la Vellesa, 7, bajos<br/>25250 Bellpuig (Lleida)</a></div></div>
  </div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} GS ANSALONG S.L. · Bellpuig, Lleida</span><div><Link to="/aviso-legal">Aviso legal</Link><Link to="/politica-de-privacidad">Política de privacidad</Link></div></div></footer>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span className="eyebrow-line"/>{children}</p>; }
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <section className="page-intro site-container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{children && <div className="page-intro-copy">{children}</div>}</section>; }
export function SectionCTA({ title = "Hablemos de lo que quieres proteger.", text = "Cuéntanos tu caso. La primera conversación no te compromete a nada.", label = "Pide tu presupuesto", asunto = "presupuesto" }: {title?: string; text?: string; label?: string; asunto?: string}) { return <section className="section-cta"><div className="site-container section-cta-inner"><div><Eyebrow>EL SIGUIENTE PASO</Eyebrow><h2>{title}</h2><p>{text}</p></div><Button asChild size="lg"><Link to="/contacto" search={{ asunto }}>{label}<ArrowUpRight size={17}/></Link></Button></div></section>; }
export function meta(title: string, description: string) { return { meta: [{ title: `${title} | GS ANSALONG` }, { name: "description", content: description }, { property: "og:title", content: `${title} | GS ANSALONG` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }; }