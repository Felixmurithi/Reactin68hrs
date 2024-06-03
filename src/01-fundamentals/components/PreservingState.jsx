import { Paragraph, Section } from "../../UI/Page";
import { H2, TextBold } from "../../UI/Text";
import CodeHighlight from "../../UI/CodeHighlight";

import PreservingStateTabs from "./PreservingStateTabs";
import {
  andOperandSameComponent,
  andOperandSameComponentResultI,
  andOperandSameComponentResultII,
  nestedComponent,
  ternarySameComponent,
} from "../codestrings/preservingStateCodestrings";
import { ExampleDiv } from "../../UI/Example";
import PreservingStateTabsII from "./PreservingStateTabsII";
import PreservingStateNestedComponent from "./PreservingStateNestedComponent";

function PreservingState() {
  return (
    <Section>
      <H2>State preservation in the component tree</H2>
      <Paragraph>
        When conditionally rendering the same component, React uses the position
        of a component in the component tree to determine if a component state
        has to be reset or preserved.
      </Paragraph>
      <CodeHighlight codeString={ternarySameComponent} />
      <PreservingStateTabs />

      <Paragraph>
        Conditional rendering the same component using the ternary operator will
        return the same component in same position in either condition. The
        state values of that particular component will be preserved.
      </Paragraph>
      <CodeHighlight codeString={ternarySameComponent} />

      <Paragraph>
        The position of the returned component changes when the
        <TextBold>&& operator</TextBold>is used to render the same component
        conditonally.
      </Paragraph>
      <CodeHighlight codeString={andOperandSameComponent} />
      <Paragraph>
        The operation will return a false value in either case which will occupy
        a position in the component tree. The state of the component will be
        reset with the change in position.
      </Paragraph>
      <div className="flex justify-between">
        <CodeHighlight codeString={andOperandSameComponentResultI} />
        <CodeHighlight codeString={andOperandSameComponentResultII} />
      </div>
      <PreservingStateTabsII />
      <Paragraph>
        A component's function referencial equally is required to preserve
        state. A component's declared outside the parent will maintain
        referencial intergrity across parent rerenders and preserve state. Child
        components nested in the parent component will have their references
        change across the parent rerenders, their state will be reset; React wil
        re-instantiate the component function.
      </Paragraph>
      <CodeHighlight codeString={nestedComponent} />
      <PreservingStateNestedComponent />
    </Section>
  );
}

export default PreservingState;
