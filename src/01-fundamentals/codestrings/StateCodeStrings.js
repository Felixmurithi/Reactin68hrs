export const stateArrayInitial = ` 
const [likes, setLikes] = useState(() => 0);
import { useRef, useState } from "react";`;

export const likesAddition = `
  setLikes((like) => like + 1);`;
export const setLikesto1 = `
setLikes("10"); //the state value replaced`;
export const setsamelike = `
setSameLike(10);`;
export const setObject = `
setState(object=> {...object, {object.value: "altered"}})`;

export const correctStateUpdating = `
function handleLikesIncrement() {
  setLikes((like) => like + 1);
}
<button onClick={handleLikesIncrement}> + </button>
// or
<button onClick={() => setLikes((like)=>like+1)}>+</button>`;
export const infiniteRendersEventHandler = `
function Component () {
  function handleLikesIncrement() {
    setLikes((like) => like + 1);
  }
  <button onClick={handleLikesIncrement()}> + </button>

}`;
export const infiniteRendersTopLevelCall = `
function Component () {
  function handleLikesIncrement() {
    setLikes((like) => like + 1);
  }

  handleLikesIncrement();
}`;

export const batchupdates = `
const [batchLike, setBatchLike] = useState(0);
const [batchBg, setBatchBg] = useState("");

onClick={() => {
  code to clear timer...
}

setTimeout(() => {
  setBatchLike((batch) => batch + 1);
  setBatchBg(
    \`rgb(\${[1, 2, 3].map(() => (Math.random() * 256) | 0)})\`,
  );
}, 2000);`;

export const callbackQueue = `
function handleLikesIncrementX3I() {
  setLikes1((likes1) => likes1 + 1);
  setLikes1(likes1 + 1);
  setLikes1((likes1) => likes1 + 1);
}
//decrement works the same way, + replaced with -
}`;
export const lastUpdate = `
function handleLikesIncrementX3II() {
  setLikes2((likes2) => likes2 + 1);
  setLikes2((likes2) => likes2 + 1);
  setLikes2(likes2 + 1);
}`;

export const directUpdates = `
function handleLikesIncrementX3III() {
  setLikes3(likes3 + 1);
  setLikes3(likes3 + 1);
  setLikes3(likes3 + 1);
}`;

export const useref = `
const focusEl = useRef(null);
focusEl.current= 1`;

export const useRefElement = `
const focusEl = useRef(null);
<input type="text" name="" id="" ref={focusEl} />

<button onClick={handleClick}> deposit </button>

 function handleClick (){
  function callbackFunction(e) {
    if (focusEl.current) {
      focusEl.current.focus();
    }
  }
  document.addEventListener("keydown", callbackFunction);
 }`;

export const onchange = String.raw`
<input onChange={(e) => setInput(e.target.value)} />
<Select onChange={(e) => setTool(e.target.value)}>`;
