# SyntaxHighlighter Component

The `SyntaxHighlighter` component is used to display a syntax-highlighted block of code with a "Run" button overlay. It leverages the `react-syntax-highlighter` package to provide syntax highlighting and uses `react-icons` for the button icon.

## Props

### `children: string`

- **Type:** `string`
- **Required:** Yes
- **Description:** The code block to be displayed and highlighted.

## Usage

```jsx
import SyntaxHighlighter from './SyntaxHighlighter';

const codeString = `
  function sayHi(name) {
    return \`Hi there, \${name}\`;
  }

  console.log(sayHi('Alice'));
`;

export default function App() {
  return <SyntaxHighlighter>{codeString}</SyntaxHighlighter>;
}
