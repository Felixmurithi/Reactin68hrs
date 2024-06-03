function Theory() {
  return (
    <div>
      <div className="mb-2">
        <h2>React BTS</h2>
        <ul className="list-inside list-disc">
          <h3>Render Phase</h3>
          <p>
            The react component is converted into the the React element tree
            created by the conversion of JSX into JS expressions and then
            figuring out what component has been updated which is the render
            phase and then updating these changes on the DOM in the commit phase
            after which the browser repaints teh UI to reflects the changes.
          </p>
          When the render phase is triggered the react elemnt tree is recreated
          and component that has been updated is noted in the react element
          tree. The children of that element tree are also rerendered To updated
          changes renconcling and diffing is done using the fiber tree which
          keep a record of the positions component instances, returned elements
          and all that is going on in a component. Diffing checks for state
          prserveatation through refrencial integrity and component position in
          the component tree .The reconcling and diffing by the fiber tree
          creates a list of updates to be perfomed in the DOM. Its important to
          note that the fiber tree is not recreated in the render phase. The
          fiber tree is updated to include the list of updates.
        </ul>

        <ul className="list-inside list-disc">
          <h2>Commit Phase</h2>
          The commit phase is done synchronously to ensure the UI is fully
          updated and it can be done by a number of technologies such as react
          DOM or React Native. The list of updates are effected on the DOM. the
          browser updates/paints the UI to reflect those changes
        </ul>
      </div>
    </div>
  );
}

export default Theory;
