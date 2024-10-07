export const question = {
  _id: "66f74f4b5c8708be9be61968",
  order: 81,
  questionNumber: "81",
  title: "What is the output?",
  codeBlock:
    "```javascript\n" +
    "function sayHi(name) {\n" +
    "  return `Hi there, ${name}`;\n" +
    "}\n" +
    "\n" +
    "console.log(sayHi());\n" +
    "```",
  options:
    '[{"id":"- A","value":"`Hi there,`"},{"id":"B","value":"`Hi there, undefined`"},{"id":"C","value":"`Hi there, null`"},{"id":"D","value":"`ReferenceError`"}]',
  answer: "B",
  explanation:
    "By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n" +
    "\n" +
    "In ES6, we can overwrite this default `undefined` value with default parameters. For example:\n" +
    "\n" +
    '`function sayHi(name = "Lydia") { ... }`\n' +
    "\n" +
    "In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`",
};
