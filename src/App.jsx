import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <WhatsAppButton />
        <Hero />
        <About />
        <WhyChoose />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
