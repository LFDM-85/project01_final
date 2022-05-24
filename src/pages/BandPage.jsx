import BandHero from "../components/sections/BandHero";
import BandAlbuns from "../components/sections/BandAlbums";
import DUMMY_BAND from "../assets/data/DUMMY_BAND";

const BandPage = (props) => {
  return (
    <>
      <BandHero
        name={DUMMY_BAND.name}
        genders={DUMMY_BAND.genders}
        image={DUMMY_BAND.imageBand}
      />
      <BandAlbuns discography={DUMMY_BAND.discography} />
    </>
  );
};

export default BandPage;
