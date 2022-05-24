import React from "react";

import AlbumCard from "../layout/AlbumCard";
import Album from "../Album";

const BandAlbuns = () => {
  return (
    <div className="albums">
      <AlbumCard>
        <Album />
      </AlbumCard>
    </div>
  );
};

export default BandAlbuns;
