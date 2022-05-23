import "./BandHero.css";

const BandHero = (props) => {
  return (
    <div>
      <img className="heroimg" src={props.image} alt="band_photo" />
      <h1 className="herotitle">{props.name}</h1>
      <h3 className="herogenders">{props.genders}</h3>
    </div>
  );
};

export default BandHero;
