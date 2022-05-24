import React from "react";
import "./Album.css";
import ListMusic from "./sections/ListMusic";
import DUMMY_BAND from "../assets/data/DUMMY_BAND";

const Album = () => {
  const album = DUMMY_BAND.discography.albums.map((album) => {
    return (
      <div key={album.albumName} className="album">
        <img className="albumimg" src={album.albumPhoto} alt="albumPhoto" />
        <div className="description">
          <h1>{album.albumName}</h1>
          <h3>{album.releaseYear}</h3>
          <p>{album.description}</p>
        </div>
        <div className="listmusic">
          <ListMusic songs={album.songs}></ListMusic>
        </div>
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
