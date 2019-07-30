/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Global, jsx } from "@emotion/core";

import App from "./components/app";

const $root = document.getElementById("root");

render(
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: "'Roboto', sans-serif"
        }
      }}
    />
    <App />
  </>,
  $root
);
