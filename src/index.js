import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {createGlobalStyle} from "styled-components"

const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  margin: 0;
}

body {
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin: 0;
  height: 100vh;
  overflow: auto;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Global/>
    <App />
  </>
);

