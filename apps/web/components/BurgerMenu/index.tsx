import React, { useState } from "react";
import tw from "twin.macro";
import { Props, stack as Menu } from "ui/BurgerMenu";
import { SvgIcon } from "ui/SvgIcon";

const styles = {
  bmItemList: tw`bg-white flex flex-col gap-3 pt-4`,
  overlay: tw`bg-transparent cursor-pointer`,
  menu: tw`w-[375px] sm:w-[700px]`,
  button: tw`overflow-hidden relative`,
};

const BurgerMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Pass on our props
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
            <SvgIcon className="my-3.5 mx-[18px] h-5 w-5" icon="xClose" />
          ) : (
            <SvgIcon className="my-3.5 mx-[18px] h-5 w-5" icon="burgerMenu" />
          )}
        </div>
      }
    >
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
    </Menu>
  );
};

export default BurgerMenu;
