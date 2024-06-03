export const ternarySameComponent = `
   <Component>
   {"condition" ? <ChildComponent props /> : <ChildComponent differrentprops /> }
   </Component>   `;
export const andOperandSameComponent = `
   <Component>
   {"condition"  && <ChildComponent props /> }
   {"condition"  && <ChildComponent differrentprops /> }
   </Component>   `;
export const andOperandSameComponentResultI = `
   <Component>
   {<ChildComponent props /> }
   {false }
   </Component>   `;
export const andOperandSameComponentResultII = `
   <Component>
   {false}
   { <ChildComponent differrentprops/> }
   </Component>   `;
export const nestedComponent = `
function Component() {
const [input, setinput] = useState("");
    return (
        <div >
        <Likes />
        <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
        />
        </div>
    );

function Likes() {
        ...
}
}`;
