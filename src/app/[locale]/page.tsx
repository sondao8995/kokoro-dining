import { Header } from "../../components/Header";
import Cover from "../../components/Cover";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import { utma } from "@/app/font";
import { useTranslations } from "next-intl";
import SnowParticle from "@/components/SnowParticle";
import Advertisement from "@/components/Advertisement";
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
    "/images/special1.png",
    "/images/promotion1.png",
    "/images/promotion2.png",
    "/images/promotion3.png",
    "/images/promotion4.png",
  ];
  const speacialImages = [
    "/images/special2.png",
    "/images/special3.png",
    "/images/special4.png",
    "/images/special5.png",
    "/images/special6.png",
  ];
  return (
    <div className={`${utma.className}`}>
      <SnowParticle />
      <Header />
      <main className="kokoro-main">
        <Advertisement/>
        <Cover />
        <About />
        <Contact />
        <Menu images={menuImages} title={t("menu")} id="menu" />
        <Menu
          images={promotionImages}
          title={t("promotions")}
          id="promotions"
        />
        <Menu images={speacialImages} title={t("special")} id="special" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
