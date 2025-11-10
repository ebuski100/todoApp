import Calendar from "../pages/Calendar";
import Me from "../pages/Me";
import SideNav from "./SideNav";
import Tasks from "../pages/Tasks";

function FootNav() {
  const handleSideNav = () => {};
  return (
    <div className="foot-nav">
      {/* <SideNav />
      <Tasks />
      <Calendar />
      <Me /> */}

      <div className="side-nav " onClick={handleSideNav}>
        <img
          className="footerIcon-img"
          src="/images/footer-menu.png"
          alt=""
        />
        <p className="footer-text">Tasks</p>
      </div>
      <div className="footer-icon ">
        <div className="footer-task-img-cont">
          <img
            className="footerIcon-img"
            src="/images/footer-task-white.png"
            alt=""
          />
        </div>

        <p className="footer-text">Tasks</p>
      </div>
      <div className="footer-icon">
        <img
          className="footerIcon-img"
          src="/images/footer-calendar-grey.png"
          alt=""
        />
        <p className="footer-text">Calendar</p>
      </div>
      <div className="footer-icon">
        <img
          className="footerIcon-img"
          src="/images/settings-grey.png"
          alt=""
        />
        <p className="footer-text">Settings</p>
      </div>
    </div>
  );
}

export default FootNav;
