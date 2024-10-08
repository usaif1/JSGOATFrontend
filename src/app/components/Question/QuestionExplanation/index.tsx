/**
 * QuestionExplanation component displays an explanation for a given question.
 * It allows users to view the correct answer and its explanation by clicking a button.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered QuestionExplanation component.
 */

"use client";

// dependencies
import React, { useState } from "react";
import { IoCaretForward } from "react-icons/io5";

// components
import Text from "../../Text";
import Divider from "../../Divider";

// types
import { Question } from "../types";

type Props = {
  /** The object representing the question, which includes the correct answer and explanation. */
  question: Question;
  /** An array of question IDs that are disabled for further interaction after selection. */
  disabledQuestions: string[];
  /** A function to set the currently selected answer for the question when the explanation is revealed. */
  setSelectedAnswer: (ans: string) => void;
  /** A boolean that determines whether the explanation is currently visible or hidden. */
  show: boolean;
  /** A function to toggle the visibility of the explanation when the button is clicked. */
  setShow: (val: boolean) => void;
};

const QuestionExplanation: React.FC<Props> = ({
  question,
  disabledQuestions,
  setSelectedAnswer,
  show,
  setShow,
}) => {
  const onClickHandler = () => {
    setShow(!show);
    setSelectedAnswer(question?.answer);

    if (!disabledQuestions.includes(question?._id)) {
      disabledQuestions.push(question?._id);
    }
  };

  return (
    <div>
      <button
        className="text-color-accent-primary text-sm font-semibold flex gap-x-2 items-center"
        onClick={onClickHandler}
      >
        <IoCaretForward className={`${show ? "rotate-90" : "rotate-0"}`} />
        Explanation
      </button>
      <div className={`${!show ? "h-0" : "h-auto mt-4"} overflow-hidden`}>
        <div className="bg-color-highlight-tertiary w-fit py-1 px-2 rounded-md shadow-md">
          <Text size="sm" weight="bold">
            Answer - {question?.answer}
          </Text>
        </div>
        <Divider />
        <Text size="sm">{question?.explanation}</Text>
      </div>
    </div>
  );
};

export default QuestionExplanation;
