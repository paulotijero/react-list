/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Action } from "./helpers";
import { Search, Button, Label } from "./ui";
import Footer from "./footer";
import { DataContext } from "../contexts/data";

const container = {
  padding: "0 30px",
  borderRight: "2px solid #C4C4C4",
  "@media (max-width: 768px)": {
    padding: "0 11px",
    borderRight: "none",
    backgroundColor: "#F2F3F5"
  }
};

const buttonContent = {
  ":last-child": {
    button: {
      width: "calc(100% / 3)"
    }
  }
};

function ActionContent() {
  const contextType = React.useContext(DataContext);

  return (
    <Action css={container}>
      <Footer />
      <Search name="name" onChange={contextType.handleChange} />
      <Label>Gender</Label>
      <div css={buttonContent}>
        <Button
          onClick={contextType.handleChange}
          name="gender"
          value="genderless"
        >
          Genderless
        </Button>
        <Button onClick={contextType.handleChange} name="gender" value="male">
          Male
        </Button>
        <Button onClick={contextType.handleChange} name="gender" value="female">
          Female
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="gender"
          value="unknown"
        >
          Unknown
        </Button>
      </div>
      <Label>Status</Label>
      <div css={buttonContent}>
        <Button onClick={contextType.handleChange} name="status" value="alive">
          Alive
        </Button>
        <Button onClick={contextType.handleChange} name="status" value="dead">
          Dead
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="status"
          value="unknown"
        >
          Unknown
        </Button>
      </div>
    </Action>
  );
}

export default ActionContent;
