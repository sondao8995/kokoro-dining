import { Header } from "../../components/Header";
import Cover from "../../components/Hero";
import About from "../../components/Services";
import Footer from "../../components/Footer";
import SinglePageMenu from "@/components/SinglePageMenu";
import TwoPagesMenu from "@/components/TwoPagesMenu";
import Contact from "@/components/Contact";
import { utma } from "@/app/font";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("common");
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
    <div className={`${utma.className}`}>
      <Header />
      <main className="bg-[#feecd6]">
        <Cover />
        <About />
        <Contact />
        <TwoPagesMenu
          images={menuImages}
          title={t("menu")}
          id="menu"
        />
        <SinglePageMenu
          images={promotionImages}
          title={t("promotions")}
          id="promotions"
        />
        <SinglePageMenu
          images={speacialImages}
          title={t("special")}
          id="special"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
