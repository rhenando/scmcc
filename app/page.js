// app/page.jsx

import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import OurGoals from "@/components/OurGoals";
import Services from "@/components/Services";
import SpecializedServices from "@/components/SpecializedServices";
import Strengths from "@/components/Strengths";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhoWeServe from "@/components/WhoWeServe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <VisionMission />
      <Values />
      <OurGoals />
      <Services />
      <SpecializedServices />
      <Strengths />
      <WhyChooseUs />
      <WhoWeServe />
    </>
  );
}
