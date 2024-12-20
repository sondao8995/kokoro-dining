"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Drawer } from "antd";
import { Menu as AntMenu } from "antd";

import { useDisclosure } from "@mantine/hooks";
import { garet } from "@/app/font";
interface IMenuDrawerProps {
  open: boolean;
  onClose: VoidFunction;
}

function MenuDrawer({ open, onClose }: IMenuDrawerProps) {
  const scrollToSection = (id: string) => {
    onClose();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Drawer open={open} onClose={onClose} placement="right">
      <AntMenu
        className={`!border-none bg-[#feecd6] [&_.ant-menu-item.ant-menu-item-selected]:!bg-primary [&_.ant-menu-item.ant-menu-item-selected]:!text-white ${garet.className}`}
        items={[
          {
            key: "home",
            label: "ĐÔI LỜI TỪ KOKORO",
            onClick: () => {
              onClose();
              scrollToSection("home");
            },
          },
          {
            label: "LIÊN HỆ & ĐẶT BÀN",
            key: "contact",
            onClick: () => {
              onClose();
              scrollToSection("contact");
            },
          },
          {
            label: "KHÁM PHÁ THỰC ĐƠN TẠI KOKORO",
            key: "menu",
            onClick: () => {
              onClose();

              scrollToSection("menu");
            },
          },
          {
            label: "CHƯƠNG TRÌNH & ƯU ĐÃI TỪ KOKORO",
            key: "promotions",
            onClick: () => {
              onClose();
              scrollToSection("promotions");
            },
          },
          {
            label: "ĂN NGON VỚI KOKORO",
            key: "special",
            onClick: () => {
              onClose();
              scrollToSection("special");
            },
          },
        ]}
      />
    </Drawer>
  );
}
export function Header() {
  const [drawerOpen, drawerHandlers] = useDisclosure(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <MenuDrawer open={drawerOpen} onClose={drawerHandlers.close} />

      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/2.png"
              alt="Kokoro Logo"
              width={100}
              height={40}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="text-red-600 transition-colors hover:text-red-700"
            >
              GIỚI THIỆU
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              MENU
            </button>
            <button 
            onClick={() => scrollToSection("promotions")}
            className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600"
            >CHƯƠNG TRÌNH & ƯU ĐÃI
            </button>
            <button
              onClick={() => scrollToSection("special")}
              className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600"
            >
              GỢI Ý MÓN NGON
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              LIÊN HỆ
            </button>
          </nav>
          <button
            onClick={drawerHandlers.open}
            className="flex flex-shrink-0 items-center mr-2 justify-center !text-black lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>
    </>
  );
}
