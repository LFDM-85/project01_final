import React from "react";

import BandHero from "../components/sections/BandHero";
import BandAlbuns from "../components/sections/BandAlbums";
import DUMMY_BAND from "../assets/data/DUMMY_BAND";

const BandPage = () => {
  return (
    <div>
      <BandHero
        name={DUMMY_BAND.name}
        genders={DUMMY_BAND.genders}
        image={DUMMY_BAND.imageBand}
      />
      <BandAlbuns />
    </div>
  );
};

export default BandPage;
