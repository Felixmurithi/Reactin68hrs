import { useState } from "react";

function Multiply({ hook }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [total, setTotal] = useState("");

  const [allowColor, setAllowColor] = useState(false);

  const [bg] = hook(num1, num2, allowColor, setTotal, total);

  return (
    <div className=" grid grid-cols-[auto_auto] gap-2 border-2  py-2 ">
      <div className=" flex justify-around gap-2 px-2">
        <input
          placeholder="0"
          className="h-11 w-2/6 rounded border border-emerald-800 px-2 "
          type="number"
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <span className="self-start">x</span>
        <input
          placeholder="0"
          className="h-11 w-2/6 rounded border border-emerald-800 px-2"
          type="number"
          onChange={(e) => setNum2(Number(e.target.value))}
        />

        <span className="text-4xl">=</span>
      </div>

      <div className="flex flex-col  gap-10 ">
        <div className="flex gap-4">
          <span className={`p-2`} style={{ backgroundColor: bg }}>
            {num1 * num2}
          </span>
          <button
            className="self-center rounded  border-2 border-black bg-stone-400 px-2"
            onClick={() => {
              setTotal(num1 * num2 * num3);
            }}
          >
            x
          </button>
          <input
            placeholder="0"
            className="h-11 w-2/6 rounded border border-emerald-800 px-2 "
            type="number"
            onChange={(e) => setNum3(Number(e.target.value))}
          />
          <span className={`p-2`} style={{ backgroundColor: bg }}>
            {total}
          </span>
        </div>

        <div className="flex gap-3">
          <label htmlFor="randomcolor" className="text-sm">
            random background-color
          </label>
          <input
            type="checkbox"
            id="randomcolor"
            className="border border-stone-600"
            onChange={(e) => setAllowColor(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

export default Multiply;
