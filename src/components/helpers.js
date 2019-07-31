/** @jsx jsx */
import { jsx } from "@emotion/core";

function Content({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        height: "100vh",
        display: "grid",
        gridTemplate: "1fr / 450px 1fr",
        gridTemplateAreas: "'actions main'",
        "@media (max-width: 768px)": {
          gridTemplate: "235px 1fr / 1fr",
          gridTemplateAreas: "'actions' 'main'"
        },
        ...styles
      }}
    />
  );
}

function Action({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        gridArea: "actions",
        ...styles
      }}
    />
  );
}

function Main({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        gridArea: "main",
        overflow: "auto",
        "@media (max-width: 768px)": {
          height: "calc(235px - 1fr)"
        },
        ...styles
      }}
    />
  );
}

export { Content, Action, Main };
