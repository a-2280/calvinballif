import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Icons from "./components/Icons";
import AboutWindow from "./components/AboutWindow";
import ResumeWindow from "./components/ResumeWindow";
import WebsitesWindow from "./components/WebsitesWindow";
import ContactWindow from "./components/ContactWindow";
import ServicesWindow from "./components/ServicesWindow";

function App() {
  const [openWindows, setOpenWindows] = useState({
    about: false,
    resume: false,
    websites: false,
    contact: false,
    services: false,
  });

  const toggleWindow = (windowName) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName.toLowerCase()]: !prev[windowName.toLowerCase()],
    }));
  };

  return (
    <div className="bg-primary h-screen w-screen overflow-hidden">
      <Taskbar />
      <Icons onIconClick={toggleWindow} />
      {openWindows.about && (
        <AboutWindow onClose={() => toggleWindow("about")} />
      )}
      {openWindows.resume && (
        <ResumeWindow onClose={() => toggleWindow("resume")} />
      )}
      {openWindows.websites && (
        <WebsitesWindow onClose={() => toggleWindow("websites")} />
      )}
      {openWindows.contact && (
        <ContactWindow onClose={() => toggleWindow("contact")} />
      )}
      {openWindows.services && (
        <ServicesWindow onClose={() => toggleWindow("services")} />
      )}
    </div>
  );
}

export default App;
