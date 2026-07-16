import { ArchitecturePrinciples } from "../components/ArchitecturePrinciples";
import { Delivery } from "../components/Delivery";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { Manifesto } from "../components/Manifesto";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { Services } from "../components/Services";
import { TechnicalDifferentials } from "../components/TechnicalDifferentials";

export function Home(): string {
  return `
    ${Hero()}
    ${Manifesto()}
    ${ArchitecturePrinciples()}
    ${Services()}
    ${ProcessTimeline()}
    ${Delivery()}
    ${TechnicalDifferentials()}
    ${FinalCta()}
  `;
}
