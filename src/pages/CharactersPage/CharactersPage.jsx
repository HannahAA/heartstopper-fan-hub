import CharacterCard from "./components/characterCard";
import CharlieSpringSeriesPhoto from "../../assets/Charlie_Spring_series.jpg";
import CharlieSpringComicPhoto from "../../assets/Charlie_Spring_comic.webp";
import NickNelsonSeriesPhoto from "../../assets/Nick_Nelson_series.jpg";
import NickNelsonComicPhoto from "../../assets/Nick_Nelson_comic.webp";
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
        images: [],
    }, {
        name: "Elle Argent",
        images: [],
    }, 
    {
        name: "Aled Last",
        images: [],
    }, 
    {
        name: "Isaac Henderson",
        images: [],
    }, 
    {
        name: "Tori Spring",
        images: [],
    }, {
        name: "Harry Greene",
        images: [],
    }, {
        name: "Ben Hope",
        images: [],
    }, {
        name: "Darcy Olsson",
        images: [],
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