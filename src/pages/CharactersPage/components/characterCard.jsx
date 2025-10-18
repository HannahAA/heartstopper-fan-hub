import "./characterCard.css";
import { useState } from "react";
import NoPersonImg from "../../../assets/no-person-photo.jpg";

const CharacterCard = ({ name = "", images = [], openCharOverlay }) => {

    // const [showSeriesPhoto, setShowSeriesPhoto] = useState(true);

    // const showSeriesImgFn = () => {
    //     setShowSeriesPhoto(true);
    // };

    // const showComicImgFn = () => {
    //     setShowSeriesPhoto(false);
    // };

    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    const toggleCharacterOverlay = () => {
        openCharOverlay(prev => !prev);
    };

    return (
        <div className="card">
            <div className="char-photo" onClick={toggleCharacterOverlay}>
                {images?.length === 0 ? 
                <img className="charlie-image" src={NoPersonImg} alt="no-image-available" /> : 
                <img className="charlie-image" src={images[activePhotoIndex]} alt="character-photo" />
                }
                {images?.length !== 0 && <div className="dot-slider">
                    {images.map((imgSrc, index) => (
                        <button className="dot" key={`dot-` + index} onClick={() => setActivePhotoIndex(index)} />
                    ))}
                </div>}
            </div>
            <div className="char-name">{name || "Hi"}</div>
        </div>
    )
}

export default CharacterCard;