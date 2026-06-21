import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Topics from "@/components/Topics";
import Resources from "@/components/Resources";
import Batch from "@/components/Batch";
import Journey from "@/components/Journey";
import Register from "@/components/Register";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Batch />
      {/* <Topics /> */}
      {/* <Resources /> */}
      <Journey />
      <Register />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
