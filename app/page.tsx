import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
