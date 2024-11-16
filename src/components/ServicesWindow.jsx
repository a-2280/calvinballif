import { useState, useEffect } from "react";

function ServicesWindow({ onClose, bringToFront, zIndex }) {
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
    bringToFront(); // Bring the window to the front when clicked or dragged
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
      className="w-[300px] fixed md:w-[500px] border-l-[1px] border-b-[1px] border-r-[1px] border-accent"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        zIndex: zIndex, // Dynamically apply z-index
      }}
    >
      <div
        className="bg-accent flex justify-between items-center py-1 px-4 cursor-grab select-none"
        onMouseDown={handleMouseDown}
      >
        <p>Services</p>
        <button
          className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"
          onClick={onClose}
        ></button>
      </div>
      <div className="bg-secondary p-4 max-h-[550px] overflow-scroll">
        <hr className="border-accent border-[1px]" />
        <p className="py-4">Web Development</p>
        <hr className="border-accent border-[1px]" />
        <p className="pt-4">
          I create responsive websites tailored to your needs. From clean
          designs to optimized performance, I ensure your online presence is
          both visually appealing and functional.
        </p>
        <p className="pt-4">Key Features:</p>
        <ul>
          <li>Custom Design</li>
          <li>Quality UI</li>
          <li>Ongoing maintenance & support</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesWindow;
