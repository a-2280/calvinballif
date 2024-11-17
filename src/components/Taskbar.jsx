import { useState, useEffect } from "react";

function Taskbar() {
  // Live time v
  const [currentTime, setCurrentTime] = useState(formattedTime());

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
    <div className="bg-secondary border-b-[1px] border-accent flex justify-between py-2 px-4 select-none">
      <p>Calvin Ballif</p>
      <div>{currentTime}</div>
    </div>
  );
}

export default Taskbar;
