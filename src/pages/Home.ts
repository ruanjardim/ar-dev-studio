import { ConversionPath } from "../components/ConversionPath";
import { EngagementModels } from "../components/EngagementModels";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { MvpRescue } from "../components/MvpRescue";
import { Partnership } from "../components/Partnership";
import { Projects } from "../components/Projects";
import { ServicesShowcase } from "../components/ServicesShowcase";
import { TechnologyMarquee } from "../components/TechnologyMarquee";

export function Home(): string {
  return `
    ${Hero()}
    ${MvpRescue()}
    ${ServicesShowcase()}
    ${Projects()}
    ${ConversionPath()}
    ${TechnologyMarquee()}
    ${Partnership()}
    ${EngagementModels()}
    ${FinalCta()}
  `;
}
