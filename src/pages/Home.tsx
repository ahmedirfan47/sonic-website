import { Hero } from "../sections/Hero";
import { Problem } from "../sections/Problem";
import { Solution } from "../sections/Solution";
import { ProductShowcase } from "../sections/ProductShowcase";
import { HowItWorks } from "../sections/HowItWorks";
import { WhoItsFor } from "../sections/WhoItsFor";
import { Founder } from "../sections/Founder";
import { ContactCTA } from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ProductShowcase />
      <HowItWorks />
      <WhoItsFor />
      <Founder />
      <ContactCTA />
    </>
  );
}