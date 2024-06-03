import { Article, Paragraph, Section } from "../../UI/Page";
import useFocusElement from "../../hooks/useFocusElement";
import { TextBold } from "../../UI/Text";
import Note from "../../UI/Note";
import Tabs from "../../UI/Tabs";
import Now from "./Now";
import { ListContainer, ListItem } from "../../UI/List";
import CodeHighlight from "../../UI/CodeHighlight";
import {
  color,
  eventhandler,
  focuselement,
  result,
  sideEffect,
  usecallback,
  useeffect,
  usememo,
  usemultiplyseparatedeffects,
  usemultiplyunrelatedeffects,
  usemultiplyunstablefunction,
} from "../codestrings/SideEffectsCodeStrings";
import Multiply from "./Multiply";
import CurrencyConverter from "./CurrencyConverter";
import useMultiplyUnstableFunction from "../hooks/multiplyadd/useMultiplyUnstableFunction";
import CurrencyConverterII from "./currencyConverterII";
import useMultiplyUnrelatedEffects from "../hooks/multiplyadd/useMultiplyUnrelatedEffects";
import useMultiplySeparatedEffects from "../hooks/multiplyadd/useMultiplySeparatedEffects";

function SideEffects() {
  const [focusEl] = useFocusElement();

  return (
    <Article>
      <Section>
        <h1>Side Effects</h1>
        <Paragraph>
          React componenets have to be kept pure of side effects. Side effects
          are all manipulations that involve
          <TextBold>values/APIs</TextBold>
          other than those derived from React hooks (state, useRef.current) and
          component props. The effect of keeping components pure is that
          external values/APIs are not synced with state or props. Side effects
          are handled in event handlers and react hooks.
        </Paragraph>
        <CodeHighlight codeString={sideEffect} copy={false} />
      </Section>
      <Section>
        <h2>Event Handlers</h2>
        <Paragraph>
          Event handlers directly synchronise DOM events/actions with external
          values APIs and update the corresponding state values. Asynchronous
          API calls and state updates in event handlers are batched.
        </Paragraph>
        <CurrencyConverterII />
        <CodeHighlight codeString={eventhandler} />
      </Section>
      <Section>
        <h2>useEffect</h2>
        <Paragraph>
          The useEffect hook sychronise with effects that need to made when the
          component mounts, when the component unmounts and when
          <TextBold>reactive values</TextBold> are updated. Reactive values are
          all values that when updated can trigger a rerender. Reactive values
          are useEffect dependecies.
        </Paragraph>
        <Note>
          State setter functions are stablised by React, they are not reactive
          values in the parent component.
        </Note>
        <Paragraph>
          The useEffect hook receives two arguments. a
          <TextBold>pure setup function</TextBold> and an
          <TextBold>optional dependency array</TextBold>.The setup function
          syncs effects and makes API subscriptions, it can return an optional
          <TextBold>pure clean-up function</TextBold>
          that is used to sync the unmounting of the component with external
          values/APIs. The optional dependency can be an empty array or an array
          of reactive values. useEffect returns undefined.
        </Paragraph>
        <CodeHighlight codeString={useeffect} />
        <Paragraph>
          useEffect functions are run differently on each component
          lifecycle(mount, rerender, unmount). The dependency array and the
          reactive values determine wether the useEffect runs at all:
        </Paragraph>
        <ListContainer>
          <ListItem>
            On mount (initial render) the setup function will always run, wether
            a dependency array is include or not.
          </ListItem>
          <ListItem>
            After a component rerender, the useEffect will be triggered after
            each component rerender if any reactive values in the dependency
            array have been updated or in case there is no dependency array
            included. The useEffect will not be triggered if the dendency array
            is empty (in this case it will only be triggered in the first step).
            The clean-up function if included will run before the setup
            function, removing any API subscriptions to prevent them from
            conflicting with the effects in the setup function. The setup
            function will run afterwards, synchronising effects and adding
            subcriptions.
          </ListItem>
          <ListItem>
            On component unmount if a cleanup function is included, it wil run
            after this lifecycle, removing any API subscriptions.
          </ListItem>
        </ListContainer>
        <Note>
          To stop effects from running in the initial render,
          <TextBold>
            useRef can be used to trigger the effects in the useEffect
            conditionally,
          </TextBold>
          ,set useRef to false initially and update to true in the same
          component.
        </Note>
      </Section>

      <Section>
        <Tabs
          heading={"useEffect Dependency Examples"}
          components={[
            [<CurrencyConverter key={0} />, "currency converter"],

            [
              <div key={2} className="my-4 flex flex-col gap-6">
                <input
                  className="mx-auto block border border-stone-500 px-2"
                  type="text"
                  placeholder="scroll up and press enter"
                  name=""
                  id=""
                  ref={focusEl}
                />
                <CodeHighlight codeString={focuselement} />
              </div>,
              "focus",
            ],
            [<Now key={1} />, "timer"],
          ]}
        />
      </Section>

      <Section>
        <h2>useMemo</h2>
        <Paragraph>
          useMemo hook mimics useEffect functionality however it returns a value
          that is cached. The value returned by callback function is cached, the
          callback is invoked when dependencies update returning a new value.
          useMemo make objects and functions stable across rerenders. it is used
          in cases where an expensive (large) value is returned and dependencies
          remain stable ac ross many rerenders. When dependecies are regularly
          updated useMemo callback will be invoked too often, the cached value
          will hardly be stable.
        </Paragraph>
        <CodeHighlight codeString={usememo} />
      </Section>
      <Section>
        <h2>useCallback</h2>
        <Paragraph>
          useCallback mimics useMemo. It does not return the result of the
          callback function but the callback function reference is cached and
          remains stable of across rerenders.
        </Paragraph>
        <CodeHighlight codeString={usecallback} />
        <ListContainer>
          useMemo and useCallback do use memory space, this is a significant
          difference with useEffect. The there hooks should be used in different
          cases.
          <ListItem>
            useMemo for a function that returns a stable large value.
          </ListItem>
          <ListItem>
            useCallback when a custom function is used a dependency or passed
            into another component as a prop. useMemo can be used to achieve
            function caching however its important to separate the concerns to
            make code more readable.
          </ListItem>
          <ListItem>useEffect for all other cases</ListItem>
        </ListContainer>
        <Note>
          The there hooks should not be used to handle values that can be
          derived directly reactive values. Those should be calculated directly.
        </Note>
      </Section>
      <Section>
        <h2>Separating Effects</h2>
        <Paragraph>
          Merging different effects in one useEffect can result in unexpected
          results. The change in dependecies of one effect will trigger all
          effects in the useffect.
        </Paragraph>
        <Paragraph>
          In this example the useEffect generates the result multiplying of the
          first two inputs and a second result is calculated on button click.
          The useEffect and the button action update the same state vaLue
          "total".
        </Paragraph>
        <CodeHighlight codeString={result} />

        <Paragraph>
          A random backgroud color is applied to the result element. Boolean
          allowColor state value toggles wether the random background color
          should be visible. If true updating total will generate a new random
          background color. The random color is generated by a function
          declaration nested in the component.
        </Paragraph>
        <CodeHighlight codeString={color} />
        <Tabs
          heading={"Merging and Separating effects"}
          components={[
            [
              <div key={1} className="flex flex-col gap-4">
                <Multiply hook={useMultiplyUnstableFunction} />

                <Paragraph>
                  When allowColor is toggled to true the useEffect will sync the
                  effect of calculating the first result with a new random
                  color. However toggling allowColor to true will cause
                  unexpected results, the background state will be updated
                  triggering a rerender, the reference of the function returning
                  the random color will change across the rerender, this will
                  trigger the useEffect again leading to an unending cycle of
                  random color generation.
                </Paragraph>
                <CodeHighlight codeString={usemultiplyunstablefunction} />
                <Paragraph>
                  The second result calculated with three inputs by clicking the
                  button will be nullified by the unstable function which will
                  trigger the useEffect on rerender, the useEffet will
                  immediately calculate a new result with only the first two
                  inputs, causing a flickering of the second result element.
                </Paragraph>
              </div>,
              "nested function dependency",
            ],
            [
              <div key={2} className="flex flex-col gap-4">
                <Multiply hook={useMultiplyUnrelatedEffects} />
                <Paragraph>
                  useCallback will maintain the function referencial equality
                  across rerenders, preventing the cycle of random color
                  generation.
                </Paragraph>
                <CodeHighlight codeString={usemultiplyunrelatedeffects} />
                <Paragraph>
                  The second result will be reset when allowColor is toggled
                  allow color state update which will trigger the useCallback
                  causing a change in the reference of the callback function.
                  The change in reference will trigger the useffect reset total
                  to the first result.
                </Paragraph>
              </div>,
              "merged effects",
            ],
            [
              <div key={3} className="flex flex-col gap-4">
                <Multiply hook={useMultiplySeparatedEffects} />
                <Paragraph>
                  The useEffect can replace the useCallback to save on memory.
                  The effects of calculating the first value and the random
                  background color generator are separated. The second useEffect
                  is not triggered when allowColor is toggled.
                </Paragraph>
                <CodeHighlight codeString={usemultiplyseparatedeffects} />
              </div>,
              "separated effects",
            ],
          ]}
        />
        <Note>
          <TextBold>Custom hooks functions</TextBold>can be declared in separate
          file inorder to make state, effects resuable. A custom hook should
          return a pure function & include atleast 1 react hook. The pure
          function should return values. A custom hook does not include
          dependecies. The custom hook function has to be used at the top level
          like other react hooks.
        </Note>
      </Section>
    </Article>
  );
}

export default SideEffects;
