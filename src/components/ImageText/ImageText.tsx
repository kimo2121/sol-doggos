import React from "react";
import "./imageText.css";

interface ImageTextTypes {
  className?: string;
  img?: string;
  h5?: string;
  span?: string;
  dataAos?: string;
  dataAosDuration?: string;
}
const ImageText: React.FC<ImageTextTypes> = ({
  dataAosDuration,
  dataAos,
  className,
  img,
  h5,
  span,
}) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      className={className}
    >
      <img src={img} alt="" />
      <div>
        <h5>{h5}</h5>
        <span>T{span}</span>
      </div>
    </div>
  );
};

export default ImageText;
