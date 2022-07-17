import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { SvgIcon } from "ui/SvgIcon";

import SideBar from "@/components/BurgerMenu";

import { Link } from "./Link";

interface PageProps {
  children?: React.ReactNode;
  fixed?: boolean;
}

export const MainLayout = ({ children, fixed = true }: PageProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 52) {
      setIsScrolled(true);
      return;
    }
    console.log(position);
    setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative flex flex-col bg-gray-1">
      <div
        css={[
          fixed && tw`fixed`,
          isScrolled && tw`bg-white border-b border-gray-3 shadow-sm`,
          !isScrolled && tw`bg-transparent`,
          tw`z-[21] flex w-full text-gray-9 transition-colors duration-300`,
        ]}
      >
        <SideBar isScroll={isScrolled} />
        <div className="container mx-auto flex max-w-screen-diveScreen">
          <div className="flex flex-1 justify-center py-3.5 px-[18px]">
            <div
              id="logo"
              className="flex items-center justify-center gap-2 md:mr-10 md:justify-start lg:mr-28"
            >
              <SvgIcon
                css={[
                  tw`h-5 w-5`,
                  isScrolled && tw`bg-emerald-5`,
                  !isScrolled && tw`bg-white`,
                ]}
                mark
                icon="logo"
              />
              <SvgIcon
                css={[
                  tw`h-[23px] w-[91px] bg-emerald-5`,
                  isScrolled && tw`bg-emerald-5`,
                  !isScrolled && tw`bg-white`,
                ]}
                mark
                icon="logoText"
              />
            </div>
            <div className=" hidden flex-1 gap-4 md:flex lg:gap-6">
              <NextLink href="/" passHref>
                <a>
                  <Link active={router.pathname === "/"} isScroll={isScrolled}>
                    ค้นหาทริปดำน้ำ
                  </Link>
                </a>
              </NextLink>
              <Link isScroll={isScrolled}>เกี่ยวกับเรา</Link>

              <Link isScroll={isScrolled}>แจ้งปัญหา/แนะนำ</Link>
            </div>
            <div className="hidden gap-4 md:flex lg:gap-6">
              <Link isScroll={isScrolled} icon="phone">
                08-8987-4693
              </Link>
              <a css={[tw`hidden lg:block`]}>
                <Link isScroll={isScrolled} icon="mail">
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
    </div>
  );
};
