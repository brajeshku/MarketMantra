import { AboutSection } from "@/components/sections/about-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MarketStrip } from "@/components/sections/market-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MarketStrip />
        <CoursesSection />
        <ApproachSection />
        <AboutSection />
        <TestimonialsSection />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
