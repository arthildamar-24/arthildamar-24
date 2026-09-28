export default function Proceso() {
  const steps = [
    ["01", "Color", "Pigmentos, tonos y una primera intención."],
    ["02", "Fluidez", "La resina comienza a desplazarse."],
    ["03", "Movimiento", "La materia encuentra su propia dirección."],
    ["04", "Tiempo", "El curado transforma la superficie."],
    ["05", "Obra", "Una pieza que no puede repetirse exactamente."]
  ];

  return (
    <main className="page process">
      <div className="page-intro">
        <p className="eyebrow">EL PROCESO</p>
        <h1>La materia<br /><em>encuentra su camino.</em></h1>
        <p>Detrás de cada superficie hay capas, decisiones y momentos que no vuelven a ocurrir.</p>
      </div>
      <div className="steps">
        {steps.map(([n, title, text]) => (
          <article key={n} className="step">
            <span>{n}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}