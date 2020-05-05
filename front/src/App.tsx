import React from "react";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { Layout } from "./containers/Layout/Layout";
import { ThemeContext } from "@skbkontur/react-ui";
import { CLOVER_THEME } from "./globals/styles/cloverTheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={CLOVER_THEME}>
        <Layout>{routes()}</Layout>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
