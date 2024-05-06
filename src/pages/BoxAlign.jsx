import React from "react";
import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const circleColorArr = ["pink", "red", "black", "gray", "green", "blue", "orange"];

const BoxAlign = () => {
  return (
    <div className="box-align"  > 
      <div className="boxes">
        <Box boxColor="red" text="red!"/>
        <Box boxColor="blue" text="blue!"/>
        <Box boxColor="green" text="green!"/>
        <Box boxColor="pink" text="pink!"/>
      </div>
      
      <div className="circles" style={{ display: 'flex', flexDirection: 'row' }}> 
      {circleColorArr.map((Circles) => (
          <Circle circle circleColor={Circles}></Circle> 
        ))}

      </div>
    </div>
  );
};

export default BoxAlign;
