/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Main } from "../components/helpers";
import { Card } from "../components/ui";
import { DataContext } from "../contexts/data";

const container = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#F2F3F5",
  "@media (max-width: 768px)": {
    display: "block",
    padding: "0 11px"
  }
};

const imgContainer = {
  width: "100%",
  height: "210px",
  position: "relative",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    borderRadius: "5px 5px 0 0"
  },
  "@media (max-width: 768px)": {
    width: "100px",
    height: "unset",
    img: {
      borderRadius: "5px 0 0 5px"
    }
  }
};

const dataContainer = {
  width: "67%",
  padding: "5px 13px",
  p: {
    margin: "0",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "29px"
  },
  div: {
    display: "flex",
    alignItems: "center"
  }
};

const state = {
  display: "flex",
  margin: "5px 0",
  alignItems: "center",
  fontSize: "14px"
};

const status = {
  color: "#fff",
  padding: "3px",
  marginLeft: "5px",
  textTransform: "capitalize",
  borderRadius: "5px",
  background: "#C4C4C4"
};

const statusAlive = { ...status, padding: "3px  17px", background: "#2ECC71" };
const statusDead = { ...status, padding: "3px  17px", background: "#E74C3C" };

const info = {
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  div: {
    margin: "0 5px"
  },
  label: {
    fontWeight: "bold",
    marginRight: "5px"
  }
};

function BodyContent() {
  const contextType = React.useContext(DataContext);

  return (
    <Main css={container}>
      {contextType.results &&
        contextType.results.map((e, i) => {
          return (
            <Card key={i}>
              <div css={imgContainer}>
                <img src={e.image} alt={e.name} />
              </div>
              <div css={dataContainer}>
                <p>{e.name}</p>
                <div css={state}>
                  <span
                    css={
                      e.status === "Alive"
                        ? statusAlive
                        : e.status === "Dead"
                        ? statusDead
                        : status
                    }
                  >
                    {e.status}
                  </span>
                  <span>{e.origin.name}</span>
                </div>
                <div css={info}>
                  <div>
                    <label>Specie:</label>
                    <span>{e.species}</span>
                  </div>
                  <div>
                    <label>Gender:</label>
                    <span>{e.gender}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
    </Main>
  );
}

export default BodyContent;
