import "./characterCard.css";
import { useState } from "react";
import CharacterCardPhotoComp from "./characterCardPhotoComp";

const CharacterCard = ({ name = "", images = [], openCharOverlay }) => {

    // const [showSeriesPhoto, setShowSeriesPhoto] = useState(true);

    // const showSeriesImgFn = () => {
    //     setShowSeriesPhoto(true);
    // };

    // const showComicImgFn = () => {
    //     setShowSeriesPhoto(false);
    // };

    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    // const toggleCharacterOverlay = () => {
    //     openCharOverlay(prev => !prev);
    // };

    return (
        <div className="card">
            <CharacterCardPhotoComp images={images} />
            <div className="char-name">{name || "Hi"}</div>
        </div>
    )
}

export default CharacterCard;