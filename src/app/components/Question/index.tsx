/**
 * Question component that displays a question along with its options and a syntax-highlighted code block.
 * @param {Props} props - The props object that includes question details.
 * @returns {JSX.Element} - The JSX to render the question and its details.
 */

"use client";

import React from "react";
import SyntaxHighlighter from "../SyntaxHighlighter";
import Divider from "../Divider";

// Define the type for the component props
type Props = {
  question: {
    _id: string; // Unique identifier for the question
    order: number; // The order of the question in the list
    questionNumber: string; // The number associated with the question
    title: string; // The title or text of the question
    codeBlock: string; // The code block associated with the question
    options: string; // Options for the question in JSON format
    answer: string; // The correct answer to the question
    explanation: string; // Explanation of the answer
  };
};

const Question: React.FC<Props> = ({ question }) => {
  const formattedCode = question?.codeBlock
    .replace(/```(javascript)?/g, "")
    .trim();

  return (
    <div className="w-full p-4 pl-0 border-b border-b-color-border-primary-light">
      <p className="text-neutral-800 dark:text-neutral-300 font-medium">
        <span className="text-sm">{question.order}. </span>
        {question.title}
      </p>
      <Divider />
      <SyntaxHighlighter>{formattedCode}</SyntaxHighlighter>
      <Divider />
      <div className="">
        {JSON.parse(question?.options).map((answer) => {
          return (
            <div key={answer?.id} className="text-white flex items-center">
              <input type="radio" />
              {answer?.id.replace("-", "")} {answer?.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
