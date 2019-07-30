/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Action } from "./helpers";
import { Search, Button, Label } from "./ui";
import Footer from "./footer";

const container = {
  padding: "0 30px",
  borderRight: "2px solid #C4C4C4",
  "@media (max-width: 768px)": {
    padding: "0 11px",
    borderRight: "none",
    backgroundColor: "#F2F3F5"
  }
};

const search = {
  margin: "10px 0"
};

const buttonContent = {
  margin: "10px 0",
  ":last-child": {
    button: {
      width: "calc(100% / 3)"
    }
  }
};

function ActionContent() {
  return (
    <Action css={container}>
      <Footer />
      <Search css={search} />
      <Label>Gender</Label>
      <div css={buttonContent}>
        <Button>Genderless</Button>
        <Button>Male</Button>
        <Button>Female</Button>
        <Button>Unknown</Button>
      </div>
      <Label>Status</Label>
      <div css={buttonContent}>
        <Button>Alive</Button>
        <Button>Dead</Button>
        <Button>Unknown</Button>
      </div>
    </Action>
  );
}

export default ActionContent;
