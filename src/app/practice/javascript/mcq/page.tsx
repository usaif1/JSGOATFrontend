// dependencies
import React from "react";

// components
import { Text } from "@/app/components";
// import CodeEditorComponent from "@/app/components/CodeEditor";

const JSMCQ = async () => {
  // const response = await fetch(
  //   "https://jsgoatbackend.vercel.app/api/questions"
  // );
  // const formatted = await response.json();

  // console.log("formatted", formatted);

  return (
    <div>
      <Text>JSMCQ</Text>
      {/* <CodeEditorComponent /> */}
      {/* {formatted.slice(0, 5).map((el) => {
        return (
          <Text key={el?._id}>
            <CodeEditorComponent codeblock={el?.codeBlock} />
          </Text>
        );
      })} */}
    </div>
  );
};

export default JSMCQ;
