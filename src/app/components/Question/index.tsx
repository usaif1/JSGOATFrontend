/**
 * Question component that displays a question along with its options and a syntax-highlighted code block.
 * @param {Props} props - The props object that includes question details.
 * @returns {JSX.Element} - The JSX to render the question and its details.
 */

"use client";

// dependencies
import React, { useState } from "react";
import SyntaxHighlighter from "../SyntaxHighlighter";

// components
import Divider from "../Divider";
import QuestionTitle from "./QuestionTitle";

// types
import { Answer, Question as QuestionType } from "./types";
import QuestionOption from "./QuestionOption";
import QuestionExplanation from "./QuestionExplanation";

// Define the type for the component props
type Props = {
  question: QuestionType;
  disabledQuestions: string[];
};

const Question: React.FC<Props> = ({ question, disabledQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const formattedCode = question?.codeBlock
    .replace(/```(javascript)?/g, "")
    .trim();

  return (
    <div className="w-full p-4 pl-0 pb-2 border-b border-b-color-border-primary-light">
      <QuestionTitle question={question} />
      <Divider />
      <SyntaxHighlighter>{formattedCode}</SyntaxHighlighter>
      <Divider />
      <div className="flex flex-col gap-y-3">
        {JSON.parse(question?.options).map((answer: Answer) => {
          return (
            <QuestionOption
              setShow={setShow}
              disabledQuestions={disabledQuestions}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              question={question}
              key={`${answer.id}${answer.value.substring(0, 5)}`}
              answer={answer}
            />
          );
        })}
      </div>
      <Divider />
      <QuestionExplanation
        show={show}
        setShow={setShow}
        question={question}
        disabledQuestions={disabledQuestions}
        setSelectedAnswer={setSelectedAnswer}
      />
    </div>
  );
};

export default Question;
