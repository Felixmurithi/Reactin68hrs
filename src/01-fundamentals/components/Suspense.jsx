import { Paragraph } from "../../UI/Page";


export const suspense = [
  <Paragraph key="suspense">
    Suspense is a react component that is enabled in next JS (suspense is not
    activated normally). It allows for dispalying a fallback compoenent as a
    parent suspends renderfing in the processing of instancinting a new
    component. As the old instance is destroyed, suspense will dipslay the
    fallback component will be displayed. Suspense waits for all chislren and
    lower level children to finishing loading before suspending the fallback
    component and revealing teh children. Its isb regulary used with routes
    where different pages are loaded on changing routes. A suspense boundary is
    marked by each Suspense. A component Suspense can nest other Suspense.
  </>,
  <Paragraph key={"transition"}>
    {" "}
    Transition show the new component when one of its child compoenent is fully
    loaded and doesnt wait for the contenet that is still being fetched, start
    Transition receives the setter function amd
  </Paragraph>,

  <Paragraph key={"deferredvalue"}>
    The useDeferredValue is used together with Suspense. It stops the fallback
    component from showing teh fallback componenet. The hook receives onestate
    value and returns same value. The deffred value is used instead of state in
    the UI. When the state value is updated, the deffered value will not be
    updated in that render cycle, but in a second cycle(similar to useEffect).
    The second cycle is done in the background, if the state value is changed
    before the cycle ends the deffered value will not be updated, t will
    maintain its originally value. When the deffered value references state that
    controls text input(via keystroke) quickly typing will keep the original
    value of the deffered value. The second will keep being stopped on each
    state change, ending the keystrokes will allow for enough for the second
    updated to eb complete. A comparison of the state value and the deffered
    value is used to conditionally use different styling. The deffered can be
    used in situatiosn where a memoized child compoonent is stablised until the
    keystrokes are stopped.
  </Paragraph>,
];
