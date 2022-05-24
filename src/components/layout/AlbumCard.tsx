import React from "react";
import "./AlbumCard.css";

type Props = {
  children: JSX.Element;
};

const AlbumCard = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};

export default AlbumCard;
