const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  const boxClassName = `box ${className}`;
  return (
    <div className={boxClassName}>
      <p className="text-style">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="firstBox" boxText="Small" />
      <Box className="secondBox" boxText="Medium" />
      <Box className="thirdBox" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
