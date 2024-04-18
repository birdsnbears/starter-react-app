import { Outlet } from "react-router-dom";
import "./PortfolioLayout.css";
import Mountains from "../Components/Mountains";

function PortfolioLayout() {
  return (
    <div id="portfolio-layout">
      <Mountains />
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
