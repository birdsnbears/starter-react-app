import { Outlet } from "react-router-dom";
import Mountains from "../Components/Mountains";
import Trees from "../Components/Trees";

function PortfolioLayout() {
  return (
    <div id="portfolio-layout" className="w-full text-white" style={{ backgroundColor: "var(--sky)" }}>
      <Mountains />
      <Trees />
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
