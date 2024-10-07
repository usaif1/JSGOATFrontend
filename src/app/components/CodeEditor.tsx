"use client";

import MonacoEditor from "@monaco-editor/react";

type Props = {
  codeblock: string;
};

// Code received from API
const codeFromApi = `\`\`\`javascript
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);
\`\`\``;

const CodeEditorComponent: React.FC<Props> = ({ codeblock }) => {
  // Remove the triple backticks
  const formattedCode = codeblock.replace(/```(javascript)?/g, "").trim();

  return (
    <div>
      <MonacoEditor
        height="150px"
        language="javascript"
        theme="vs-dark"
        value={formattedCode}
        options={{
          
          readOnly: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditorComponent;
