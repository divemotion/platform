import React, { useState } from "react";
import tw from "twin.macro";
import { Props, slide as Menu } from "ui/BurgerMenu";
import { SvgIcon } from "ui/SvgIcon";

const styles = {
  bmItemList: tw`bg-white`,
  overlay: tw`bg-transparent cursor-pointer`,
  menu: tw`w-[375px] sm:w-[700px] top-0`,
  button: tw`overflow-hidden relative`,
};

interface SideBarProps {
  isScroll?: boolean;
}

const BurgerMenu = (props: Props & SideBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Pass on our props
    <div className="md:hidden">
      <Menu
        {...props}
        styles={{
          bmItemList: styles.bmItemList as Partial<CSSStyleDeclaration>,
          bmOverlay: styles.overlay as Partial<CSSStyleDeclaration>,
          bmMenu: styles.menu as Partial<CSSStyleDeclaration>,
          bmMenuWrap: styles.menu as Partial<CSSStyleDeclaration>,
          bmBurgerButton: styles.button as Partial<CSSStyleDeclaration>,
        }}
        onStateChange={(state) => {
          setIsOpen(state.isOpen);
        }}
        customBurgerIcon={
          <div onClick={() => alert("hi")}>
            {isOpen ? (
              <SvgIcon
                css={[
                  tw`my-3.5 mx-[18px] h-5 w-5`,
                  props.isScroll ? tw`bg-emerald-5` : tw`bg-white`,
                ]}
                mark
                icon="xClose"
              />
            ) : (
              <SvgIcon
                css={[
                  tw`my-3.5 mx-[18px] h-5 w-5`,
                  props.isScroll ? tw`bg-emerald-5` : tw`bg-white`,
                ]}
                mark
                icon="burgerMenu"
              />
            )}
          </div>
        }
      >
        <div className="!flex flex-col gap-3">
          <div className="flex justify-end">
            <SvgIcon className="my-3.5 mx-[18px] h-5 w-5" icon="xClose" />
          </div>
          <a
            className="text-center text-body4 font-normal not-italic"
            onClick={() => alert("hi")}
          >
            ค้นหาทริปดำน้ำ
          </a>

          <a
            className="text-center text-body4 font-normal not-italic"
            href="/burgers"
          >
            เกี่ยวกับเรา
          </a>

          <a
            className="text-center text-body4 font-normal not-italic"
            href="/pizzas"
          >
            แจ้งปัญหา/แนะนำ
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
