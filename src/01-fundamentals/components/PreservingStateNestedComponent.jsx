import { useState } from "react";
import { Add, ExampleDiv, Subtract } from "../../UI/Example";
import { Like, SpanLarge } from "../../UI/Text";

function PreservingStateNestedComponent() {
  const [input, setinput] = useState("");
  return (
    <div className="flex flex-col items-center gap-6 bg-stone-100 p-3">
      <Likes />
      <input
        className="flex-initial border-2 border-stone-500"
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
    </div>
  );
  function Likes() {
    const [likes1, setLikes1] = useState(0);
    return (
      <ExampleDiv>
        <Add onClick={() => setLikes1((likes) => likes + 1)} />
        <Like />
        <SpanLarge>{likes1}</SpanLarge>
        <Subtract onClick={() => setLikes1((likes) => likes - 1)} />
      </ExampleDiv>
    );
  }
}
export default PreservingStateNestedComponent;
