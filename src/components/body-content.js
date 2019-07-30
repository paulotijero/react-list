/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Main } from "../components/helpers";
import { DataContext } from "../contexts/data";

const container = {
  backgroundColor: "#F2F3F5"
};

function BodyContent() {
  const contextType = React.useContext(DataContext);
  console.log(contextType.results);

  return (
    <Main css={container}>
      {contextType.results &&
        contextType.results.map((e, i) => {
          return (
            <div key={i}>
              <img src={e.image} alt={e.name} height="42" width="42" />
              <label>{e.name} |</label>
              <label> {e.status} |</label>
              <label> {e.species} |</label>
              <label> {e.gender} |</label>
              <label> {e.origin.name}</label>
              <p>--------------</p>
            </div>
          );
        })}
    </Main>
  );
}

export default BodyContent;
