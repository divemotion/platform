import tw from "twin.macro";
import { Button, styled } from "ui";

const Wrapper = styled.div``;

export default function Web() {
  return (
    <Wrapper className="container mx-auto">
      <h1 className="text-center text-header1 font-bold italic pt-10 pb-10 underline">
        Button ปุ่ม
      </h1>
      <div className="flex gap-4 items-start mb-4">
        <Button border="rounded">Button ปุ่ม</Button>
        <Button>Button ปุ่ม</Button>
        <Button size="md">Button ปุ่ม</Button>
        <Button size="lg">Button ปุ่ม</Button>
        <Button size="xl">Button ปุ่ม</Button>
        <Button size="xxl">Button ปุ่ม</Button>
        <Button size="xxl" disabled={true}>
          Button ปุ่ม
        </Button>
      </div>
      <div className="flex gap-4 items-start mb-4">
        <Button border="rounded" variant="outline">
          Button ปุ่ม
        </Button>
        <Button variant="outline">Button ปุ่ม</Button>
        <Button variant="outline" size="md">
          Button ปุ่ม
        </Button>
        <Button variant="outline" size="lg">
          Button ปุ่ม
        </Button>
        <Button variant="outline" size="xl">
          Button ปุ่ม
        </Button>
        <Button variant="outline" size="xxl">
          Button ปุ่ม
        </Button>
        <Button variant="outline" size="xxl" disabled={true}>
          Button ปุ่ม
        </Button>
      </div>
      <div className="flex gap-4 items-start mb-4">
        <Button border="rounded" color="primary">
          Button ปุ่ม
        </Button>
        <Button color="primary">Button ปุ่ม</Button>
        <Button color="primary" size="md">
          Button ปุ่ม
        </Button>
        <Button color="primary" size="lg">
          Button ปุ่ม
        </Button>
        <Button color="primary" size="xl">
          Button ปุ่ม
        </Button>
        <Button color="primary" size="xxl">
          Button ปุ่ม
        </Button>
        <Button color="primary" size="xxl" disabled={true}>
          Button ปุ่ม
        </Button>
      </div>
      <div className="flex gap-4 items-start mb-4">
        <Button border="rounded" variant="outline" color="primary">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary" size="md">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary" size="lg">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary" size="xl">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary" size="xxl">
          Button ปุ่ม
        </Button>
        <Button variant="outline" color="primary" size="xxl" disabled={true}>
          Button ปุ่ม
        </Button>
      </div>
    </Wrapper>
  );
}
