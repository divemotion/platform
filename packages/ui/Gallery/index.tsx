import "react-bnb-gallery/dist/style.css";

import { useCallback, useEffect, useState } from "react";
import BnbGallery, { Props } from "react-bnb-gallery";
import tw from "twin.macro";

export const Gallery = (props: Props) => {
  const { activePhotoIndex, photos, show } = props;
  console.log("activePhotoIndex", activePhotoIndex);
  const [index, setIndex] = useState(activePhotoIndex || 0);
  const SIZE = photos.length;
  const onNextPhoto = useCallback(
    () => setIndex((index + 1) % SIZE),
    [SIZE, index]
  );
  const onPrevPhoto = useCallback(
    () => setIndex((SIZE + index - 1) % SIZE),
    [SIZE, index]
  );

  useEffect(() => setIndex(activePhotoIndex || 0), [activePhotoIndex]);

  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      console.log("key", key);

      if (key === "ArrowRight") onNextPhoto();
      if (key === "ArrowLeft") onPrevPhoto();
    },
    [onPrevPhoto, onNextPhoto]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="">
      <BnbGallery
        key={activePhotoIndex}
        {...props}
        activePhotoIndex={(activePhotoIndex || 0) >= 0 ? activePhotoIndex : 0}
        prevButtonPressed={onPrevPhoto}
        nextButtonPressed={onNextPhoto}
        activePhotoPressed={onNextPhoto}
        leftKeyPressed={() => console.log("leftKeyPressed")}
        rightKeyPressed={() => console.log("rightKeyPressed")}
      />
      <div
        className="absolute bottom-4 left-0 z-[2001] flex w-full justify-center"
        css={[!show && tw`hidden`]}
      >
        <div className="rounded-full bg-white px-4 py-1">
          {index + 1} / {SIZE}
        </div>
      </div>
    </div>
  );
};
