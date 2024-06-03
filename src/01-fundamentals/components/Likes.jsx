import { memo, useState } from "react";
import { Add, ExampleDiv, Subtract } from "../../UI/Example";
import { Like, SpanLarge } from "../../UI/Text";

export const Likes = function Likes() {
  const [likes, setLikes] = useState(0);
  return (
    <ExampleDiv>
      <Add onClick={() => setLikes((likes) => likes + 1)} />
      <Like />
      <SpanLarge>{likes}</SpanLarge>
      <Subtract onClick={() => setLikes((likes) => likes - 1)} />
    </ExampleDiv>
  );
};
