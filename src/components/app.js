/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Content } from "./helpers";
import Symbols from "./symbols";
import Home from "../views/home";

function App() {
  return (
    <Content>
      <Symbols />
      <Home />
    </Content>
  );
}

export default App;
