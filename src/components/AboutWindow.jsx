import { useState, useEffect } from "react";

function AboutWindow() {
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
      className="w-[300px] fixed"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div
        className="bg-accent flex justify-between items-center py-1 px-4 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <p>About</p>
        <button className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"></button>
      </div>
      <div className="bg-secondary p-4">
        <p className="pb-4">
          Somebody's Websites is an end-to-end development service, specializing
          in custom websites that are scalable and easy to manage.
        </p>
        <p className="pb-4">
          Whether you’re looking for a plug and play site on Shopify or a
          bespoke portfolio, we’ve got you covered.
        </p>
        <p>We specialize in the following frameworks:</p>
        <p>HTML-CSS-JavaScript React\Next-Node-Sanity</p>
      </div>
    </div>
  );
}

export default AboutWindow;