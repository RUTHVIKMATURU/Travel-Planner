import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Destinations from "@/components/home/Destinations";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="landing-page-shell">
      <div aria-hidden="true" className="landing-page-orb landing-page-orb-emerald" />
      <div aria-hidden="true" className="landing-page-orb landing-page-orb-teal" />
      <div aria-hidden="true" className="landing-page-orb landing-page-orb-amber" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Destinations />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
