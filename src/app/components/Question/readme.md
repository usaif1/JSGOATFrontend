# Question Component

The `Question` component is used to display a question with its title, code block, and multiple-choice options. It utilizes the `SyntaxHighlighter` component to highlight any associated code.

## Props

### `question: Object`

- **Type:** `Object`
- **Required:** Yes
- **Description:** The object representing the question and its details.
  
#### Properties of `question`:

- `_id`: 
  - **Type:** `string`
  - **Description:** Unique identifier for the question.

- `order`: 
  - **Type:** `number`
  - **Description:** The order of the question in the list.

- `questionNumber`: 
  - **Type:** `string`
  - **Description:** The number associated with the question.

- `title`: 
  - **Type:** `string`
  - **Description:** The title or text of the question.

- `codeBlock`: 
  - **Type:** `string`
  - **Description:** The code block associated with the question.

- `options`: 
  - **Type:** `string`
  - **Description:** Options for the question in JSON format.

- `answer`: 
  - **Type:** `string`
  - **Description:** The correct answer to the question.

- `explanation`: 
  - **Type:** `string`
  - **Description:** Explanation of the answer.

## Usage

```jsx
import Question from './Question';

const questionData = {
  _id: "1",
  order: 1,
  questionNumber: "Q1",
  title: "What is JavaScript?",
  codeBlock: "```javascript\nconsole.log('Hello, world!');\n```",
  options: JSON.stringify([{ id: "1", value: "A programming language" }, { id: "2", value: "A markup language" }]),
  answer: "1",
  explanation: "JavaScript is a programming language used for web development."
};

export default function App() {
  return <Question question={questionData} />;
}
