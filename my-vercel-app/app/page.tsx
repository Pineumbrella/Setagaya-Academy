import { About } from "@/components/About/About";
import { Access } from "@/components/Access/Access";
import { CourseSection } from "@/components/CourseSection/CourseSection";
import { CTA } from "@/components/CTA/CTA";
import { Features } from "@/components/Features/Features";
import { Flow } from "@/components/Flow/Flow";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { MapSection } from "@/components/MapSection/MapSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Access />
        <About />
        <Features />
        <CourseSection />
        <CTA variant="filled" />
        <Flow />
        <CTA variant="outline" />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
