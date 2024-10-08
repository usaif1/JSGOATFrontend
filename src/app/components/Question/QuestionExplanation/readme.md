QuestionExplanation Component
The QuestionExplanation component is designed to display an explanation for a question after the user has made a selection. It allows users to view the correct answer and its explanation by clicking a button. The component utilizes an icon to indicate whether the explanation is expanded or collapsed.

Props
question: Object
Type: Object
Required: Yes
Description: The object representing the question, which includes the correct answer and explanation.

disabledQuestions: string[]
Type: Array of strings
Required: Yes
Description: An array of question IDs that are disabled for further interaction after selection.

setSelectedAnswer: Function
Type: Function
Required: Yes
Description: A function to set the currently selected answer for the question when the explanation is revealed.

show: boolean
Type: boolean
Required: Yes
Description: A boolean that determines whether the explanation is currently visible or hidden.

setShow: Function
Type: Function
Required: Yes
Description: A function to toggle the visibility of the explanation when the button is clicked.