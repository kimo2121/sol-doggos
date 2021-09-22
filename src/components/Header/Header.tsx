import React from "react";
import "./header.css";

interface HedaerType {
  header?: string;
  className?: string;
}
const Header: React.FC<HedaerType> = ({ header, className }) => {
  return <h2 className={className}>{header}</h2>;
};

export default Header;
