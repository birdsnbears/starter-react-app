import { Outlet } from "react-router-dom";
import Mountains from "../Components/Mountains";
import Trees from "../Components/Trees";

function PortfolioLayout() {
  return (
    <div id="portfolio-layout" className="w-full text-white bg-blue-400">
      <Mountains />
      <Trees />
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
