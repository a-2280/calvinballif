import { useState } from "react";

function Window() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {}

  return (
    <div className="w-[300px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-accent flex justify-between items-center py-1 px-4">
        <p>Test</p>
        <button className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"></button>
      </div>
      <div className="bg-secondary">
        <p className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sequi
          qui quam. Optio quidem illum distinctio, sapiente, velit quam eligendi
          numquam harum aliquid dolores accusantium? Aperiam cumque cupiditate
          animi deleniti!
        </p>
      </div>
    </div>
  );
}

export default Window;
