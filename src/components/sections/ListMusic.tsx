import { useState } from "react";

import "./ListMusic.css";
import Button from "../layout/Button";
import React from "react";

const ListMusic = ({ songs }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    return setIsVisible(!isVisible);
  };

  interface interfaceSong {
    track: number;
    title: string;
    length: string;
  }

  const song = songs.map((song: interfaceSong) => {
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
      <div>
        <Button onView={clickHandler}>
          {isVisible ? "Hide tracks" : "Show traks"}
        </Button>
      </div>
    </div>
  );
};

export default ListMusic;
