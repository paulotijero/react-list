/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Action } from "../components/helpers";
import { Search } from "../components/ui";

const container = {
  borderRight: "2px solid #C4C4C4",
  "@media (max-width: 768px)": {
    borderRight: "none",
    backgroundColor: "#F2F3F5"
  }
};

function ActionContent() {
  return (
    <Action css={container}>
      <form>
        <Search />
      </form>
    </Action>
  );
}

export default ActionContent;
