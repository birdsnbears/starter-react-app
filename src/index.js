import React from "react";
import ReactDOM from "react-dom";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PortolioHomepage from "./Pages/PortfolioHomepage";
import PortfolioLayout from "./Layouts/PortfolioLayout";
import GamesLayout from "./Layouts/GamesLayout";
import GamesHomepage from "./Pages/GamesHomepage";
import NoGameFoundPage from "./Pages/NoGameFoundPage";
import BlockBreaker from "./Games/BlockBreaker";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PortfolioLayout />}>
      <Route index element={<PortolioHomepage />} />
      <Route path="/games" element={<GamesLayout />}>
        <Route path="/games" element={<GamesHomepage />}></Route>
        <Route path="/games/BlockBreaker" element={<BlockBreaker />}></Route>
        <Route path="/games/*" element={<NoGameFoundPage />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
