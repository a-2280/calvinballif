import Taskbar from "./components/Taskbar";
import Icons from "./components/Icons";
import AboutWindow from "./components/AboutWindow";
import ResumeWindow from "./components/ResumeWindow";
import WebsitesWindow from "./components/WebsitesWindow";
import ContactWindow from "./components/ContactWindow";
import ServicesWindow from "./components/ServicesWindow";
import Window from "./components/Window";

function App() {
  return (
    <div className="bg-primary h-screen w-screen overflow-hidden">
      <Taskbar />
      <Icons />
      <ServicesWindow />
    </div>
  );
}

export default App;
