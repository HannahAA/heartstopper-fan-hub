import { useState } from "react";
import "./characterCardPhotoComp.css";

const CharacterCardPhotoComp = ({ images = [] }) => {

    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    return (
        <div className="photo-carousel">
            {/* <div className="char-photo"> */}
                {images?.length === 0 ? 
                <img className="char-image" src={NoPersonImg} alt="no-image-available" /> : 
                <img className="char-image" src={images[activePhotoIndex]} alt="character-photo" />
                }
            {/* </div> */}
            {images?.length !== 0 && <div className="dot-slider">
                {images.map((imgSrc, index) => (
                    <button className="dot" key={`dot-` + index} onClick={() => setActivePhotoIndex(index)} />
                ))}
            </div>}
        </div>
    );
};

export default CharacterCardPhotoComp;