import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FootNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSideNav, setShowSideNav] = useState(false);

  const openSideNav = () => setShowSideNav(true);
  const closeSideNav = () => setShowSideNav(false);

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
        <div
          className="  fixed inset-0 bg-black/80 z-40"
          onClick={closeSideNav}
        >
          <div
            className={`navContainer fixed top-0 left-0 h-full w-80 bg-white z-50 transform duration-1000 transition-transform  ease-linear
          ${showSideNav ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-header-cont">
              <div className="nav-header">
                To-D
                <div className="load-page-img-div">
                  <img
                    className="sideNavLogoImg"
                    src="/images/checkmark-white.png"
                    alt=""
                  />
                </div>
                List
              </div>
              <div className="side-nav-logo-cont">
                <div className="side-nav-logo-item">
                  <img src="/images/check-mark-in-a-circle-blue.png" alt="" />
                  <div className="bar blue-bar "></div>
                </div>
                <div className="side-nav-logo-item">
                  <img
                    className="logo-dot"
                    src="/images/purple-dot.png"
                    alt=""
                  />
                  <div className="bar purple-bar "></div>
                </div>
                <div className="side-nav-logo-item">
                  <img
                    className="logo-dot"
                    src="/images/green-dot.png"
                    alt=""
                  />
                  <div className="bar green-bar "></div>
                </div>
              </div>
            </div>
            <div className="nav-cont-body">
              <div className="side-nav-sub-header">
                <div className="profile">
                  <div className="profile-img"></div>
                  <div className="profile-name">user0t09fqiwj09qu09qiwu0</div>
                  <div className="edit-btn">
                    <img src="/images/down.png" alt="" />
                  </div>
                </div>
                <div className="notification">
                  <div className="notification-icon  notification-item">
                    <img src="/images/bell-black.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="navItem search">
                <img src="/images/search-icon.png" alt="" />
                <div className="searchText">Search</div>
              </div>
              <div className=" r78; 977 5vc4acd addtask navItem">
                <div className="addtaskImg">
                  <img src="/images/plus-white.png" alt="" className="h-4" />
                </div>

                <div className="addTaskText">Add task</div>
              </div>
              <div className="proSect navItem">
                <img src="/images/crown.png" alt="" />
                <div className="proText">PRO Version</div>
              </div>
              <div className="category navItem">
                <div className="category1st">
                  <div className="categoryImg">
                    <img src="/images/category-blue.png" alt="" />
                  </div>
                  <div className="categoryText">Category</div>
                </div>

                <div className="categoryDropdown">
                  <img src="/images/grey arrow down.png" alt="" />
                </div>
              </div>
              <div className="nav-hr"></div>

              <div className="navItem theme">
                <img src="/images/theme-blue.png" alt="" />
                <div className="themeText">Theme</div>
              </div>
              <div className="donate navItem">
                <img src="/images/blue-donate-icon.png" alt="" />
                <div className="themeText">Donate</div>
              </div>
              <div className="feedback navItem">
                <img src="/images/feedback-blue.png" alt="" />
                <div className="feedbackText">Feedback</div>
              </div>

              <div className="share navItem">
                <img src="/images/share-blue.png" alt="" />
                <div className="settingsText">Share App</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FootNav;
