import { useState, useEffect } from "react";

function ContactWindow({ onClose, bringToFront, zIndex }) {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div
      className="w-[300px] fixed md:w-[500px]"
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
        <p>Contact</p>
        <button
          className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"
          onClick={onClose}
        ></button>
      </div>
      <div className="bg-secondary p-4 border-l-[1px] border-b-[1px] border-r-[1px] border-accent md:flex md:justify-center">
        <form
          action="https://formsubmit.co/khaliff.williamss@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <p className="pr-2">Name:</p>
            <input
              className="border-[1.5px] border-accent outline-black w-[250px]"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex pt-4">
            <p className="pr-2">Email:</p>
            <input
              className="border-[1.5px] border-accent outline-black md:w-[240px]"
              type="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pt-4">
            <p>Message:</p>
            <textarea
              className="border-[1.5px] border-accent outline-black w-[268px] md:w-[305px]"
              name="message"
              placeholder="message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="block mx-auto mt-4 bg-accent px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactWindow;
