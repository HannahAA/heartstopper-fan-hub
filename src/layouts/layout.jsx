import { Outlet, useLocation } from "react-router-dom";
import AnnouncementBar from "../components/announcementBar/announcementBar";
import Navbar from "../components/navbar/navbar";

const Layout = () => {
  const location = useLocation();

  const ANNOUNCEMENT_HEIGHT = 40;
const NAVBAR_HEIGHT = 48;

  // routes that should show the announcement bar
  const announcementRoutes = ["/", "/episodes"];
  console.log("Current path:", location.pathname);

  const showAnnouncement =
    announcementRoutes.includes(location.pathname);

console.log("Show announcement bar:", showAnnouncement);

  const announcementMessage = showAnnouncement
    ? "New episode out now!"
    : null;

  const navbarTopOffset = showAnnouncement ? "40px" : "0";

  return (
    <>
      <AnnouncementBar content={announcementMessage} />

      <Navbar style={{ top: showAnnouncement ? `${ANNOUNCEMENT_HEIGHT}px` : "0" }} />

      <div style={{ paddingTop: showAnnouncement ? "88px" : "48px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;