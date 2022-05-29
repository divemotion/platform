import { Button, styled } from "ui";

const Wrapper = styled.div`
  background: bisque;
`;

export default function Web() {
  return (
    <Wrapper>
      <h1 className="text-center font-mono text-3xl font-bold pt-10">Web</h1>
      <Button />
    </Wrapper>
  );
}
