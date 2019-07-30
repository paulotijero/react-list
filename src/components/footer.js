/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const footer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "13px 0",
  a: {
    textDecoration: "none",
    fontWeight: "normal",
    fontSize: "12px",
    ":first-of-type": {
      color: "#C4C4C4",
      transition: "all 0.25s",
      span: {
        fontWeight: "bold",
        letterSpacing: "0.1em",
        color: "#8E8E8E",
        ":last-child": {
          borderBottom: "1px solid #E67E22",
          transition: "all 0.25s"
        }
      },
      ":hover": {
        span: {
          ":last-child": {
            color: "#E67E22",
            borderBottom: "1px solid #C4C4C4"
          }
        }
      }
    },
    ":last-child": {
      display: "flex",
      alignItems: "center",
      color: "#C4C4C4",
      transition: "all 0.25s",
      svg: {
        fill: "#C4C4C4",
        width: "19px",
        height: "19px",
        marginRight: "4px",
        transition: "all 0.25s"
      },
      span: {
        marginTop: "3px"
      },
      ":hover": {
        color: "#E67E22",
        svg: {
          fill: "#E67E22"
        }
      },
      "@media (max-width: 768px)": {
        color: "#E67E22",
        transition: "all 0.25s",
        svg: {
          fill: "#E67E22"
        }
      }
    }
  }
};

function Footer() {
  return (
    <footer css={footer}>
      <a href="https://paulotijero.dev">
        <span>{"<>"}</span> by <span>Paulo Tijero</span>
      </a>
      <a href="https://github.com/paulotijero/react-list">
        <svg>
          <use xlinkHref="#github" />
        </svg>
        <span>Github</span>
      </a>
    </footer>
  );
}

export default Footer;
