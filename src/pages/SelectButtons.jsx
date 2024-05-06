import Button from "../components/Button/Button";
import { useState } from "react";

const SelectButtons = () => {
  
  const [buttonColor, setButtonColor] = useState("#2563eb"); // 초기값을 파란색으로 설정

  const handleButtonClick = (color) => {
    setButtonColor(color);
  };

  return (
    <div className="selectBtns">
      <Button
        color={buttonColor === "pink" ? "pink" : "#2563eb"}
        label="Primary"
        onClick={() => handleButtonClick("pink")}
      />
      <Button
        color={buttonColor === "blue" ? "pink" : "#2563eb"}
        label="Secondary"
        onClick={() => handleButtonClick("blue")}
      />
      <Button
        color={buttonColor === "black" ? "pink" : "#2563eb"}
        label="Default"
        onClick={() => handleButtonClick("black")}
      />
    </div>
  );
};

export default SelectButtons;
