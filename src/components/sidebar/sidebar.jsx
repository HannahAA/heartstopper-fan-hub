import "./sidebar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/episodes">Episodes</a>
            <a href="/characters">Characters</a>
        </div>
    );
};

export default SideBar;