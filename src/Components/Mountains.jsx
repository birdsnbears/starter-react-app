import React, { useEffect, useState } from "react";
import "./Mountains.css";

const mountains = ["mountain1", "mountain2", "mountain3", "mountain4", "mountain5"];

const initialYOffset = [0, 10, 20, 30, 40];
const finalYOffset = [5, 20, 35, 50, 65];

const initialSize = [105, 105, 105, 105, 105];
const finalSize = [110, 115, 120, 125, 130];

function Mountains() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="mountains">
      <div className="mountain w-screen">
        {mountains.map((name) => {
          return (
            <svg
              id={name}
              key={name}
              className="w-screen h-screen absolute"
              style={{
                transform: `translateY(${offsetY * 0.5}px}`,
              }}
            ></svg>
          );
        })}
      </div>
    </div>
  );
}

export default Mountains;
