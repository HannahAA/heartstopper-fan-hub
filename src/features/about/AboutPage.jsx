import Leaves from "../../assets/heartstopper-leaves.png";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <>
            <section className="about-pg-content">
                <div className="about-pg-title-section">
                    <h1>Hi!</h1>
                    <img className="about-pg-title-graphic" src={Leaves} alt="About Page Image" />
                </div>
                <div className="about-pg-desc-section">
                    <p className="about-pg-main-text">My name is Hannah. Heartstopper Fan Hub is a fan-made project by yours truly. <br /><br />
                        In September of 2025, I finished watching S3 of the Heartstopper series. 
                        After this I learnt that there would be no more seasons, but the Heartstopper saga would instead end with a feature length movie (Heartstopper Forever) and one final book. 
                        Like many others, I was mutually joyous and devastated. I had fallen in love with the characters and the story, and I wanted more.
                        So, I decided to create a fan hub where fans of the series could come together and celebrate the story and characters we love. <br /><br />
                        This is a work in progress, and I will be adding more features and content as I go along. 
                        If you have any suggestions or feedback, please feel free to reach out to me on my 
                        <a href="https://www.instagram.com/peppermint1507/" target="_blank" rel="noopener noreferrer"> Instagram</a> or <a href="mailto:hannahanneemail@gmail.com" target="_blank" rel="noopener noreferrer">email</a>. 
                        I hope you enjoy this fan hub as much as I enjoy creating it! 
                        Thank you for visiting!
                    </p>
                    <p className="about-pg-disclaimer">
                        Disclaimer: This is a fan-made project and is not affiliated with or endorsed by Alice Oseman, Netflix, or any other official entity associated with Heartstopper. I hold no rights to Heartstopper, its characters or story. 
                        All rights belong to Alice Oseman and Netflix.
                    </p>
                </div>
            </section>
        </>
    );
}

export default AboutPage;