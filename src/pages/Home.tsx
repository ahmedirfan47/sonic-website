import { Hero } from "../sections/Hero";
import { Problem } from "../sections/Problem";
import { Approach } from "../sections/Approach";
import { Technology } from "../sections/Technology";
import { ProductsIntro } from "../sections/ProductsIntro";
import { IndustriesMarket } from "../sections/IndustriesMarket";
import { VisionMission } from "../sections/VisionMission";
import { Story } from "../sections/Story";
import { Engage } from "../sections/Engage";
import { ContactCTA } from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Technology />
      <ProductsIntro />
      <IndustriesMarket />
      <VisionMission />
      <Story />
      <Engage />
      <ContactCTA />
    </>
  );
}