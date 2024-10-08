export type Question = {
  _id: string; // Unique identifier for the question
  order: number; // The order of the question in the list
  questionNumber: string; // The number associated with the question
  title: string; // The title or text of the question
  codeBlock: string; // The code block associated with the question
  options: string; // Options for the question in JSON format
  answer: string; // The correct answer to the question
  explanation: string; // Explanation of the answer
};

export type Answer = {
  id: string;
  value: string;
};
