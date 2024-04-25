import React from "react";

function PairOfTrees({ tree1, tree2, percentScroll }) {
  return (
    <div className="relative w-full bottom-0">
      <img className={`absolute h-screen max-w-none left-0 -translate-x-1/2`} src={tree1} alt="tree1"></img>
      <img className={`absolute h-screen max-w-none right-0 translate-x-1/2`} src={tree2} alt="tree2"></img>
    </div>
  );
}

export default PairOfTrees;
