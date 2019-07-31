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
  margin: "15px 0 35px 0",
  ":last-child": {
    button: {
      width: "calc(100% / 3)"
    }
  },
  "@media (max-width: 768px)": {
    margin: "5px 0"
  }
};

const buttonMark = {
  color: "#E67E22",
  backgroundColor: "rgba(255, 198, 131, 0.37) !important",
  ":after": {
    content: "''",
    position: "absolute",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    top: "-2px",
    border: "2px solid #E67E22",
    opacity: 1,
    zIndex: 1,
    transition: "all 0.25s"
  },
  ":first-of-type": {
    ":after": {
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px"
    }
  },
  ":last-child": {
    ":after": {
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px"
    }
  }
};

function ActionContent() {
  const contextType = React.useContext(DataContext);
  console.log(contextType.filter.gender);

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
          css={contextType.filter.gender === "genderless" ? buttonMark : ""}
        >
          Genderless
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="gender"
          value="male"
          css={contextType.filter.gender === "male" ? buttonMark : ""}
        >
          Male
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="gender"
          value="female"
          css={contextType.filter.gender === "female" ? buttonMark : ""}
        >
          Female
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="gender"
          value="unknown"
          css={contextType.filter.gender === "unknown" ? buttonMark : ""}
        >
          Unknown
        </Button>
      </div>
      <Label>Status</Label>
      <div css={buttonContent}>
        <Button
          onClick={contextType.handleChange}
          name="status"
          value="alive"
          css={contextType.filter.status === "alive" ? buttonMark : ""}
        >
          Alive
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="status"
          value="dead"
          css={contextType.filter.status === "dead" ? buttonMark : ""}
        >
          Dead
        </Button>
        <Button
          onClick={contextType.handleChange}
          name="status"
          value="unknown"
          css={contextType.filter.status === "unknown" ? buttonMark : ""}
        >
          Unknown
        </Button>
      </div>
    </Action>
  );
}

export default ActionContent;
