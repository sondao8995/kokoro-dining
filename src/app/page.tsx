import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import SinglePageMenu from "@/components/SinglePageMenu";
import TwoPagesMenu from "@/components/TwoPagesMenu";
import ContactSection from "@/components/Contact";
const Home = () => {
  const menuImages = [
    "/images/book-back.jpg",
    "/images/book-cover.jpg",
    "/images/page2.jpg",
    "/images/page3.jpg",
    "/images/page4.jpg",
    "/images/page5.jpg",
    "/images/page6.jpg",
    "/images/page7.jpg",
    "/images/page8.jpg",
    "/images/page9.jpg",
    "/images/page10.jpg",
    "/images/page11.jpg",
    "/images/page12.jpg",
    "/images/page13.jpg",
    "/images/page14.jpg",
    "/images/page15.jpg",
  ];
  const promotionImages = [
    "/images/promotion1.png",
    "/images/promotion2.png",
    "/images/promotion3.png",
  ];
  const speacialImages = [
    "/images/special1.png",
    "/images/special2.png",
    "/images/special3.png",
    "/images/special4.png",
    "/images/special5.png",
  ];
  return (
    <>
      <Header />
      <main className="bg-[#feecd6]">
        <Hero />
        <Services />
        <ContactSection />
        <TwoPagesMenu
          images={menuImages}
          title="Khám phá thực đơn tại KOKORO"
          id="menu"
        />
        <SinglePageMenu
          images={promotionImages}
          title="Chương trình & uu đãi từ KOKORO"
          id="promotions"
        />
        <SinglePageMenu
          images={speacialImages}
          title="Ăn ngon với KOKORO"
          id="special"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
