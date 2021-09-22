import React from "react";
import "./button.css";
interface btnType {
  text?: string;
  url?: string;
  className?: string;
}

const Button: React.FC<btnType> = ({ className, url, text }) => {
  const routeChange = () => {
    window.location.href = `${url}`;
  };
  return (
    <button onClick={routeChange} className={`join-button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
