import CodeHighlight from "../../UI/CodeHighlight";
import { ListContainer, ListItem } from "../../UI/List";
import Note from "../../UI/Note";
import { Article, Paragraph, Section } from "../../UI/Page";
import Tabs from "../../UI/Tabs";
import {
  color,
  childrenRerendering,
  memoComponent,
  timer,
  childrenRerenderingContext,
  childrenConsumerRerenderingContext,
  memoizedObjectValue,
  notMemoizedObjectValue,
} from "../codestrings/optmizationCodeStrings";
import { TimeProvider } from "./TimeContext";
import { TimeProviderI } from "./TimeContextI";
import { TimeProviderII } from "./TimeContextII";
import { TimeProviderIII } from "./TimeContextIII";
import {
  Color,
  ColorI,
  ColorII,
  ColorIII,
  TimeI,
} from "./TimerContextComponents";
import TimerMemo from "./TimerMemo";
import TimerStateChange from "./TimerStateChange";

function Optimization() {
  return (
    <Article>
      <Section>
        <h1>Optimizing Renders</h1>
        <ListContainer>
          React component rerenders occurs when:
          <ListItem>State changes</ListItem>
          <ListItem>Parent Renders</ListItem>
          <ListItem>Context changes</ListItem>
        </ListContainer>
        <Tabs
          components={[
            [
              <div key={1} className="flex flex-col gap-4">
                <TimerStateChange />
                <Paragraph>
                  State updates will always rerender the parent component. State
                  can be substituted with useRef if the rendering is not
                  required
                </Paragraph>
                <Paragraph>
                  A background color child component will always be rendered
                  when the timer state updates the parent component causing a
                  rerender.
                </Paragraph>
                <CodeHighlight codeString={timer} />
                <CodeHighlight codeString={color} />
              </div>,
              "state rerenders",
            ],
            [
              <div key={2} className="flex flex-col gap-4">
                <TimerMemo>
                  <Color />
                </TimerMemo>
                <Paragraph>
                  Components instantiated using props do not rerender on parent
                  rerenders. Prop changes do not cause component renders, state
                  values passed as props does not rtrigger rerendering in the
                  child components, updating the state in a child component will
                  trigger a parent rerender which will cause a child rerender.
                </Paragraph>
                <CodeHighlight codeString={childrenRerendering} />
                <Paragraph>
                  React.memo prevents child components from rerendering on
                  parent rerender. Components passed to React.memo will however
                  rerender when their props change.
                </Paragraph>
                <CodeHighlight codeString={memoComponent} />

                <Paragraph>
                  Object and function props used in componets passed to
                  React.memo must be memoized or declared outside the component
                  to preserve referencial equality.
                </Paragraph>
              </div>,
              "Memoization",
            ],

            [
              <div key={3} className="flex flex-col gap-4">
                <Paragraph>
                  Context consumer components need to be rendered using the
                  children prop. Directly nesting them will causes them to
                  rerender on provider rerenders.
                </Paragraph>
                <TimeProvider>
                  <Color />
                </TimeProvider>
                <CodeHighlight codeString={childrenRerenderingContext} />
                <Paragraph>
                  Any Changes in the context value will cause all consumer
                  components to rerender. Different context providers for
                  different parts of the UI roles minimise this effect.
                </Paragraph>
                <TimeProviderI>
                  <TimeI />
                  <ColorI />
                </TimeProviderI>
                <CodeHighlight
                  codeString={childrenConsumerRerenderingContext}
                />
                <Paragraph>
                  Context provider rerender will change the context value object
                  reference. The context value object is memoized to maintain
                  referencial integrity.
                </Paragraph>
                <div className="my-4 flex  justify-center gap-10">
                  <TimeProviderII>
                    <ColorII />
                  </TimeProviderII>
                  <TimeProviderIII>
                    <ColorIII />
                  </TimeProviderIII>
                </div>
                <div className="flex gap-4">
                  <CodeHighlight codeString={notMemoizedObjectValue} />
                  <CodeHighlight codeString={memoizedObjectValue} />
                </div>
              </div>,
              "Context change",
            ],
          ]}
        />
        <Note>
          Open the Profiler panel in the browser dev tools from react dev tools
          to rerendering. Start recording, commit some actions, stop recording
          and analyze the rerendering caused by state, parents, context change
          and analyze the effect of optimizing their anti-patterns. In the
          settings of the profiler toggle the option to react what caused a
          component rerender.
        </Note>
      </Section>
    </Article>
  );
}

export default Optimization;
