"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Drawer } from "antd";
import { Menu as AntMenu } from "antd";
import { useTranslations } from "next-intl";
import { useDisclosure } from "@mantine/hooks";
import { garet } from "@/app/font";
interface IMenuDrawerProps {
  open: boolean;
  onClose: VoidFunction;
}

function MenuDrawer({ open, onClose }: IMenuDrawerProps) {
  const t = useTranslations("common");
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
            label: t("home"),
            onClick: () => {
              onClose();
              scrollToSection("home");
            },
          },
          {
            label: t("contact"),
            key: "contact",
            onClick: () => {
              onClose();
              scrollToSection("contact");
            },
          },
          {
            label: t("menu"),
            key: "menu",
            onClick: () => {
              onClose();

              scrollToSection("menu");
            },
          },
          {
            label: t("promotions"),
            key: "promotions",
            onClick: () => {
              onClose();
              scrollToSection("promotions");
            },
          },
          {
            label: t("special"),
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
  const t = useTranslations("common");
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
          <Link href="/" className="flex items-center space-x-2 mt-1">
            <Image
              src="/images/2.png"
              alt="Kokoro Logo"
              width={100}
              height={40}
              style={{ width: "auto" }}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <span className="flex items-center space-x-1">
              <Link href="/en">
                <Image
                  src="/images/en.png"
                  alt="English"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="/vi">
                <Image
                  src="/images/vi.png"
                  alt="Vietnamese"
                  width={20}
                  height={20}
                />
              </Link>
            </span>

            <button
              onClick={() => scrollToSection("home")}
              className="text-red-600 transition-colors hover:text-red-700"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              {t("menu")}
            </button>
            <button
              onClick={() => scrollToSection("promotions")}
              className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600"
            >
              {t("promotions")}
            </button>
            <button
              onClick={() => scrollToSection("special")}
              className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600"
            >
              {t("special")}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              {t("contact")}
            </button>
          </nav>
          <span className="flex items-center space-x-3 md:hidden lg:hidden mr-2">
            <Link href="/en">
              <Image
                src="/images/en.png"
                alt="English"
                width={20}
                height={20}
              />
            </Link>
            <Link href="/vi">
              <Image
                src="/images/vi.png"
                alt="Vietnamese"
                width={20}
                height={20}
              />
            </Link>
            <button onClick={drawerHandlers.open} className="!text-black">
              <Menu />
            </button>
          </span>
        </div>
      </header>
    </>
  );
}
