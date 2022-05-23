import BandHero from "../components/sections/BandHero";
import BandAlbuns from "../components/sections/BandAlbums";

const DUMMY_BAND = {
  id: 1,
  name: "Crystal Fighters",
  origin: [
    { country: "England", city: "London" },
    { country: "Spain", city: "Navarre" },
  ],
  genders: [
    "Aternative dance",
    "synth-pop",
    "folk",
    "folktronica",
    "indie pop",
    "indie rock",
  ],
  startYear: 2007,
  website: "http://www.crystalfighters.com/",
  members: [
    "Sebastian Pringle",
    "Gilbert Vierich",
    "Graham Dickson",
    "Eleanor Fletcher",
    "Andrew Wynen",
    "Tobi Gems",
    "Matty Brown",
  ],
  imageBand: "images/194438209_327067982119399_2670409986598263537_n.jpg",
  discography: {
    description:
      "The discography of Crystal Fighters, an English electronic band, consists of four studio albums, nine singles and ten music videos. Crystal Fighters' debut album, Star of Love was released in October 2010 and produced a chain of well received singles. The release of their second album, Cave Rave, in May 2013, was preceded by one official single, two official videos, and the airing and/or online streaming of the first four tracks.",
    albums: [
      {
        albumName: "Star of Love",
        releaseYear: 2010,
        albumPhoto: "images/albuns/Star_of_Love.jpg",
        description:
          "Star of Love is the debut studio album by English-Spanish electronic music band Crystal Fighters. It was originally released on 4 October 2010 on their label, Zirkulo. The album combines genres from Basque folk to straight electronic and dubstep. Two special releases followed in 2011: an Australian limited edition, which included a bonus disc of acoustic remixes, and a worldwide deluxe edition, which included the acoustic tracks and an additional track.",
        songs: [
          { track: 1, title: "Solar System", length: "3:58" },
          { track: 2, title: "Xtatic Truth", length: "3:38" },
          { track: 3, title: "I Do This Everyday", length: "3:45" },
          { track: 4, title: "Champion Sound", length: "3:25" },
          { track: 5, title: "Plage", length: "3:50" },
          { track: 6, title: "In The Summer", length: "3:56" },
          { track: 7, title: "At Home", length: "5:06" },
          { track: 8, title: "I Love London", length: "2:47" },
          { track: 9, title: "Swallow", length: "4:31" },
          { track: 10, title: "With You", length: "4:23" },
          { track: 11, title: "Follow", length: "3:16" },
        ],
      },
      {
        albumName: "Cave Rave",
        releaseYear: 2013,
        albumPhoto: "images/albuns/Crystal_Fighters_-_Cave_Rave.png",
        description:
          "Cave Rave is the second studio album by English/Spanish electronic music band Crystal Fighters, released on 24 May 2013 on their label, Zirkulo. The album consists of a mix of genres from Basque folk to straight electronic and dubstep. It was preceded by the official release of the single 'You & I' as well as the airing and/or online streaming of the first four tracks.",
        songs: [
          { track: 1, title: "Wave", length: "3:30" },
          { track: 2, title: "LA Calling", length: "3:49" },
          { track: 3, title: "You & I", length: "3:30" },
          { track: 4, title: "Separator", length: "4:08" },
          { track: 5, title: "No Man", length: "3:42" },
          { track: 6, title: "Bridge of Bones", length: "5:39" },
          { track: 7, title: "Love Natural", length: "3:19" },
          { track: 8, title: "Are We One", length: "3:35" },
          { track: 9, title: "These Nights", length: "3:19" },
          { track: 10, title: "Everywhere", length: "3:15" },
        ],
      },
      {
        albumName: "Everything Is My Family",
        releaseYear: 2016,
        albumPhoto:
          "images/albuns/Crystal_Fighters_-_Everything_Is_My_Family.png",
        description:
          "Everything Is My Family is the third studio album from the multi-national based band Crystal Fighters, released on 21 October 2016 via Zirkulo & Play It Again Sam records. As with the band's previous albums, Everything Is My Family includes songs inspired by Spanish, Basque folk music but also takes influence from a range of genres. The band said in a September, 2016 interview to expect, more dance floor, more psychedelia, more tropical, more rave. In advance of the album's release, Crystal Fighters released three singles. 'All Night', 'Good Girls'  and 'Lay Low'.",
        songs: [
          { track: 1, title: "Simplecito", length: "1:22" },
          { track: 2, title: "Yellow Sun", length: "3:29" },
          { track: 3, title: "Good Girls", length: "3:00" },
          { track: 4, title: "In Your Arms", length: "3:33" },
          { track: 5, title: "Live For You", length: "3:36" },
          { track: 6, title: "Way's I Can't Tell", length: "3:50" },
          { track: 7, title: "Al Night", length: "3:12" },
          { track: 8, title: "The Moondog", length: "5:57" },
          { track: 9, title: "Fly East", length: "6:42" },
          { track: 10, title: "Living The Dream", length: "4:21" },
          { track: 11, title: "Lay Low", length: "5:26" },
        ],
      },
    ],
  },
};

const BandPage = (props) => {
  const selectAlbumHandler = () => {};

  return (
    <div>
      <BandHero
        name={DUMMY_BAND.name}
        genders={DUMMY_BAND.genders}
        image={DUMMY_BAND.imageBand}
      />
      <BandAlbuns
        discography={DUMMY_BAND.discography}
        viewAlbum={selectAlbumHandler}
      />
    </div>
  );
};

export default BandPage;
