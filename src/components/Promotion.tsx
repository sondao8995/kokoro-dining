import { NewsCard } from "@/components/NewsCard";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const newsItems = [
  {
    title: "New Seasonal Menu Unveiled",
    excerpt:
      "Discover our latest culinary creations inspired by the flavors of autumn.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "2023-09-15",
  },
  {
    title: "Cooking Class: Sushi Mastery",
    excerpt:
      "Join our expert chefs and learn the art of sushi making in our upcoming workshop.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "2023-09-22",
  },
  {
    title: "Sustainability Initiative Launched",
    excerpt:
      "Learn about our commitment to eco-friendly practices and sustainable sourcing.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "2023-09-30",
  },
];

export function NewsSection() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-12 h-screen">
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#673110]">
            Tin tức & Sự kiện
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
