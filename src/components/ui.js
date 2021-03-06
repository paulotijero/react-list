/** @jsx jsx */
import { jsx } from "@emotion/core";

function Search({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "35px 0",
        height: "40px",
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
            backgroundColor: "#fff"
          }
        },
        "@media (max-width: 768px)": {
          margin: "10px 0",
          backgroundColor: "#fff"
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

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "calc(100% / 4)",
        height: "40px",
        margin: "0",
        border: "2px solid #C4C4C4",
        borderRight: "0",
        fontWeight: "bold",
        fontSize: "12px",
        letterSpacing: "0.1em",
        color: "#C4C4C4",
        backgroundColor: "#F2F3F5",
        transition: "all 0.25s",
        position: "relative",
        cursor: "pointer",
        ":focus": {
          outline: "none"
        },
        ":first-of-type": {
          marginLeft: "0",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          ":after": {
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px"
          }
        },
        ":last-child": {
          borderRight: "2px solid #c4c4c4",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          ":after": {
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px"
          }
        },
        ":hover:after": {
          opacity: 1
        },
        ":after": {
          content: "''",
          position: "absolute",
          left: "-2px",
          right: "-2px",
          bottom: "-2px",
          top: "-2px",
          border: "2px solid #E67E22",
          opacity: 0,
          zIndex: 1,
          transition: "all 0.25s"
        },
        "@media (max-width: 768px)": {
          backgroundColor: "#fff",
          ":after": {
            border: "0px"
          }
        },
        ...styles
      }}
    />
  );
}

function Label({ styles, ...props }) {
  return (
    <label
      {...props}
      css={{
        fontWeight: "bold",
        fontSize: "13px",
        letterSpacing: "0.1em",
        color: "#8E8E8E"
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        minWidth: "300px",
        maxWidth: "310px",
        width: "30%",
        height: "330px",
        margin: "10px 16px",
        padding: "0",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
        backgroundColor: "#fff",
        transition: "all 0.25s",
        "@media (max-width: 768px)": {
          width: "100%",
          minWidth: "unset",
          maxWidth: "unset",
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
          height: "unset"
        },
        ...styles
      }}
    />
  );
}

export { Search, Button, Label, Card };
