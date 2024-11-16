import Icon from "./Icon";
import computer from "../images/Computer.webp";
import document from "../images/Document.webp";
import fullFile from "../images/fullFile.webp";
import openLetter from "../images/openLetter.webp";
import tools from "../images/Tools.webp";

function Icons({ onIconClick }) {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center pt-8 gap-4">
      <Icon src={computer} name="About" onClick={() => onIconClick("About")} />
      <Icon
        src={document}
        name="Resume"
        onClick={() => onIconClick("Resume")}
      />
      <Icon
        src={fullFile}
        name="Websites"
        onClick={() => onIconClick("Websites")}
      />
      <Icon
        src={openLetter}
        name="Contact"
        onClick={() => onIconClick("Contact")}
      />
      <Icon
        src={tools}
        name="Services"
        onClick={() => onIconClick("Services")}
      />
    </div>
  );
}

export default Icons;
