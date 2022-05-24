import { useState } from "react";

import "./ListMusic.css";
import Button from "../layout/Button";

const ListMusic = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    return setIsVisible(!isVisible);
  };

  const song = props.songs.map((song) => {
    return (
      <div key={song.track} className="listmusic">
        <div className="list">
          <div>
            <p className="track">#{song.track}</p>
          </div>
          <div>
            <p className="song">{song.title}</p>
          </div>
          <div>
            <p className="time">{song.length}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {isVisible ? <div>{song}</div> : ""}
      <Button className="button" onView={clickHandler}>
        {isVisible ? "Hide tracks" : "Show traks"}
      </Button>
    </div>
  );
};

export default ListMusic;
