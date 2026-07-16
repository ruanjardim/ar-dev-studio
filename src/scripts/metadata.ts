const structuredDataId = "ar-dev-studio-structured-data";

export function applyStructuredData(): void {
  const existingScript = document.getElementById(structuredDataId);

  if (existingScript) {
    existingScript.remove();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AR Dev Studio",
    description:
      "Software House orientada por arquitetura, engenharia e evolucao continua de sistemas.",
    email: "contato@ardevstudio.com",
    url: window.location.origin,
    logo: new URL("/brand-mark.svg", window.location.origin).toString(),
    slogan: "Projetamos sistemas que evoluem.",
    knowsAbout: [
      "Arquitetura de software",
      "Sistemas digitais",
      "TypeScript",
      "Interfaces web",
      "Evolucao de sistemas",
    ],
  };

  const script = document.createElement("script");
  script.id = structuredDataId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);

  document.head.append(script);
}
