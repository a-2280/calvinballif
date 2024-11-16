import { useState, useEffect } from "react";

function ResumeWindow({ onClose }) {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

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
        <p>Resume</p>
        <button
          className="h-4 w-4 bg-close hover:bg-red-500 rounded-[50%] cursor-pointer"
          onClick={onClose}
        ></button>
      </div>
      <div className="bg-secondary p-4 max-h-[550px] overflow-y-scroll">
        <p className="pb-4">Calvin Ballif</p>
        <hr className="border-accent border-[1px]" />
        <p className="font-bold pt-4">SUMMARY</p>
        <p className="pb-4">
          Motivated IT professional with expertise in technical support,
          cybersecurity, and software development. Skilled in problem-solving,
          rapid learning, and team collaboration. Committed to delivering
          effective solutions and continuous improvement.
        </p>
        <hr className="border-accent border-[1px]" />
        <p className="font-bold pt-4">CERTIFICATIONS</p>
        <ul className="pb-4">
          <li>CompTIA A+</li>
          <li>CompTIA Network+</li>
          <li>CompTIA Security+</li>
        </ul>
        <hr className="border-accent border-[1px]" />
        <p className="font-bold pt-4">PROFESSIONAL EXPERIENCE</p>
        <p>
          <span className="font-bold">GPS Capital Markets</span> – South Jordan,
          UT
        </p>
        <p className="italic">IT Support Specialist (08/2022 – Present)</p>
        <ul>
          <li>
            Resolved hardware/software issues for end-users and trained them on
            IT best practices.
          </li>
          <li>
            Managed user accounts and access permissions via Active Directory
            and Azure.
          </li>
          <li>
            Documented support activities and provided remote support for VPN
            and offsite access.
          </li>
        </ul>
        <p className="pt-2">
          <span className="font-bold">Novacoast</span> – Lehi, UT
        </p>
        <p className="italic">SOC Analyst (1 year)</p>
        <ul className="pb-4">
          <li>
            Monitored network activity using LogRhythm and Splunk, identifying
            potential threats.
          </li>
          <li>
            Analyzed network flow and advised clients on mitigating security
            risks.
          </li>
        </ul>
        <hr className="border-accent border-[1px]" />
        <p className="font-bold pt-4">TOOLS & SKILLS</p>
        <p>
          Active Directory-Azure LogRhythm-Splunk-HTML-CSS
          JavaScript-React/Next-Git Adobe Illustrator
        </p>
      </div>
    </div>
  );
}

export default ResumeWindow;
