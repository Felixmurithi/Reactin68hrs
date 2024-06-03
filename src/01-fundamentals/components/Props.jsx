import CodeHighlight from "../../UI/CodeHighlight";
import { Paragraph, Section } from "../../UI/Page";
import { H2, TextBold } from "../../UI/Text";
import {
  childrenProp,
  componentComposition,
  props,
  propsDestructured,
  propsDrilling,
  propsReceived,
} from "../codestrings/PropsCodeStrings";
import Accordion from "./Accordion";
import Note from "../../UI/Note";

// prop drilling
// state, parent to child passing of props, one way data flow component composition, immutability of props and state

function Props() {
  return (
    <Section>
      <H2>Props</H2>
      <Paragraph>
        React component need to control child component behaviour; Accordion
        component needs to control which accordion tab is opened.
      </Paragraph>
      <Accordion />
      <Paragraph>
        React components can pass data including state to children components
        using
        <TextBold>props.</TextBold>
        Props resemble html attributes, they are declared and assigned
        javascript values wrapped in {}. The props are included where the child
        component is instantiated. Props are passed from parents to child, child
        components cannot pass props up to parents. Props are not mutated
        directly, they should only be updated using setter functions passed down
        by the parent component.
      </Paragraph>
      <CodeHighlight codeString={props} />
      <Paragraph>All props are received in a single parameter.</Paragraph>
      <CodeHighlight codeString={propsReceived} />
      <Paragraph>
        The props are destructured and used in the child componenet
      </Paragraph>
      <CodeHighlight codeString={propsDestructured} />
      <Paragraph>
        Prop names cannot be "key" or "children". These are custom props in
        React. The key prop is used in rendering elements and components from
        arrays. The children prop is used in
        <TextBold>component composition.</TextBold>
      </Paragraph>
      <Paragraph>
        Component composition is passing props directly from a parent element to
        a grand-child component and lower levels in the component tree.
        Component composition is an improvement on
        <TextBold>prop drilling</TextBold>where props are passed through each
        level of the componenent tree.
      </Paragraph>
      <CodeHighlight codeString={propsDrilling} />
      <Paragraph>
        Component composition is implemented by nesting elements and components
        in a component and using the children prop to render the nested JSX.
      </Paragraph>
      <CodeHighlight codeString={childrenProp} />
      <Paragraph>
        Values can be directly included in the nested grand-child and lower
        level components.
      </Paragraph>
      <CodeHighlight codeString={componentComposition} />
      <Note>
        state and props cannot be directly mutated but they can be used to
        directly calculate new values. State is lifted up and declared to the
        parent components when mutiple child component need to share the same
        state.
      </Note>
    </Section>
  );
}

export default Props;

// useState can only be called in a react component, and not inside other functions
