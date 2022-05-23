import AlbumCard from "../layout/AlbumCard";
import Album from "../Album";

const BandAlbuns = (props) => {
  return (
    <div className="albums">
      <AlbumCard>
        <Album {...props} />
      </AlbumCard>
    </div>
  );
};

export default BandAlbuns;
