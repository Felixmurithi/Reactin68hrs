import { memo, useEffect, useState } from "react";
import formatTime from "../../utils/formatTime";
import CodeHighlight from "../../UI/CodeHighlight";
import { timer } from "../codestrings/SideEffectsCodeStrings";

function Now() {
  //   const [time, setTime] = useState("");
  const [time1, setTime2] = useState(formatTime(new Date()));

  useEffect(
    function () {
      const id = setInterval(function () {
        //   setTime(formatTime(new Date()));
        setTime2(formatTime(new Date()));
      }, 1000);

      return function cleanup() {
        clearInterval(id);
      };
    }, //  array not included
  );
  return (
    <div className="my-4 flex flex-col justify-around gap-6">
      <span className="mx-auto  block max-w-fit">Its {time1}</span>
      <CodeHighlight codeString={timer} />
    </div>
  );
}

export default memo(Now);
