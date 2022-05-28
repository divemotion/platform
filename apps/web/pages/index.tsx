import { Button } from "ui";

export default function Web() {
  const test = "test";
  if (test === "test") return <div>test</div>;
  return (
    <div>
      <h1>Web</h1>
      <a href="/hi">hi</a>
      {[1, 2, 3, 4].map((item) => (
        <div>{item}</div>
      ))}
      <Button />
    </div>
  );
}
