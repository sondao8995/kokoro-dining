import { Clock, Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-auto px-4 py-12 border border-gray-200 !bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#673110]">
        Liên hệ
      </h2>

      {/* Social Media Links */}
      <div className="flex gap-4 mb-8 justify-center">
        <a
          href="https://www.facebook.com/kokoro30yenninh"
          className="text-blue-600 hover:text-blue-700"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://instagram.com/kokorodiningvn"
          className="text-pink-600 hover:text-pink-700"
        >
          <Instagram size={24} />
        </a>
      </div>

      {/* Locations Grid */}
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {locations.map((location, index) => (
          <div key={index} className="space-y-2">
            <p className="font-medium text-center text-[#673110] font-semibold">
              {location.address}
            </p>
            <p className="text-sm text-gray-400 text-center">
              <div className="flex items-center justify-center">
                <Clock size={16} />
                {location.hours}
              </div>
            </p>
            <p className="text-sm text-center text-black">
              <div className="flex items-center justify-center">
                <Phone size={16} />
                <span className="text-red-600 font-semibold">
                  {location.hotline}
                </span>
              </div>
            </p>
            <div className="flex gap-8 mt-2 justify-center">
              <a href={location.shopee} target="_blank">
                <Image
                  src="/images/shopee.png"
                  alt="Shopee Food"
                  width={50}
                  height={50}
                />
              </a>
              <a href={location.be} target="_blank">
                <Image src="/images/be.png" alt="Be" width={50} height={50} />
              </a>
              <a href={location.deliveryk} target="_blank">
                <Image
                  src="/images/deliveryk.png"
                  alt="Delivery K"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const locations = [
  {
    address:
      "Cơ sở 1:  32BT4, Bán Đảo Linh Đàm, Khu đô thị Linh Đàm, Hoàng Mai, Hà Nội",
    hours: "10:00 - 14:00 & 17:00 - 21:00",
    hotline: "0332 689 299",
    shopee: "https://shopeefood.vn/u/5eH4Cri",
    be: "https://be.com/5eH4Cri",
    deliveryk: "https://www.deliveryk.com/shops/11169",
  },
  {
    address:
      "Cơ sở 2: 37F Kim Mã Thượng, Ba Đình, HN30 P. Yên Ninh, Trúc Bạch, Ba Đình, Hà Nội",
    hours: "10:00 - 14:00 & 17:00 - 21:00",
    hotline: "0828 826 299",
  },
];

export default Footer;
