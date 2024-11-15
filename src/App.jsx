import Taskbar from "./components/Taskbar";
import Icons from "./components/Icons";
import AboutWindow from "./components/AboutWindow";
import ResumeWindow from "./components/ResumeWindow";
import Window from "./components/Window";

function App() {
  return (
    <div className="bg-primary h-screen w-screen overflow-hidden">
      <Taskbar />
      <Icons />
      <ResumeWindow />
    </div>
  );
}

export default App;
