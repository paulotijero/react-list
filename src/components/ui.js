/** @jsx jsx */
import { jsx } from "@emotion/core";

function Search({ styles, ...props }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "40px",
        width: "90%",
        margin: "0 auto",
        border: "2px solid #c4c4c4",
        borderRadius: "5px",
        svg: {
          fill: "#c4c4c4",
          width: "19px",
          height: "19px",
          margin: "0 12px"
        },
        input: {
          fontSize: "22px",
          letterSpacing: "0.1em",
          color: "#666",
          border: "none",
          "&:focus": {
            outline: "none"
          },
          "&::placeholder": {
            color: "#c4c4c4"
          },
          "@media (max-width: 768px)": {
            backgroundColor: "#F2F3F5"
          }
        },
        ...styles
      }}
    >
      <svg>
        <use xlinkHref="#search" />
      </svg>
      <input type="text" placeholder="Search" {...props} />
    </div>
  );
}

export { Card, Search };
