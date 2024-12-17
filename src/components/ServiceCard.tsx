import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

function ServiceCard({ title, imageUrl, imageAlt }: ServiceCardProps) {
  return (
    <div className="relative p-6 flex flex-col items-center">
      {/* Main content */}
      <a
        href="#"
        className="w-full aspect-square mb-4 border-[16px] rounded-lg overflow-hidden"
        style={{
          borderImage: 'url("/images/border.png") 121 121 round',
          borderImageWidth: "20px",
        }}
      >
        <div className="relative w-full h-full">
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
        </div>
      </a>
      <h3 className="text-xl font-medium text-center mt-2 font-semibold">
        {title}
      </h3>
    </div>
  );
}
const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#673110]">
          Khám phá các dịch vụ
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-[#673110]">
          <ServiceCard
            title="Dịch vụ DELIVERY"
            imageUrl="/images/delivery.jpg"
            imageAlt="Delivery service showing packaged sushi"
          />
          <ServiceCard
            title="Catering - Phục vụ tại nhà"
            imageUrl="/images/catering.jpg"
            imageAlt="Catering service showing wooden box with food"
          />
          <ServiceCard
            title="Quà tặng"
            imageUrl="/images/gift.jpg"
            imageAlt="Gift service showing decorated cake"
          />
        </div>

        {/* Contact Section */}
      </div>
    </section>
  );
};

export default ServicesSection;
