import './announcementBar.css';

const AnnouncementBar = ({ content }) => {

    console.log("AnnouncementBar content:", content);

    if (!content) return null;

    return (
        <div className="announcement-bar">
            <p>{content}</p>
        </div>
    );
};

export default AnnouncementBar;