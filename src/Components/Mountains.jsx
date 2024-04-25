import React from "react";
import mountain1 from "../SVGs/mountains/mountains1.svg";
import mountain2 from "../SVGs/mountains/mountains2.svg";
import mountain3 from "../SVGs/mountains/mountains3.svg";
import mountain4 from "../SVGs/mountains/mountains4.svg";
import mountain5 from "../SVGs/mountains/mountains5.svg";

const mountains = [mountain5, mountain4, mountain3, mountain2, mountain1];

function Mountains({ percentScroll }) {
  return (
    <div className="sticky top-0 w-screen h-0 left-0">
      <div className="relative w-full h-screen top-0 overflow-x-clip overflow-y-clip">
        {mountains.map((source, index) => {
          return (
            <div
              className="absolute w-full h-full group"
              key={index}
              style={{
                transform: `scale(${(110 + 5 * percentScroll + index * index * percentScroll) / 100}) translate(0,${8 * index - 5 * percentScroll - index * index * percentScroll + 10}vh)`,
              }}
            >
              <img className={`origin-top w-full h-[100vw]`} src={source} alt="background"></img>
              <div className="w-full h-full -mt-5 bg-mountain-100 hidden group-last:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mountains;
