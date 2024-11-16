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

  const [windowOrder, setWindowOrder] = useState([]);

  const toggleWindow = (windowName) => {
    setOpenWindows((prev) => {
      const isOpen = prev[windowName.toLowerCase()];
      if (!isOpen) {
        // Add the window to the order list if opening
        setWindowOrder((prevOrder) => [...prevOrder, windowName]);
      }
      return {
        ...prev,
        [windowName.toLowerCase()]: !isOpen,
      };
    });
  };

  const bringToFront = (windowName) => {
    setWindowOrder((prevOrder) => {
      const filtered = prevOrder.filter((name) => name !== windowName);
      return [...filtered, windowName];
    });
  };

  const getZIndex = (windowName) => {
    const index = windowOrder.indexOf(windowName);
    return index === -1 ? 0 : index + 1; // Default to 0 if not in order
  };

  return (
    <div className="bg-primary h-svh w-screen overflow-hidden">
      <Taskbar />
      <Icons onIconClick={toggleWindow} />
      {openWindows.about && (
        <AboutWindow
          onClose={() => toggleWindow("about")}
          bringToFront={() => bringToFront("about")}
          zIndex={getZIndex("about")}
        />
      )}
      {openWindows.resume && (
        <ResumeWindow
          onClose={() => toggleWindow("resume")}
          bringToFront={() => bringToFront("resume")}
          zIndex={getZIndex("resume")}
        />
      )}
      {openWindows.websites && (
        <WebsitesWindow
          onClose={() => toggleWindow("websites")}
          bringToFront={() => bringToFront("websites")}
          zIndex={getZIndex("websites")}
        />
      )}
      {openWindows.contact && (
        <ContactWindow
          onClose={() => toggleWindow("contact")}
          bringToFront={() => bringToFront("contact")}
          zIndex={getZIndex("contact")}
        />
      )}
      {openWindows.services && (
        <ServicesWindow
          onClose={() => toggleWindow("services")}
          bringToFront={() => bringToFront("services")}
          zIndex={getZIndex("services")}
        />
      )}
    </div>
  );
}

export default App;
