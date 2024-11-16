import { useState, useEffect } from "react";

function ContactWindow({ onClose }) {
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
    // Perform form submission logic here (already done via `action`)

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
        <p>Contact</p>
        <button
          className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"
          onClick={onClose}
        ></button>
      </div>
      <div className="bg-secondary p-4">
        <form
          action="https://formsubmit.co/khaliff.williamss@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <p className="pr-2">Name:</p>
            <input
              className="border-[1.5px] border-accent outline-black"
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
              className="border-[1.5px] border-accent outline-black"
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
              className="border-[1.5px] border-accent outline-black"
              name="message"
              placeholder="message"
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