import React from "react";
import PairOfTrees from "./PairOfTrees";
import treeList from "../SVGs/pineTrees/pineTrees";

const numberOfTreePairs = treeList.length / 2;

const treePairs = [];
const backScale = 0.15;
const frontScale = 1;
const backGrowth = 0.05;
const frontGrowth = 0.25;

/** For each pair of trees:
 * Calculate the starting scale by interpolating between the first scale and the last
 * Calculate the amount of growth by interpolating between the first and last growth
 * Where "growth" is the change in scale starting from the top of the page to the bottom.
 * A random x-offset was added to make things more "natural"
 */
for (let i = 0; i < numberOfTreePairs; i++) {
  const initialScale = ((frontScale - backScale) * i) / (numberOfTreePairs - 1) + backScale;
  const growthDiff = ((frontGrowth - backGrowth) * i) / (numberOfTreePairs - 1) + backGrowth;
  const randOffset = Math.random() * 30 - 15;

  treePairs.push({
    name: `treePair${i}`,
    first: treeList[i * 2],
    second: treeList[i * 2 + 1],
    initialScale,
    growthDiff,
    randOffset,
  });
}

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
                transform: `scale(${pair.initialScale + pair.growthDiff * percentScroll}) translate(${pair.randOffset}%,10%)`,
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
