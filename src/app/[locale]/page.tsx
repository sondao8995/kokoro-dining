import { Header } from "../../components/Header";
import Cover from "../../components/Cover";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Menu from "@/components/Menu";
import FoodMenu, { Category } from "@/components/FoodMenu"
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
    "/images/promotion1.jpg",
    "/images/promotion2.jpg",
  ];
  const speacialImages = [
    "/images/special2.png",
    "/images/special3.png",
    "/images/special4.png",
    "/images/special5.png",
    "/images/special6.png",
  ];
  const categories:Category[]= [{
    title: "ca ri",
  image: "/images/categories1.jpg",
  startIndex: 0,
  endIndex: 10,
  },
  {
    title: "ca ri",
  image: "/images/categories2.jpg",
  startIndex: 11,
  endIndex: 13,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  {
    title: "ca ri",
  image: "/images/categories3.jpg",
  startIndex: 14,
  endIndex: 15,
  },
  ]
  return (
    <div className={`${utma.className}`}>
      <SnowParticle />
      <Header />
      <main>
        <Advertisement />
        <Cover />
        <About />
        <Contact />
        {/* Container for sushi and udon images */}
        <div className="fixed inset-0 grid grid-cols-2 place-items-center z-1 opacity-30 pointer-events-none">
          <img 
            src="/images/sushi.png" 
            alt="Sushi"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
          <img 
            src="/images/udon.png" 
            alt="Udon"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
        <FoodMenu images={menuImages} title={t("menu")} id="menu" categories={categories}/>
        <Menu images={promotionImages} title={t("promotions")} id="promotions" />
        <Menu images={speacialImages} title={t("special")} id="special" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;