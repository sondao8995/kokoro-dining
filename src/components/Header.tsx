"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Drawer } from "antd";
import { Menu as AntMenu } from "antd";

import { routes } from "@/utils/routes";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

interface IMenuDrawerProps {
  open: boolean;
  onClose: VoidFunction;
}

function MenuDrawer({ open, onClose }: IMenuDrawerProps) {
  const router = useRouter();

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

              router.push(routes.HOME);
            },
          },
          {
            label: "Menu",
            key: "menu",
            onClick: () => {
              onClose();

              router.push(routes.MENU);
            },
          },
          {
            label: "Tin tức & Sự kiện",
            key: "promotions",
            onClick: () => {
              router.push(routes.PROMOTIONS);
            },
          },
        ]}
      />
    </Drawer>
  );
}
export function Header() {
  const [drawerOpen, drawerHandlers] = useDisclosure(false);

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
            <Link
              href="/"
              className="text-red-600 transition-colors hover:text-red-700"
            >
              TRANG CHỦ
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              MENU
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600">
                <span>KHÁM PHÁ CÁC DỊCH VỤ</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 transition-colors hover:text-red-600">
                <span>VỀ CHÚNG TÔI</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <Link
              href="/promotions"
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              KHUYẾN MÃI
            </Link>
            <Link
              href="/membership"
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              THÀNH VIÊN
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 transition-colors hover:text-red-600"
            >
              LIÊN HỆ
            </Link>
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
