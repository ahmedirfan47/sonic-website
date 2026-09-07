import { Hero } from "../sections/Hero";
import { WhatSonicIs } from "../sections/WhatSonicIs";
import { Problem } from "../sections/Problem";
import { Approach } from "../sections/Approach";
import { Technology } from "../sections/Technology";
import { ProductsIntro } from "../sections/ProductsIntro";
import { IndustriesMarket } from "../sections/IndustriesMarket";
import { VisionMission } from "../sections/VisionMission";
import { Story } from "../sections/Story";
import { Team } from "../sections/Team";
import { Engage } from "../sections/Engage";
import { ContactCTA } from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatSonicIs />
      <Problem />
      <Approach />
      <Technology />
      <ProductsIntro />
      <IndustriesMarket />
      <VisionMission />
      <Story />
      <Team />
      <Engage />
      <ContactCTA />
    </>
  );
}