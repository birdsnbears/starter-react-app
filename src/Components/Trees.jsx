import React, { useEffect, useState } from "react";
import tree1 from "../SVGs/pineTrees/pineTree (1).svg";
import tree2 from "../SVGs/pineTrees/pineTree (2).svg";
import tree3 from "../SVGs/pineTrees/pineTree (3).svg";
import tree4 from "../SVGs/pineTrees/pineTree (4).svg";
import tree5 from "../SVGs/pineTrees/pineTree (5).svg";
import tree6 from "../SVGs/pineTrees/pineTree (6).svg";

const trees = [tree6, tree5, tree4, tree3, tree2, tree1];

function Trees() {
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
    <div className="sticky top-0 w-screen h-0 left-0 -mx-6">
      <div className="relative w-screen h-screen top-0 overflow-x-clip overflow-y-clip">
        {trees.map((source, index) => {
          return (
            <div
              className="absolute w-screen h-screen group"
              key={index}
              style={{
                transform: `scale(${(110 + 5 * percentScroll + index * index * percentScroll) / 100}) translate(0,${8 * index - 5 * percentScroll - index * index * percentScroll + 10}vh)`,
              }}
            >
              <img className={`origin-top w-full h-[100vw]`} src={source} alt="background"></img>
              <div className="w-screen h-full -mt-5 bg-[#101E2F] hidden group-last:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trees;
