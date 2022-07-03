import tw from "twin.macro";
import { Button, styled } from "ui";

const Wrapper = styled.div``;
export default function Web() {
  return (
    <Wrapper>
      <h1 className="text-center font-mono text-3xl font-bold pt-10">
        Web test action
      </h1>
      <Button>Button</Button>
    </Wrapper>
  );
}
