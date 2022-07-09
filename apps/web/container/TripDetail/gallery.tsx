import React from "react";
import tw from "twin.macro";
import { BgImg, Modal } from "ui";

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1628630500614-1c8924c99c3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1622567817558-3eac5d13fa86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1605387202149-47169c4ea58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1605387202149-47169c4ea58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  ];
  return (
    <div>
      <Modal isOpen={true} onClose={() => alert("hi")} />
      <div className="container mx-auto">
        <div className="relative grid grid-flow-col grid-cols-4 grid-rows-2 overflow-hidden sm:mt-4 sm:gap-2 sm:rounded-lg">
          {images.slice(0, 5).map((image, index) => (
            <div
              key={image}
              css={[
                tw`bg-cover bg-center bg-red-3 overflow-hidden pt-[100%] relative`,
                index === 0 && tw`row-span-2 col-span-2`,
                index > 5 && tw`hidden`,
              ]}
            >
              <BgImg
                src={image}
                className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
              />
            </div>
          ))}
          <div className=" absolute bottom-4 right-4 cursor-pointer rounded-lg border border-gray-10 bg-white px-4 py-1 text-body6 text-gray-10">
            Show All Photo
          </div>
        </div>
      </div>
    </div>
  );
};
