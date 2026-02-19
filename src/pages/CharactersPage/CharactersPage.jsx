import CharacterCard from "./components/characterCard";
import CharlieSpringSeriesPhoto from "../../assets/Charlie_Spring_series.jpg";
import CharlieSpringComicPhoto from "../../assets/Charlie_Spring_comic.webp";
import NickNelsonSeriesPhoto from "../../assets/Nick_Nelson_series.jpg";
import NickNelsonComicPhoto from "../../assets/Nick_Nelson_comic.webp";
import TaoXuSeriesPhoto from "../../assets/Tao_Xu_series.jpg";
import TaoXuComicPhoto from "../../assets/Tao_Xu_comic.webp";
import ElleArgentSeriesPhoto from "../../assets/Elle_Argent_series.webp";
import ElleArgentComicPhoto from "../../assets/Elle_Argent_comic.webp";
import AledLastComicPhoto from "../../assets/Aled_Last_comic.webp";
import IsaacHendersonSeriesPhoto from "../../assets/Isaac_Henderson_series.jpg";
import ToriSpringSeriesPhoto from "../../assets/Tori_Spring_series.jpg";
import ToriSpringComicPhoto from "../../assets/Tori_Spring_comic.webp";
import HarryGreeneSeriesPhoto from "../../assets/Harry_Greene_series.webp";
import HarryGreeneComicPhoto from "../../assets/Harry_Greene_comic.webp";
import BenHopeSeriesPhoto from "../../assets/Ben_Hope_series.webp";
import BenHopeComicPhoto from "../../assets/Ben_Hope_comic.webp";
import DarcyOlssonSeriesPhoto from "../../assets/Darcy_Olsson_series.jpg";
import DarcyOlssonComicPhoto from "../../assets/Darcy_Olsson_comic.webp";
import "./CharactersPage.css";
import CharacterOverlay from "./components/characterOverlay";
import { useState } from "react";

const CharactersPage = () => {

    let characters = ["Charlie Spring", "Nick Nelson", "Tao Xu", "Elle Argent", "Aled Last", "Isaac Henderson", "Tori Spring", "Harry Greene", "Ben Hope", "Darcy Olsson"];
    let charDetails = [{
        name: "Charlie Spring",
        images: [CharlieSpringSeriesPhoto, CharlieSpringComicPhoto],
    }, {
        name: "Nick Nelson",
        images: [NickNelsonSeriesPhoto, NickNelsonComicPhoto],
    }, {
        name: "Tao Xu",
        images: [TaoXuSeriesPhoto, TaoXuComicPhoto],
    }, {
        name: "Elle Argent",
        images: [ElleArgentSeriesPhoto, ElleArgentComicPhoto],
    }, 
    {
        name: "Aled Last",
        images: [AledLastComicPhoto],
    }, 
    {
        name: "Isaac Henderson",
        images: [IsaacHendersonSeriesPhoto],
    }, 
    {
        name: "Tori Spring",
        images: [ToriSpringSeriesPhoto, ToriSpringComicPhoto],
    }, {
        name: "Harry Greene",
        images: [HarryGreeneSeriesPhoto, HarryGreeneComicPhoto],
    }, {
        name: "Ben Hope",
        images: [BenHopeSeriesPhoto, BenHopeComicPhoto],
    }, {
        name: "Darcy Olsson",
        images: [DarcyOlssonSeriesPhoto, DarcyOlssonComicPhoto],
    }, 
];

    const [showCharacterOverlay, setShowCharacterOverlay] = useState(false);

    return (
        <div className="characters-pg-content">
            {showCharacterOverlay && <CharacterOverlay />}
            {/* <h1 className="characters-pg-title">Characters Page</h1>
            <p>This is the characters page of the Heartstopper Fan Hub. More content coming soon!</p> */}
            {/* <CharacterCard /> */}
            {/* <div className="characters-grid">
                {characters.map((character, index) => <CharacterCard name={character} />)}
            </div> */}

            <div className="characters-grid">
                {charDetails.map((character, index) => <CharacterCard key={`char-` + index} name={character?.name} images={character?.images} openCharOverlay={setShowCharacterOverlay} />)}
            </div>
        </div>
    );
}

export default CharactersPage;