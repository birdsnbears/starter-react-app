import { Outlet } from "react-router-dom";
import { style } from "./PortfolioLayout.css";

function PortfolioLayout(style) {
  return (
    <div id="portfolio-layout">
      <h1 className="text-5xl">Portfolio Layout</h1>
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
