import { ArchitecturePrinciples } from "../components/ArchitecturePrinciples";
import { Delivery } from "../components/Delivery";
import { DiagnosticFit } from "../components/DiagnosticFit";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { Manifesto } from "../components/Manifesto";
import { MaturitySignals } from "../components/MaturitySignals";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { Services } from "../components/Services";
import { StackStandards } from "../components/StackStandards";
import { TechnicalDifferentials } from "../components/TechnicalDifferentials";

export function Home(): string {
  return `
    ${Hero()}
    ${Manifesto()}
    ${DiagnosticFit()}
    ${ArchitecturePrinciples()}
    ${Services()}
    ${StackStandards()}
    ${ProcessTimeline()}
    ${MaturitySignals()}
    ${Delivery()}
    ${TechnicalDifferentials()}
    ${Faq()}
    ${FinalCta()}
  `;
}
