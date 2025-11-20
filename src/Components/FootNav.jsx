import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideNav from "./SideNav";
function FootNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSideNav, setShowSideNav] = useState(false);

  const openSideNav = () => {
    setShowSideNav(true);
    document.body.style.overflow = "hidden";
  };
  const closeSideNav = () => {
    setShowSideNav(false);

    document.body.style.overflow = "auto";
  };

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      console.log("already on this page");
    }
  };

  return (
    <>
      <div className="foot-nav">
        <div className="side-nav " onClick={openSideNav}>
          <img
            className="footerIcon-img"
            src="/images/footer-menu.png"
            alt=""
          />
          <p
            className={`text-sm ${
              isActive("/Calendar")
                ? "text-[#4d74b4] font-semibold"
                : "text-gray-600"
            }`}
          >
            menu
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigate("/Tasks");
          }}
          className="footer-icon "
        >
          <div className="footer-task-img-cont">
            <img
              className="footerIcon-img"
              src={
                isActive("/Tasks")
                  ? "/images/footer-task-blue2.png"
                  : "/images/footer-task-grey.png"
              }
              alt=""
            />
          </div>

          <p
            className={`text-sm ${
              isActive("/Tasks")
                ? "text-[#4d74b4] font-semibold"
                : "text-gray-600"
            }`}
          >
            Tasks
          </p>
        </div>
        <div
          onClick={() => handleNavigate("/Calendar")}
          className="footer-icon"
        >
          <img
            className="footerIcon-img"
            src={
              isActive("/Calendar")
                ? "/images/footer-calenar-blue.png"
                : "/images/footer-calendar-grey.png"
            }
            alt=""
          />
          <p
            className={`text-sm ${
              isActive("/Calendar")
                ? "text-[#4d74b4] font-semibold"
                : "text-gray-600"
            }`}
          >
            Calendar
          </p>
        </div>
        <div
          className="footer-icon"
          onClick={() => handleNavigate("/Settings")}
        >
          <img
            className="footerIcon-img"
            src={
              isActive("/Settings")
                ? "/images/settings-blue.png"
                : "/images/settings-grey.png"
            }
            alt=""
          />
          <p
            className={`text-sm ${
              isActive("/Settings")
                ? "text-[#4d74b4] font-semibold"
                : "text-gray-600"
            }`}
          >
            Settings
          </p>
        </div>
      </div>

      {showSideNav && (
        <SideNav onClose={closeSideNav} showSideNav={showSideNav} />
      )}
    </>
  );
}

export default FootNav;
