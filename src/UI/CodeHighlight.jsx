import { memo } from "react";
import { HiClipboard } from "react-icons/hi2";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeHighlight = ({ codeString, copy = true }) => {
  //   console.log(dracula.tag);
  return (
    <div className="relative overflow-hidden ">
      {copy && (
        <button
          className="absolute right-0"
          onClick={() => navigator.clipboard.writeText(`${codeString}`)}
        >
          <HiClipboard className="text-2xl text-teal-600" />
        </button>
      )}
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default memo(CodeHighlight);
