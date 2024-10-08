/**
 * QuestionOption Component
 *
 * This component renders an individual option for a multiple-choice question.
 * It allows selecting the option, disables it after selection, and shows a success
 * or error icon based on the correctness of the selected answer.
 *
 * @param {Question} question - The question object.
 * @param {Answer} answer - The answer option object for the current option.
 * @param {string} selectedAnswer - The ID of the currently selected answer.
 * @param {function} setSelectedAnswer - A function to update the selected answer.
 * @param {string[]} disabledQuestions - Array of question IDs that are disabled for further interaction.
 * @param {function} setShow - A function to trigger visibility of explanation or feedback.
 * @returns {JSX.Element} A JSX element that displays a question option and handles selection.
 */

// dependencies
import React from "react";
import { IoClose, IoCheckmarkSharp } from "react-icons/io5";

// components
import Text from "../../Text";

// types
import { Answer, Question } from "../types";

type Props = {
  question: Question;
  answer: Answer;
  selectedAnswer: string;
  setSelectedAnswer: (ans: string) => void;
  disabledQuestions: string[];
  setShow: (val: boolean) => void;
};

const QuestionOption: React.FC<Props> = ({
  question,
  answer,
  selectedAnswer,
  setSelectedAnswer,
  disabledQuestions,
  setShow,
}) => {
  // Removing dashes from answer ID for formatting purposes
  const formattedAnswer = answer?.id.replace("-", "");

  // Checking if the current option is selected
  const checked = selectedAnswer === formattedAnswer;

  // Checking if the option should be disabled after selection
  const disabled = !checked && disabledQuestions.includes(question?._id);

  // Handles selection of an answer
  const onChangeHandler = () => {
    setSelectedAnswer(formattedAnswer); // Set selected answer

    if (!disabledQuestions.includes(question?._id)) {
      disabledQuestions.push(question?._id); // Disable further interaction with the question
    }

    setShow(true); // Show the explanation or feedback
  };

  return (
    <div id="question_option" className="flex items-center gap-x-2 h-6">
      <div className="flex items-center gap-x-2">
        <input
          disabled={disabled}
          onChange={onChangeHandler}
          checked={checked}
          id="question_option_radio"
          type="radio"
        />
        <Text size="sm">
          {formattedAnswer}:{" "}
          <span className="bg-color-highlight-tertiary px-1.5 py-1 rounded-md">
            {answer?.value.replace(/`/g, "")}
          </span>
        </Text>
      </div>
      {checked && selectedAnswer === question?.answer ? (
        <IoCheckmarkSharp className="text-color-status-success" size={24} />
      ) : null}

      {checked && selectedAnswer !== question?.answer ? (
        <IoClose className="text-color-status-error" size={24} />
      ) : null}
    </div>
  );
};

export default QuestionOption;
