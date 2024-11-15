import { useState, useEffect } from "react";

import Icon from "./Icon";

import lilyballif from "../images/lilyballif.webp";

function WebsitesWindow() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  function handleMouseDown(e) {
    setOffsetX(e.clientX - x);
    setOffsetY(e.clientY - y);
    setDragging(true);
  }

  function handleMouseMove(e) {
    if (dragging) {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      setX(newX);
      setY(newY);
    }
  }

  function handleMouseUp() {
    setDragging(false);
  }

  return (
    <div
      className="w-[300px] fixed border-b-3"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div
        className="bg-accent flex justify-between items-center py-1 px-4 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <p>Websites</p>
        <button className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"></button>
      </div>
      <div className="bg-secondary grid grid-cols-2 grid-rows-2 justify-items-center items-center pt-4">
        <a href="https://lilyballif.com/" target="_blank">
          <Icon src={lilyballif} name="lilyballif" />
        </a>
      </div>
    </div>
  );
}

export default WebsitesWindow;
