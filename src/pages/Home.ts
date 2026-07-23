import { ConversionPath } from "../components/ConversionPath";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { LabsPreview } from "../components/LabsPreview";
import { Services } from "../components/Services";

export function Home(): string {
  return `
    ${Hero()}
    ${Services()}
    ${LabsPreview()}
    ${ConversionPath()}
    ${FinalCta()}
  `;
}
