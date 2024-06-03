function Component() {
  return (
    <>
      <div>hello world {`this is javascript${6}`}</div>;
      <ChildComponent />
    </>
  );
}
function ChildComponent() {
  return (
    <p>
      <span>This is how u include a component</span>
      {()=> "a function"}
      {{}}
      {if statement }
    </p>
  );
}



