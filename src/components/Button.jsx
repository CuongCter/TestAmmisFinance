import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.navigation);
  };

  return (
    <button
      className="bg-blue-500 w-[120px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" 
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
