import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Mountains from "../Components/Mountains";
import Trees from "../Components/Trees";

function PortfolioLayout() {
  const [percentScroll, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(getScrollPercent());

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="portfolio-layout" className="w-full text-white bg-nsky">
      <Mountains percentScroll={percentScroll} />
      <Trees percentScroll={percentScroll} />
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
