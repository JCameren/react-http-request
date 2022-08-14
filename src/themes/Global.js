import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #272727;
}

section {
  margin: 1rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
}

button {
  font: inherit;
  cursor: pointer;
  background: #230052;
  border: 1px solid #230052;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 20px;
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #460897;
  border-color: #460897;
}
`
export default GlobalStyles