import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageIntro, SectionCTA, meta } from "@/components/site";
export const Route = createFileRoute("/como-trabajamos")({ head: () => meta("Cómo trabajamos", "Primero escuchamos, después estudiamos y explicamos tu seguro. También gestionamos siniestros contigo y revisamos las coberturas cada año."), component: Process });
const steps = [
  ["Escuchamos", "La primera conversación puede ser en la oficina, por teléfono o por videollamada. Queremos saber qué tienes, qué te preocupa y qué no podrías permitirte perder. Partimos de tu situación concreta."],
  ["Estudiamos", "Buscamos, entre las compañías con las que trabajamos, la opción que mejor encaja con tu caso y con tu presupuesto. Si ya tienes póliza, empezamos por revisarla para no duplicar coberturas ni dejar huecos."],
  ["Explicamos y contratamos", "Antes de firmar repasamos contigo qué cubre la póliza, qué no y cuánto pagarías tú en caso de siniestro. Si algo no queda claro, lo volvemos a explicar."],
  ["Gestionamos los siniestros contigo", "Si pasa algo, llámanos o escríbenos cuanto antes. Te decimos qué hacer, te ayudamos con el parte y hacemos el seguimiento con la compañía hasta que el asunto se resuelve."],
  ["Revisamos cada año", "Las renovaciones son buen momento para comprobar si la póliza sigue encajando: una mudanza, un hijo, un coche nuevo, un negocio que crece. Ajustamos la cobertura a cómo ha cambiado tu vida."],
];
const checks = [
  ["Capital asegurado", "Que la cantidad se corresponda con el valor real de lo que proteges. Si el capital es insuficiente, la indemnización también lo será."],
  ["Exclusiones", "Lo que la póliza no cubre. Es mejor saberlo antes de necesitarlo."],
  ["Franquicia", "La parte del daño que pagas tú. Una franquicia más alta suele abaratar la prima, siempre que puedas asumirla sin problema."],
  ["Carencias y límites", "Los plazos de espera antes de que una cobertura entre en vigor y los topes máximos de indemnización."],
];
function Process() { return <><PageIntro eyebrow="NUESTRA FORMA DE TRABAJAR" title="Primero entender. Luego proteger."><p>El método es sencillo y no cambia según el seguro: primero entender, luego proponer y después seguir contigo.</p></PageIntro><section className="section site-container"><div className="section-heading"><Eyebrow>PASO A PASO</Eyebrow><h2>Contigo, de principio a fin.</h2></div><div className="steps">{steps.map(([title,body],i) => <article className="step" key={title}><span className="step-number">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section><section className="section gold-rule"><div className="site-container"><div className="section-heading"><Eyebrow>LA LETRA PEQUEÑA, BIEN CLARA</Eyebrow><h2>Lo que miramos en cualquier póliza.</h2></div><div className="check-grid">{checks.map(([title,body]) => <article className="check-item" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><SectionCTA/></>; }