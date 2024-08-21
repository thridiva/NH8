import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import { routeConfig } from "./routes";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={React.createElement(route.component)}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
