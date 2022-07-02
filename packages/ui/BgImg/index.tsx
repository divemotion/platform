import styled, { css } from "styled-components";
import tw from "twin.macro";

interface BgBoxProps {
  src: string;
  mark?: boolean;
}

export const BgImg = styled.div<BgBoxProps>(({ src, mark }) => [
  mark
    ? css`
        mask: url(${src});
      `
    : css`
        background-image: url(${src});
      `,
  css`
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  `,
  tw`bg-center bg-no-repeat`,
]);
