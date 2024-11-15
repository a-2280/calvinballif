import { useState, useEffect } from "react";

function ServicesWindow() {
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
        <p>Services</p>
        <button className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"></button>
      </div>
      <div className="bg-secondary p-4 max-h-[550px] overflow-scroll">
        <hr className="border-accent border-[1px]" />
        <p className="py-4">Web Development</p>
        <hr className="border-accent border-[1px]" />
        <p className="pt-4">
          I create modern, responsive websites tailored to your needs. From
          clean designs to optimized performance, I ensure your online presence
          is both visually appealing and functional.
        </p>
        <p className="pt-4">Key Features:</p>
        <ul>
          <li>
            <span className="font-bold">Custom Design: </span>Websites built to
            match your unique style and requirements.
          </li>
          <li>
            <span className="font-bold">Responsive Development: </span>Ensuring
            your site looks great on any device.
          </li>
          <li>
            <span className="font-bold">Performance Focus: </span>Fast-loading
            websites for a better user experience.
          </li>
          <li>
            <span className="font-bold">Maintenance: </span>Ongoing support and
            updates as needed.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesWindow;
