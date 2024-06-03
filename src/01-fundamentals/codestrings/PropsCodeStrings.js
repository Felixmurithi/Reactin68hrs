export const props = `
function Accordion() {
    const [open, setOpen] = useState(null);
  
    return (
      <div>
        <AccordionTab
          open={open}
          setOpen={setOpen}
          num={1}
          title="Component tree"
          text="The root component is always mounted"
          />
      </div>`;

export const propsReceived = `
function AccordionTab=(props) {
    return( <div> ... </div>)
}`;

export const propsDestructured = `
function AccordionTab({ num, open, setOpen, text }) {
  const opened = num === open;

  return (
   <div
      onClick={() => {
        opened ? setOpen(null) : setOpen(num);
      }} > 
    
      <p>
        <span>
          {opened ? "-" : "+"}
          <span>{title}</span>
        </span>
      </p>

      {opened && <p>{text}</p>}

   </div>) }`;
export const propsDrilling = `
function AccordionTab({ num, open, setOpen, text }) {
    ...

      {opened && <ParagraphComponent text={text} />} {/* prop drilling */}
      </div>
    );
  }
  
  function ParagraphComponent({ text }) {
    return <p>{text}</p>;
  }
}`;

export const childrenProp = `
function AccordionTab({ num, open, setOpen, text }) {
     ...
  
  {opened && (
        <ParagraphComponent>
          <span>👉🏿</span> {text}
        </ParagraphComponent>
      )}
    </div>
  );
}

function ParagraphComponent({ children }) {
  return <p>{children}</p>;
}`;
export const componentComposition = `
<AccordionTab
        open={open}
        setOpen={setOpen}
        num={1}
        title="Component tree"
      >
        <ParagraphComponent>
          <span>👉🏿</span> The root component is always mounted
        </ParagraphComponent>

      </AccordionTab>


function AccordionTab({ num, open, setOpen, title, children }) {
      ...
      {opened && children}
      </div>
    );
  }
  
  function ParagraphComponent({ children }) {
    return <p>{children}</p>;
  }
`;
