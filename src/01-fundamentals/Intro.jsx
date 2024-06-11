import {
  componentTree,
  rootelement,
  componentI,
  componentII,
  componentIII,
  componentIV,
  conditionalRendering,
} from "./codestrings/IntroCodeStrings";

import CodeHighlight from "../UI/CodeHighlight";
import { Article, Main, Paragraph, Section } from "../UI/Page";
import Note from "../UI/Note";
import State from "./components/State";
import { H2, TextBold } from "../UI/Text";
import SideEffects from "./components/SideEffects";
import Optimization from "./components/Optimization";

// values will be undefined outside of their components

function Intro() {
  return (
    <Main>
      <Article>
        <Section>
          <h1>React Fundamentals</h1>
          <Paragraph>
            React is a javascript frontend library. React improves the web
            development experience by merging html and javascript files,
            implementing reactive UI components and enabling declarative
            handling of DOM events. The UI layout is assembled by combining
            reusable components, a header component, a main section component
            and a footer component. Each component is a function that returns
            html. Stacking components creates the
            <TextBold>React component tree.</TextBold>
          </Paragraph>
          <CodeHighlight codeString={componentTree} copy={false} />

          <Paragraph>
            The react component tree is attached to an html element with the
            root id.
          </Paragraph>
          <CodeHighlight codeString={rootelement} />
          <Paragraph>
            From the root compoenent, other components can be added to the
            view(rendered/mounted) and removed from the view (unmounted). A page
            is mounted on visiting its URL, on changing page url the current
            page is unmounted and a new page mounted. The pages's child
            components are mounted in the page component. A component is mounted
            when the component function is invoked, creating a
            <TextBold>component instance.</TextBold>
          </Paragraph>
        </Section>
        <Section>
          <h2>Component</h2>
          <Paragraph>
            A component is a special
            <TextBold>pure javascript function</TextBold>
            which must start with a capital letter to differentiate from html
            tags. A component can return
            <TextBold>
              one root element, a root fragment, a primitive value(false,
              string, numbers) or an array that includes html elements,
              components or primitive values.
            </TextBold>
          </Paragraph>
          <CodeHighlight codeString={componentI} copy={true}></CodeHighlight>
          <Paragraph>
            A root fragment does not affect the styling of elements. There are
            two ways to declare a root fragment, an empty tag fragment and named
            Fragment.
          </Paragraph>
          <div className="flex gap-3">
            <CodeHighlight codeString={componentIII} />
            <CodeHighlight codeString={componentII} />
          </div>

          <Paragraph>
            Elements and components declared arrays must include a key
            property/attribute which indentifies them uniquely. A named Fragment
            is used in arrays, the empty fragment does not accept a key.
          </Paragraph>
          <CodeHighlight codeString={componentIV} />
          <Note>
            each component should be declared in a separate file for reusability
            and separation of concerns. Open the Components panel in the browser
            dev tools to visualize the componenent tree.
          </Note>
          <H2>JSX</H2>
          <Paragraph>
            Javascript and html code is combined in React components using the
            JSX syntax. Javascript in html is wrapped in
            <TextBold>{"{ }"}</TextBold>.Only Primitive values and arrays with
            primitive elements are returned in the html. The javascript added in
            JSX can not include decision statements or return objects and
            functions.The
            <TextBold>&& operator</TextBold>
            and
            <TextBold>ternary operator</TextBold>conditionally include elements
            and components.
          </Paragraph>
          <CodeHighlight codeString={conditionalRendering} />
        </Section>
      </Article>
      <State />
      <SideEffects />
      <Optimization />
    </Main>
  );
}

export default Intro;
