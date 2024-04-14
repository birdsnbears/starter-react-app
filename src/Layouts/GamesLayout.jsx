import { Outlet } from "react-router-dom";

function GamesLayout() {
  return (
    <div>
      <h1 className="text-5xl">Games Layout</h1>
      <Outlet />
    </div>
  );
}

export default GamesLayout;
