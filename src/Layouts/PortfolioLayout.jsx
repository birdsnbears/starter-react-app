import { Outlet } from "react-router-dom";
import "./PortfolioLayout.css";

function PortfolioLayout() {
  return (
    <div id="portfolio-layout">
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
