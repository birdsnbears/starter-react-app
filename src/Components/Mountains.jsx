import React, { useEffect, useState } from "react";
import "./Mountains.css";

const mountains = ["mountain5", "mountain4", "mountain3", "mountain2", "mountain1"];

function Mountains() {
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
  }, []);

  return (
    <div id="mountains" className="sticky top-0 w-screen h-0 left-0 -mx-6 text-purple-200">
      <div className="relative w-screen h-screen top-0 overflow-x-clip overflow-y-clip">
        {mountains.map((name, index) => {
          return (
            <div
              className="absolute w-screen h-screen group"
              key={name}
              style={{
                transform: `scale(${(110 + 5 * percentScroll + index * index * percentScroll) / 100}) translate(0,${8 * index - 5 * percentScroll - index * index * percentScroll + 10}vh)`,
              }}
            >
              <svg id={name} className={`origin-top w-full h-[100vw]`}></svg>
              <div className="w-screen h-full bg-[#101E2F] hidden group-last:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mountains;
