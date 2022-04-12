import React from "react";
import { Main, Section, Sticky } from "./styles";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <Sticky className="first" />
          <Sticky className="second" />
        </Section>
        
        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>

      <GlobalStyles />
    </>
  );
}

export default App;
