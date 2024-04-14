import { Outlet } from "react-router-dom";

function PortfolioLayout() {
  return (
    <div>
      <h1 className="text-5xl">Portfolio Layout</h1>
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
