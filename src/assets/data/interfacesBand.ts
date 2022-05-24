interface DUMMY_BAND {
  id: number;
  name: string;
  origin: [
    { country: string; city: string },
    { country: string; city: string }
  ];
  genders: string[];
  startYear: number;
  website: string;
  members: string[];
  imageBand: string;
  discography: {
    description: string;
    albums: [
      {
        albumName: string;
        releaseYear: number;
        albumPhoto: string;
        description: string;
        songs: [
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string },
          { track: number; title: string; length: string }
        ];
      }
    ];
  };
}

export default DUMMY_BAND;
