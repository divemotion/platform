import { Button } from "ui";

export default function Web() {
  const test = "test";
  if (test === "test") return <div>test</div>;
  return (
    <div>
      <h1>Web</h1>
      <a href="/hi">hi</a>
      <Button />
    </div>
  );
}
