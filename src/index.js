import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";

const global = {
  body: {
    margin: 0,
    fontFamily: "'Roboto', sans-serif"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <h1>Init project</h1>
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
