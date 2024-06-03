import { Paragraph, Section } from "../../UI/Page";
import Tabs from "../../UI/Tabs";
import { H2 } from "../../UI/Text";
import BankContext from "./BankContext";
import BankReducer from "./BankReducer";
import { BankProvider } from "../../context/BankContext";
import CodeHighlight from "../../UI/CodeHighlight";
import {
  context,
  dispatchInstructions,
  initialStateReducer,
  reducerActions,
  usecontext,
  usereducer,
} from "../codestrings/statemanagementCodeStrings";

function StateManagement() {
  return (
    <Section>
      <H2>State Management</H2>
      <Paragraph>
        React projects can require a multitude of state values which make it
        code unreadable.React provides more declarative ways of updating mutiple
        state values.
      </Paragraph>

      <Tabs
        heading={"React State Managers"}
        components={[
          [
            <div key={0} className="flex flex-col gap-5">
              <BankReducer />
              <Paragraph>
                The React useReducer hook combines all react state values into
                one object and all state handler functions into one function
                "reducer". The initial state values and the reducer function are
                declared outside the componenet to maintain the referencial
                equality across parent component rerenders.
              </Paragraph>
              <CodeHighlight codeString={initialStateReducer} />
              <Paragraph>
                useReducer accepts the reducer function and the initial state
                object. It returns an array with two values, an object with all
                the current values of state and a function "dispatch" to handle
                state updates.
              </Paragraph>
              <CodeHighlight codeString={usereducer} />
              <Paragraph>
                State update instructions are passed in an object to the
                dispatch function. The update instructons can include the
                type/what update to perform and payload of values to use in the
                update.
              </Paragraph>
              <CodeHighlight codeString={dispatchInstructions} />
              <Paragraph>
                The reducer function programatically receives two values from
                the useReducer hook, current value of state and the state update
                instructions "action" passed into the dispatch function. A
                switch statement is used to update state, action.type executes
                state updates at the the matching case.
              </Paragraph>

              <CodeHighlight codeString={reducerActions} />
              <Paragraph>Each case must return the state object.</Paragraph>
            </div>,
            "usereducer",
          ],
          [
            <div key={1} className="flex flex-col gap-5">
              <BankProvider k>
                <BankContext />
              </BankProvider>
              <Paragraph>
                The React Context API provides a delcrative way passing and
                using state. Instead of passing and receiving props in the
                component tree, a context is declared in one file and provided
                to all child components.
              </Paragraph>
              <Paragraph>
                The context is returned from the useContext React hook. A
                provider component is created; the state is declared in this
                component. The context provider compound component wraps all the
                child component and recieves the state and setter functions
                values. A function that returns the context is created. The
                provider component and the function that returns the context are
                exported.
              </Paragraph>
              <CodeHighlight codeString={context} />
              <Paragraph>
                The context consumer components are nested in the exported
                container provider. The context values are returned and used in
                the consumer components.
              </Paragraph>
              <CodeHighlight codeString={usecontext} />
            </div>,
            "context API",
          ],
        ]}
      />
    </Section>
  );
}

export default StateManagement;
