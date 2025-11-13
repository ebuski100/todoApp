import { useState } from "react";

function FootNav() {
  const [showSideNav, setShowSideNav] = useState(false);

  const openSideNav = () => setShowSideNav(true);
  const closeSideNav = () => setShowSideNav(false);

  return (
    <>
      {/* Footer Navigation */}
      <div className="foot-nav fixed bottom-0 left-0 w-full flex justify-around bg-gray-800 text-white p-2">
        <div
          className="side-nav flex flex-col items-center"
          onClick={openSideNav}
        >
          <img
            className="footerIcon-img h-6"
            src="/images/footer-menu.png"
            alt="menu"
          />
          <p className="footer-text text-xs">Menu</p>
        </div>
        <div className="footer-icon flex flex-col items-center">
          <img
            className="footerIcon-img h-6"
            src="/images/footer-task-white.png"
            alt="Tasks"
          />
          <p className="footer-text text-xs">Tasks</p>
        </div>
        <div className="footer-icon flex flex-col items-center">
          <img
            className="footerIcon-img h-6"
            src="/images/footer-calendar-grey.png"
            alt="Calendar"
          />
          <p className="footer-text text-xs">Calendar</p>
        </div>
        <div className="footer-icon flex flex-col items-center">
          <img
            className="footerIcon-img h-6"
            src="/images/settings-grey.png"
            alt="Settings"
          />
          <p className="footer-text text-xs">Settings</p>
        </div>
      </div>

      {/* SideNav Overlay */}
      {showSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSideNav} // click outside closes nav
        />
      )}

      {/* SideNav Container */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-linear
          ${showSideNav ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()} // clicking inside nav does not close
      >
        {/* Header */}
        <div className="nav-header-cont p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold">To-D</div>
            <img
              className="sideNavLogoImg h-6 ml-2"
              src="/images/checkmark-white.png"
              alt="logo"
            />
            <div className="text-xl font-bold ml-1">List</div>
          </div>
          <button onClick={closeSideNav} className="text-gray-600 font-bold">
            X
          </button>
        </div>

        {/* Body */}
        <div className="nav-cont-body p-4 space-y-4 overflow-y-auto">
          <div className="navItem flex items-center gap-2 cursor-pointer">
            <img src="/images/search-icon.png" alt="search" className="h-5" />
            <span>Search</span>
          </div>
          <div className="navItem flex items-center gap-2 cursor-pointer">
            <img src="/images/plus-white.png" alt="add" className="h-5" />
            <span>Add task</span>
          </div>
          <div className="navItem flex items-center gap-2 cursor-pointer">
            <img src="/images/crown.png" alt="pro" className="h-5" />
            <span>PRO Version</span>
          </div>
          {/* Add other nav items here */}
        </div>
      </div>
    </>
  );
}

export default FootNav;
