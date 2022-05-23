import "./AlbumCard.css";

const AlbumCard = (props) => {
  return <div className="card">{props.children}</div>;
};

export default AlbumCard;
