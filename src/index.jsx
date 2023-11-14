import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "GlobalStyle";
import LetterContextProvider from "context/LetterContext";
import MemberContextProvider from "context/MemberContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MemberContextProvider>
    <LetterContextProvider>
      <App />
      <GlobalStyle />
    </LetterContextProvider>
  </MemberContextProvider>
);
