import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import DishesSlider from "@/components/DishesSlider";
import Menu from "@/components/Menu";
import ServicesSection from "@/components/ServiceCard";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Services />
        <DishesSlider />
        <Menu />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
