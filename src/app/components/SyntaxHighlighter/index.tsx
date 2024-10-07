/**
 * SyntaxHighlighter component that renders a code block with syntax highlighting and a "Run" button.
 * Uses the react-syntax-highlighter for code highlighting and react-icons for the button icon.
 * @param {Props} props - The props object that includes the code block string.
 * @returns {JSX.Element} - The JSX to render the syntax-highlighted code block.
 */

// depdencies
import React from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCaretForward } from "react-icons/io5";

// Define the type for the component props
type Props = {
  children: string; // The code block as a string
};

const SyntaxHighlighter: React.FC<Props> = ({ children }) => {
  return (
    <ReactSyntaxHighlighter
      CodeTag={({ children: codeChildren }) => (
        <div
          className="relative"
          style={{
            backgroundColor: a11yDark.hljs.background as string,
            color: a11yDark.hljs.color,
            padding: "1rem",
            borderRadius: "8px",
            fontFamily: "monospace",
            maxWidth: "450px",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }}
        >
          {codeChildren}
          <button className="absolute top-0 right-0 flex items-center text-neutral-50 text-xs gap-x-1 py-0.5 px-1.5 bg-gray-900 shadow-lg rounded-md">
            <IoCaretForward />
            Run
          </button>
        </div>
      )}
      language="javascript"
      style={a11yDark}
      customStyle={{
        borderRadius: "8px",
        maxWidth: "450px",
        position: "relative",
      }}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
