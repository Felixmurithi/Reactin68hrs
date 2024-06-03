import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col justify-between gap-[3px]">
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
      <AccordionTab open={open} setOpen={setOpen} num={2} title="JSX">
        <ParagraphComponent>
          <span>👉🏿</span> Synatx to write html and javascript together
        </ParagraphComponent>
      </AccordionTab>
      <AccordionTab open={open} setOpen={setOpen} num={3} title="React State">
        <ParagraphComponent>
          <span>👉🏿</span>Persisted when a component is rerendered
        </ParagraphComponent>
      </AccordionTab>
    </div>
  );
}

function AccordionTab({ num, open, setOpen, title, children }) {
  const opened = num === open;
  return (
    <div
      className={`border ${opened ? "bg-white" : "bg-stone-100"} rounded-sm py-2 pl-4`}
      onClick={() => {
        opened ? setOpen(null) : setOpen(num);
      }}
    >
      <p>
        <span>
          {opened ? "-" : "+"}
          <span className="pl-5 text-emerald-600">{title}</span>
        </span>
      </p>
      {opened && children}
    </div>
  );
}

function ParagraphComponent({ children }) {
  return <p className="bg-white p-2 text-lg">{children}</p>;
}
