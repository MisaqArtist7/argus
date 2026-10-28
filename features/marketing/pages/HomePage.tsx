import { HeroSection } from "../components/HeroSection";
import { IntroSection } from "../components/IntroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { CtaSection } from "../components/CtaSection";
import { ContactCtaSection } from "../components/ContactCtaSection";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <CtaSection />
      <ContactCtaSection />
    </div>
  );
}
