import Taskbar from "./components/Taskbar";
import Icons from "./components/Icons";
import Window from "./components/Window";

function App() {
  return (
    <div className="bg-primary h-screen w-screen overflow-hidden">
      <Taskbar />
      <Icons />
      <Window />
    </div>
  );
}

export default App;
