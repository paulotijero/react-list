/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Main } from "../components/helpers";

const container = {
  backgroundColor: "#F2F3F5"
};

function BodyContent() {
  return <Main css={container} />;
}

export default BodyContent;
