import { useState, useEffect } from "react";

function Taskbar() {
  // Live time v
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formattedTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formattedTime() {
    const time = new Date();
    const rawHour = time.getHours();
    const rawMinute = time.getMinutes();
    const hour = rawHour % 12;
    const minute = rawMinute < 10 ? `0${rawMinute}` : rawMinute;
    const meridiem = rawHour >= 12 ? "PM" : "AM";

    const finalTime = `${hour == 0 ? "12" : hour}:${minute} ${meridiem}`;
    return finalTime;
  }
  // Live time ^

  return (
    <div className="bg-red-400 flex justify-between py-2 px-4">
      <p>Somebody's Websites</p>
      <div>{currentTime}</div>
    </div>
  );
}

export default Taskbar;
