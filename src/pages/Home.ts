import { ConversionPath } from "../components/ConversionPath";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { LabsPreview } from "../components/LabsPreview";
import { Manifesto } from "../components/Manifesto";
import { ProjectQualification } from "../components/ProjectQualification";
import { Services } from "../components/Services";

export function Home(): string {
  return `
    ${Hero()}
    ${Manifesto()}
    ${Services()}
    ${ConversionPath()}
    ${ProjectQualification()}
    ${LabsPreview()}
    ${Faq()}
    ${FinalCta()}
  `;
}
