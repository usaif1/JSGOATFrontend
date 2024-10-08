/**
 * Renders the title of a question with its order number.
 *
 * @param {Props} props - Props containing the question object.
 * @returns {JSX.Element} The JSX to render the question title.
 */

// dependencies
import React from "react";

// types
import { Question } from "../types";

/**
 * Props for the QuestionTitle component
 * @typedef {Object} Props
 * @property {Question} question - The question object with an order and title.
 */
type Props = {
  question: Question;
};

const QuestionTitle: React.FC<Props> = ({ question }) => {
  return (
    <p
      id="question_title"
      className="text-neutral-800 dark:text-neutral-300 font-medium"
    >
      <span id="question_order" className="text-sm">
        {question.order}.{" "}
      </span>
      {question?.title}
    </p>
  );
};

export default QuestionTitle;
