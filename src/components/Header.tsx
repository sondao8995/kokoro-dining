"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Drawer } from "antd";
import { Menu as AntMenu } from "antd";

import { useDisclosure } from "@mantine/hooks";

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
        className="!border-none !bg-transparent [&_.ant-menu-item.ant-menu-item-selected]:!bg-primary [&_.ant-menu-item.ant-menu-item-selected]:!text-white"
        items={[
          {
            key: "home",
            label: "Trang chủ",
            onClick: () => {
              onClose();
              scrollToSection("home");
            },
          },
          {
            label: "Menu",
            key: "menu",
            onClick: () => {
              onClose();

              scrollToSection("menu");
            },
          },
          {
            label: "Chương trình nổi bật",
            key: "promotions",
            onClick: () => {
              onClose();
              scrollToSection("promotions");
            },
          },
          {
            label: "Món ăn nổi bật",
            key: "special",
            onClick: () => {
              onClose();
              scrollToSection("special");
            },
          },
          {
            label: "Liên hệ & Đặt bàn",
            key: "contact",
            onClick: () => {
              onClose();
              scrollToSection("contact");
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
              TRANG CHỦ
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              MENU
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600">
                <span>CHƯƠNG TRÌNH NỔI BẬT</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600">
                <span>MÓN ĂN NỔI BẬT</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

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
