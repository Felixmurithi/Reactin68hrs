import { useState } from "react";
import { InputField, Option, Select } from "../../UI/Input";

import { Span } from "../../UI/Text";

function ControlledComponent() {
  const [input, setInput] = useState();
  const [tool, setTool] = useState();

  return (
    <div className="grid grid-cols-1  flex-col gap-6">
      <div className="flex justify-around">
        <InputField
          type="text"
          placeHolder="type here"
          onChange={(e) => setInput(e.target.value)}
        />

        <span className="w-[100px] overflow-hidden rounded-[3px] border border-stone-400">
          {input}
        </span>
      </div>
      <div className="flex justify-around">
        <Select onChange={(e) => setTool(e.target.value)}>
          <Option value="computer">Computer</Option>
          <Option value="internet">Internet</Option>
          <Option value="tutor">Tutor</Option>
        </Select>

        <span className="w-[100px]  rounded-[3px] border border-stone-700">
          {tool}
        </span>
      </div>
    </div>
  );
}

export default ControlledComponent;
