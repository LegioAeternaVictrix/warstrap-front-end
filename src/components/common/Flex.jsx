function Flex(props) {
  return (
    <div className={`flex ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}

function FlexOne(props) {
  return (
    <div className={`flex-one ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}

function FlexCenterAling(props) {
  return (
    <div
      className={`flex-center-aling  ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

function FlexOneStartAling(props) {
  return (
    <div
      className={`flex-one-start-aling ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

function FlexOneEndAling(props) {
  return (
    <div
      className={`flex-one-end-aling ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Flex;
export { FlexOne };
export { FlexCenterAling };
export { FlexOneStartAling };
export { FlexOneEndAling };
