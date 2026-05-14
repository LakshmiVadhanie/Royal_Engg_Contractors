import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Documents from "@/components/Documents";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Documents />
      <Contact />
      <Footer />
    </main>
  );
}
