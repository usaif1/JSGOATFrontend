"use client";

// dependencies
import React, { useEffect } from "react";

// components
import { Question } from "@/app/components";
// import CodeEditorComponent from "@/app/components/CodeEditor";

// data
import { question } from "./data";

const disabledQuestions: string[] = [];

const JSMCQ: React.FC = () => {
  // const response = await fetch(
  //   "https://jsgoatbackend.vercel.app/api/questions"
  // );
  // const formatted = await response.json();

  // console.log("formatted", formatted);

  useEffect(() => {
    return () => {
      disabledQuestions.length = 0;
    };
  }, []);

  return (
    <Question question={question} disabledQuestions={disabledQuestions} />
    // <div>

    //   <Text>JSMCQ</Text>
    //   {/* <CodeEditorComponent /> */}
    //   {/* {formatted.slice(0, 5).map((el) => {
    //     return (
    //       <Text key={el?._id}>
    //         <CodeEditorComponent codeblock={el?.codeBlock} />
    //       </Text>
    //     );
    //   })} */}
    // </div>
  );
};

export default JSMCQ;
