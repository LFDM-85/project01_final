import React from "react";

import "./BandHero.css";

type Props = {
  image: string;
  name: string;
  genders: string[];
};

const BandHero = ({ image, name, genders }: Props) => {
  return (
    <div>
      <img className="heroimg" src={image} alt="band_photo" />
      <h1 className="herotitle">{name}</h1>
      <h3 className="herogenders">{genders}</h3>
    </div>
  );
};

export default BandHero;
