import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { SvgIcon } from "ui/SvgIcon";

import SideBar from "@/components/BurgerMenu";
import { Footer } from "@/components/Footer";
import { FullLogo } from "@/components/FullLogo";

import { Link } from "./Link";

interface PageProps {
  children?: React.ReactNode;
  fixed?: boolean;
  transparent?: boolean;
}

export const MainLayout = ({
  children,
  fixed = true,
  transparent = false,
}: PageProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 52) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-1">
      <div
        css={[
          fixed && tw`fixed`,
          (isScrolled || !transparent) &&
            tw`bg-white border-b border-gray-3 shadow-sm`,
          !isScrolled && transparent && tw`bg-transparent`,
          tw`z-[21] flex w-full text-gray-9 transition-colors duration-300 items-center`,
        ]}
      >
        <SideBar isScroll={isScrolled} />
        <div className="container mx-auto flex max-w-screen-diveScreen">
          <div className="flex flex-1 items-center justify-center py-3.5 px-[18px]">
            <div className="-my-3 md:mr-10 lg:mr-28">
              <FullLogo light={!isScrolled && transparent} />
            </div>
            <div className=" hidden flex-1 gap-4 md:flex lg:gap-6">
              <NextLink href="/" passHref>
                <a>
                  <Link
                    active={router.pathname === "/"}
                    isScroll={isScrolled}
                    transparent={transparent}
                  >
                    ค้นหาทริปดำน้ำ
                  </Link>
                </a>
              </NextLink>
              <NextLink href="/trip" passHref>
                <a>
                  <Link
                    active={router.pathname === "/trip"}
                    isScroll={isScrolled}
                    transparent={transparent}
                  >
                    เกี่ยวกับเรา
                  </Link>
                </a>
              </NextLink>

              <Link isScroll={isScrolled} transparent={transparent}>
                แจ้งปัญหา/แนะนำ
              </Link>
            </div>
            <div className="hidden gap-4 md:flex lg:gap-6">
              <Link
                isScroll={isScrolled}
                icon="phone"
                transparent={transparent}
              >
                08-8987-4693
              </Link>
              <a css={[tw`hidden lg:block`]}>
                <Link
                  isScroll={isScrolled}
                  icon="mail"
                  transparent={transparent}
                >
                  hello@divemotion.com
                </Link>
              </a>
            </div>
          </div>
        </div>
        <SvgIcon
          className="invisible my-3.5 mx-[18px] h-5 w-5 md:hidden"
          icon="burgerMenu"
        />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
