import Taskbar from "./components/Taskbar";
import Icons from "./components/Icons";
import Window from "./components/Window";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  function toggleWindow() {
    setOpen(!open);
  }

  return (
    <div className="bg-primary h-screen w-screen overflow-hidden">
      <Taskbar />
      <Icons toggle={toggleWindow} />
      <Window toggle={toggleWindow} open={open} />
    </div>
  );
}

export default App;
