function Container(props) {
  return (
    <div
      style={props.style}
      className={`container container--dynamic shadow ${props.className}`}
    >
      {props.children}
    </div>
  );
}

function ContainerMedium(props) {
  return (
    <div className={`container container--medium shadow ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Container;
export { ContainerMedium };
