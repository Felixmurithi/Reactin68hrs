import { useRef, useState } from "react";

import {
  likesAddition,
  infiniteRendersEventHandler,
  infiniteRendersTopLevelCall,
  correctStateUpdating,
  callbackQueue,
  directUpdates,
  setLikesto1,
  setObject,
  useref,
  useRefElement,
  batchupdates,
  lastUpdate,
  setsamelike,
  onchange,
  stateArrayInitial,
} from "../codestrings/StateCodeStrings";

import { Paragraph, Section, Article } from "../../UI/Page";
import CodeHighlight from "../../UI/CodeHighlight";
import { TextBold, SpanLarge, Like } from "../../UI/Text";
import Note from "../../UI/Note";
import { Add, ExampleDiv, Subtract } from "../../UI/Example";
import ControlledComponent from "./ControlledComponent";
import PreservingState from "./PreservingState";
import Props from "./Props";
import StateManagement from "./StateManagement";

//each time the state changes react rerenders and this allows it to see the active componenet

function State() {
  const [likes, setLikes] = useState(() => 0);
  const [singleLike, setSingleLike] = useState(0);
  const [sameLike, setSameLike] = useState(10);
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);
  const [batchLike, setBatchLike] = useState(0);
  const [batchBg, setBatchBg] = useState("");
  const timeoutIdRef = useRef(null);

  function handleLikesIncrement() {
    setLikes((likes) => likes + 1);
  }
  function handleLikesDecrement() {
    if (likes > 0) setLikes((like) => like - 1);
  }
  function handleLikesIncrementX3I() {
    setLikes1((likes1) => likes1 + 1);
    setLikes1(likes1 + 1);
    setLikes1((likes1) => likes1 + 1);
  }
  function handleLikesDencrementX3I() {
    if (likes1 > 0) {
      setLikes1((likes) => likes - 1);
      setLikes1(likes1 - 1);
      setLikes1((likes) => likes - 1);
    }
  }
  function handleLikesIncrementX3II() {
    setLikes2((likes2) => likes2 + 1);
    setLikes2((likes2) => likes2 + 1);
    setLikes2(likes2 + 1);
  }
  function handleLikesDencrementX3II() {
    if (likes2 > 0) {
      setLikes2((likes) => likes - 1);
      setLikes2((likes) => likes - 1);
      setLikes2(likes2 - 1);
    }
  }
  function handleLikesIncrementX3III() {
    setLikes3(likes3 + 1);
    setLikes3(likes3 + 1);
    setLikes3(likes3 + 1);
  }
  function handleLikesDencrementX3III() {
    if (likes3 > 0) {
      setLikes3(likes2 - 3);
      setLikes3(likes2 - 3);
      setLikes3(likes2 - 3);
    }
  }

  return (
    <Article>
      <Section>
        <h1>State</h1>
        <Paragraph>
          <TextBold>State</TextBold>
          is data components hold that can change after some events and actions
          (clicks, input field changes). React uses state to make components
          interactive and responsive.
        </Paragraph>

        <ExampleDiv>
          <Add onClick={handleLikesIncrement} />
          <Like />
          <SpanLarge>{likes}</SpanLarge>
          <Subtract color="red" onClick={handleLikesDecrement} />
        </ExampleDiv>
        <Paragraph>
          A component's view is kept in sync with events and actions after being
          mounted
          <TextBold> initial render</TextBold>
          by updating state value is updated. State updates invoke the component
          function State value updates are persisted after a rerender,
          javascript values declared in the function are reset to their initial
          values and object references change.
        </Paragraph>

        <Paragraph>
          <TextBold>useState is</TextBold> a special React function (hook) that
          returns an array with two elements, the state value and the state
          setter function. The state setter function updates the value of state.
          The initial value of state is passed to useState. This initial value
          is based on the type state update operations required; replacing the
          initial value with a new one, adding new object property, increment or
          decrement.
        </Paragraph>
        <CodeHighlight codeString={stateArrayInitial} copy={true} />
      </Section>
      <Section>
        <h2>Updating State</h2>
        <Paragraph>
          State is immutable and only updated by the setter function. The setter
          function receives the new state value, the state value can be
          subtituted with a new value or calculated based on the previous value
          of state; increasing a state count value depend on the previous value
          of count. To utilize the previous value of state, a callback function
          is passed into the setter function, it receives the previous value of
          state and explicitly returns an updated value of state which is passed
          to the state setter function.
        </Paragraph>
        <CodeHighlight codeString={likesAddition} />

        <Paragraph>
          A single value passed to the setter function replaces the previous
          value.
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={setLikesto1} />
          <ExampleDiv>
            <Add onClick={() => setSingleLike("10")} />
            <Like />
            <SpanLarge>{singleLike}</SpanLarge>
          </ExampleDiv>
        </div>

        <Paragraph>
          Passing values equal to the current value of state does not trigger
          rerendering.
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={setsamelike} />
          <ExampleDiv>
            <Add onClick={() => setSameLike(10)} />
            <Like />
            <SpanLarge>{sameLike}</SpanLarge>
          </ExampleDiv>
        </div>

        <Paragraph>
          State updates are not merged, the value passed to the setter function
          is replaced. Object values have to be destructured and updated if some
          of the object properties are to be altered or new ones introduced.
        </Paragraph>
        <CodeHighlight codeString={setObject}></CodeHighlight>

        <Paragraph>
          State setter functions are not invoked directly at the top level of an
          event handler or the component leads to
          <TextBold>infinite rerenders.</TextBold> All javascript function calls
          at the<TextBold>top level</TextBold>in JSX are invoked implicitly
          after each render causing unprompted state updates.
        </Paragraph>
        <CodeHighlight codeString={infiniteRendersEventHandler}></CodeHighlight>
        <CodeHighlight codeString={infiniteRendersTopLevelCall}></CodeHighlight>
        <Paragraph>
          State setter functions are declared in another function which is
          referenced (not invoked) in the event handler. This function can be
          created directly in the event handler or referenced.
        </Paragraph>
        <CodeHighlight codeString={correctStateUpdating} />
        <Note>
          Event handlers in React are declared implictly. They are written in
          camel case, "on" is prefixed to the capitalized event handler's name.
        </Note>
        <Paragraph>
          React state updates in event handlers are batched, two or more state
          updates are updated at the same time, they only cause one component
          rerender.
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={batchupdates} />
          <ExampleDiv>
            <Add
              onClick={() => {
                if (timeoutIdRef.current) {
                  clearTimeout(timeoutIdRef.current);
                }

                timeoutIdRef.current = setTimeout(() => {
                  setBatchLike((batch) => batch + 1);
                  setBatchBg(
                    `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`,
                  );
                }, 2000);
              }}
            />
            <span
              className={`rounded  px-4  text-7xl text-stone-800`}
              style={{ backgroundColor: batchBg }}
            >
              {batchLike}
            </span>
          </ExampleDiv>
        </div>
        <Paragraph>
          Mutiple state updates of the same state may not always be persisted.
          State updates through direct manipulation of the state value override
          the result of last setter functions while callback function state
          updates reference the values returned by other callback functions .
        </Paragraph>

        <Paragraph>
          The last direct manipulation of the state value overrides the result
          of other direct manipulations of state.
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={directUpdates} />
          <ExampleDiv>
            <Add onClick={handleLikesIncrementX3III} />
            <Like />
            <SpanLarge>{likes3}</SpanLarge>
            <Subtract onClick={handleLikesDencrementX3III} />
          </ExampleDiv>
        </div>
        <Paragraph>
          State update callback functions use the previous value of state. The
          callback functions are queued (they reference the value returned by
          other callback functions in the queue).
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={callbackQueue} />
          <ExampleDiv>
            <Add onClick={handleLikesIncrementX3I} />
            <Like />
            <SpanLarge>{likes1}</SpanLarge>
            <Subtract onClick={handleLikesDencrementX3I} />
          </ExampleDiv>
        </div>

        <Paragraph>
          Queued callbacks will be ignored if the last update is through direct
          state manipulation. Direct updates are not queued, they use the
          current value of state in the <TextBold>closure.</TextBold>
        </Paragraph>
        <div className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 ">
          <CodeHighlight codeString={lastUpdate} />
          <ExampleDiv>
            <Add onClick={handleLikesIncrementX3II} />
            <Like />
            <SpanLarge>{likes2}</SpanLarge>
            <Subtract onClick={handleLikesDencrementX3II} />
          </ExampleDiv>
        </div>
      </Section>

      <Section className="list-inside list-disc" role="list">
        <h2>useRef</h2>
        <Paragraph>
          useRef is react hook whose behaviour mirrors useState, useRef does not
          trigger component rerendering. useRef is used to hold that data that
          is persisted across rerenders but not used in the view. useRef returns
          an object with only one property; current. The value of current can be
          mutated directly, useRef.current initial value is updated after the
          first render.
        </Paragraph>
        <CodeHighlight codeString={useref} />
        <Paragraph>
          useRef is used to keep a record of how many times a certain event or
          action that is related to state change occurs. useRef.current is
          updated in an event handler to keep it in sync with the state it is
          keeps track of. useRef.current is not read or written on render,
          updates to useRef.current will not trigger rerendering and the view
          will not be updated.
        </Paragraph>
        <Paragraph>
          useRef is used to handle DOM events like focusing, scrolling and
          measuring element sizes; these DOM events are not yet implemented in
          React. The ref attribute in elements is assigned the useRef object,
          react internally links the element to useRef.current. The useRef
          object will keep a reference of the element which can be used to
          listen and subscribe to DOM events. Referencing elements makes it
          possible to atleast partially handle these DOM events declaratively.
        </Paragraph>
        <CodeHighlight codeString={useRefElement} />
        <Note>useRef is note used to reference components.</Note>
      </Section>

      <Section>
        <h2>Controlled Input Component</h2>
        <Paragraph>
          The
          <TextBold>onChange</TextBold>
          event handler implicitly keeps changes made in input/select fields in
          sync with state.
        </Paragraph>
        <ControlledComponent />
        <CodeHighlight codeString={onchange} />
        <Note>
          useRef and useState are React hooks. React hooks cannot be declared
          between decision statemenets or early component returns. All react
          hooks are declared before any other code in the components.
        </Note>
      </Section>

      <Props />
      <PreservingState />
      <StateManagement />
    </Article>
  );
}

export default State;
