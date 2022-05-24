interface interfaceDiscography {
  description: string;
  albums: [
    {
      albumName: string;
      releaseYear: number;
      albumPhoto: string;
      description: string;
      songs: [{ track: number; title: string; length: string }];
    }
  ];
}

export default interfaceDiscography;
