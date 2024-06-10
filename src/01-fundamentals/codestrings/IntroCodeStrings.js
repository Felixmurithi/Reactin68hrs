export const componentTree = String.raw`
<App>
    <Page>
      <Header/>
      <Main/>
      <Footer/>
    </Page>
  </App>`;
export const rootelement = `
<div id="root"></div>
createRoot(document.getElementById("root")).render(
    <App /> 
);`;

export const componentI = `
function Component() {
return (
  <div>
  This is the root element
  </div>
);
}`;

export const componentII = `
import { Fragment } from "react";

function Component() {
  return (
    <Fragment>
    <div>This is a Fragment</div>
    <p>Imported from react</p>,
    </Fragment>
  );
  }`;

export const componentIII = `
function Component() {

  return (
    <>
    <div>a different Fragment</div>
    <p>This fragment is not imported</p>,
    </>
  );

  }`;

export const componentIV = `
function Component() {
import { Fragment } from "react";

return (
  [
  <p key={1}>Item 1</p>,
  <p key={2}>Item 2</p>,
  <Fragment key={3}> </Fragment>,
  ]
);
}`;

export const conditionalRendering = `
function Component() {
  return (
    <p>
      Parent and  {true && <Child/>}
    </p>
  )
}
function ChildComponent() {
  return (
    <span>
     child
    </span>
  )
}`;
