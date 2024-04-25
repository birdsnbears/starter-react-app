import React from "react";
import tree1 from "../SVGs/pineTrees/pineTree (1).svg";
import tree2 from "../SVGs/pineTrees/pineTree (2).svg";
import tree3 from "../SVGs/pineTrees/pineTree (3).svg";
import tree4 from "../SVGs/pineTrees/pineTree (4).svg";
import tree5 from "../SVGs/pineTrees/pineTree (5).svg";
import tree6 from "../SVGs/pineTrees/pineTree (6).svg";
import tree7 from "../SVGs/pineTrees/pineTree (7).svg";
import tree8 from "../SVGs/pineTrees/pineTree (8).svg";
import PairOfTrees from "./PairOfTrees";

const treePairs = [
  {
    name: "background",
    first: tree8,
    second: tree7,
  },
  {
    name: "midground2",
    first: tree6,
    second: tree5,
  },
  {
    name: "midground1",
    first: tree4,
    second: tree3,
  },
  {
    name: "foreground",
    first: tree2,
    second: tree1,
  },
];

function Trees({ percentScroll }) {
  return (
    <div className="sticky top-0 left-0 w-screen h-0">
      <div className="relative w-full h-screen top-0 overflow-x-clip overflow-y-clip">
        {treePairs.map((pair, index) => {
          return (
            <div
              className="absolute w-full h-full origin-bottom"
              key={pair.name}
              style={{
                transform: `scale(${0.5 + 0.25 * index + percentScroll})`,
              }}
            >
              <PairOfTrees tree1={pair.first} tree2={pair.second} percentScroll={percentScroll} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trees;
