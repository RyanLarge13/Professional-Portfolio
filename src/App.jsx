import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import TimeLine from "./components/TimeLine";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className="text-white md:px-40 lg:px-60">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Tech />
      <TimeLine />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
