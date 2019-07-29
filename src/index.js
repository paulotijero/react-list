import React from "react";
import { render } from "react-dom";

function App() {
  return <h1>Init project</h1>;
}

const $root = document.getElementById("root");
render(<App />, $root);
