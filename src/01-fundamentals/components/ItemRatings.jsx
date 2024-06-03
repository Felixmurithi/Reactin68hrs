import { useState } from "react";
import Button from "../../UI/Button";
import { InputField, Option, Select } from "../../UI/Input";
import { ListContainer, ListItem } from "../../UI/List";
import { Span } from "../../UI/Text";

function ItemRatings() {
  const [toolList, setToolList] = useState({});
  const [rating, setRating] = useState();
  const [tool, setTool] = useState("computer");

  function handleSubmit(e) {
    e.preventDefault();

    setToolList((toolList) => {
      return { ...toolList, [`${tool}`]: rating };
    });
  }

  return (
    <div className="flex justify-around rounded-sm bg-stone-100">
      <div className=" self-center">
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <InputField
            type="number"
            placeholder="rating"
            onChange={(e) => setRating(Number(e.target.value))} // add range:TO-DO scroll on increase
          />
          <Select onChange={(e) => setTool(e.target.value)}>
            <Option value="computer">Computer</Option>
            <Option value="internet">Internet</Option>
            <Option value="tutor">Tutor</Option>
          </Select>
          <Button type="submit" color="emerald">
            submit rating
          </Button>
        </form>
      </div>
      <ListContainer>
        {Object.entries(toolList).map(([tool, rating]) => (
          <ListItem key={tool}>
            <Span>{tool}</Span>
            <Span> {rating} / 10</Span>
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
}

export default ItemRatings;
