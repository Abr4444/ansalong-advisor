import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CarFront, House, HeartPulse, Scale, BriefcaseBusiness, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, SectionCTA, meta } from "@/components/site";
import hero from "@/assets/bellpuig-hero.jpg";

export const Route = createFileRoute("/")({ head: () => meta("Seguros con nombre y apellido", "Tu agencia de seguros en toda España. Más de 30 años asesorando a familias, autónomos y empresas con cercanía y transparencia."), component: Index });

const products = [
  { name: "Autónomos y empresas", text: "Protección para tu negocio", icon: BriefcaseBusiness },
  { name: "Coche", text: "De terceros a todo riesgo", icon: CarFront },
  { name: "Hogar", text: "Vivienda habitual, segunda residencia o alquiler", icon: House },
  { name: "Vida", text: "Respaldo económico para tu familia", icon: HeartPulse },
  { name: "Protección jurídica", text: "Defensa y asesoramiento legal", icon: Scale },
  { name: "Salud y dental", text: "Cuadro médico privado", icon: ShieldPlus },
];

function Index() { return <>
  <section className="hero"><img className="hero-image" src={hero} alt="Arquitectura mediterránea iluminada al atardecer" width={1600} height={1000}/><div className="site-container hero-inner"><Eyebrow>GS ANSALONG · BELLPUIG, TÀRREGA, LLEIDA</Eyebrow><h1>Seguros con<br/><em>nombre y apellido.</em></h1><p className="hero-subtitle">Tu agencia de seguros en toda España</p><p className="hero-copy">Asesoramos a familias, autónomos y empresas. Nos sentamos contigo, entendemos qué quieres proteger y te proponemos el seguro que encaja. Y si algún día hay un siniestro, lo gestionamos contigo desde la primera llamada.</p><div className="hero-actions"><Button asChild size="lg"><Link to="/contacto" search={{ asunto: "presupuesto" }}>Pide tu presupuesto <ArrowUpRight/></Link></Button><Button asChild variant="goldOutline" size="lg"><Link to="/contacto" search={{ asunto: "contacto" }}>Contacta con nosotros <ArrowRight/></Link></Button></div></div><div className="site-container hero-bottom"><span>+30 AÑOS A TU LADO</span><span>PROTEGEMOS LO QUE IMPORTA</span></div></section>
  <section className="section site-container split-section"><div><Eyebrow>UNA FORMA DISTINTA DE ASEGURAR</Eyebrow><h2>Conviene saber qué cubre tu seguro <i>antes</i> de necesitarlo.</h2></div><div className="body-copy"><p>Mucha gente descubre lo que tiene contratado el mismo día que lo necesita, y no siempre es una buena sorpresa.</p><p>Nosotros preferimos que lo sepas antes: qué cubre tu póliza, qué queda fuera, cuánto pagarías de tu bolsillo y a quién llamar cuando llegue el momento.</p><Link className="text-link" to="/como-trabajamos">Así trabajamos <ArrowUpRight size={16}/></Link></div></section>
  <section className="section gold-rule"><div className="site-container"><div className="section-heading"><Eyebrow>PROTECCIÓN A TU MEDIDA</Eyebrow><h2>Para cada etapa de la vida.</h2><p>Soluciones claras para lo que más te importa. Siempre con alguien al otro lado que conoce tu caso.</p></div><div className="insurance-grid">{products.map(({name,text,icon:Icon}) => <Link to="/seguros" className="insurance-card" key={name}><Icon/><div className="card-bottom"><div><h3>{name}</h3><p>{text}</p></div><ArrowUpRight size={17}/></div></Link>)}</div><Link className="text-link" to="/seguros">Ver todos los seguros <ArrowRight size={16}/></Link></div></section>
  <section className="stats-band"><div className="site-container"><Eyebrow>DE UN VISTAZO</Eyebrow><div className="stats-grid"><div className="stat"><strong>+30</strong><span>años en el sector del seguro</span></div><div className="stat"><strong>+16</strong><span>años es lo que llevan con nosotros algunos clientes</span></div><div className="stat"><strong>3</strong><span>compañías: Zurich, ARAG y DKV</span></div><div className="stat"><strong>España</strong><span>Territorio nacional, con atención presencial y a distancia</span></div></div></div></section>
  <section className="section site-container"><div className="review-panel"><div><Eyebrow>UNA SEGUNDA MIRADA</Eyebrow><h2>¿Ya tienes seguro y no sabes si es el que te conviene?</h2></div><div><p>Tráelo o envíanoslo por email. Lo revisamos contigo, te explicamos qué cubre y qué no, y te decimos con sinceridad si hay algo mejor. Sin compromiso.</p><Button asChild size="lg"><Link to="/contacto" search={{ asunto: "revision" }}>Pide una revisión de tu póliza <ArrowUpRight/></Link></Button></div></div></section>
  <SectionCTA title="Aquí, tu seguro nunca es un número más." text="Conoce a Gemma y descubre quién estará a tu lado cuando lo necesites." label="Quién te atiende" asunto="contacto" />
</>; }