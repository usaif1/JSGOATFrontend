QuestionOption Component
The QuestionOption component renders an individual option for a multiple-choice question. It allows users to select an answer, disables further interaction after selection, and displays a success or error icon based on whether the selected answer is correct.

Props
question: Object
Type: Object
Required: Yes
Description: The object representing the question and its details.

answer: Object
Type: Object
Required: Yes
Description: The object representing the answer option for the question.

selectedAnswer: string
Type: string
Required: Yes
Description: The ID of the currently selected answer.

setSelectedAnswer: Function
Type: Function
Required: Yes
Description: A function to update the currently selected answer when a user selects an option.

disabledQuestions: string[]
Type: Array of strings
Required: Yes
Description: An array of question IDs that are disabled for further interaction after selection.

setShow: Function
Type: Function
Required: Yes
Description: A function to toggle the visibility of the explanation or feedback after a selection.