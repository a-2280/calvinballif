function Icon(props) {
  return (
    <div
      className="w-[100px] flex flex-col justify-center items-center p-1 border-[1px] border-transparent select-none"
      onClick={props.onClick}
    >
      <div>
        <img src={props.src} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default Icon;
