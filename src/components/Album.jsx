import "./Album.css";
import ListMusic from "./sections/ListMusic";

const Album = (props) => {
  const album = props.discography.albums.map((album) => {
    return (
      <div key={album.albumName} className="album" onClick={props.viewAlbum}>
        <img className="albumimg" src={album.albumPhoto} alt="albumPhoto" />
        <div className="description">
          <h1>{album.albumName}</h1>
          <h3>{album.releaseYear}</h3>
          <p>{album.description}</p>
        </div>
        <ListMusic songs={album.songs}></ListMusic>
      </div>
    );
  });

  return (
    <div>
      <div>{album}</div>
    </div>
  );
};

export default Album;
