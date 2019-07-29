/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Action } from "../components/helpers";

const container = {
  borderRight: "2px solid #C4C4C4",
  "@media (max-width: 768px)": {
    backgroundColor: "#F2F3F5",
    borderRight: "none"
  }
};

function ActionContent() {
  return <Action css={container} />;
}

export default ActionContent;
