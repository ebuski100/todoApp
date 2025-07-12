function SideNavLogo() {
  return (
    <div className="nav-cont">
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
            <img className="logo-dot" src="/images/purple-dot.png" alt="" />
            <div className="bar purple-bar "></div>
          </div>
          <div className="side-nav-logo-item">
            <img className="logo-dot" src="/images/green-dot.png" alt="" />
            <div className="bar green-bar "></div>
          </div>
        </div>
      </div>
      <div className="side-nav-sub-header">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-name">userimpressionnlesss</div>
          <div className="edit-btn">
            <img src="/images/down.png" alt="" />
          </div>
        </div>
        <div className="notification">
          <div className="notification-icon  notification-item">
            <img src="/images/bell-black.png" alt="" />
          </div>
          <div className="side-bar-icon notification-item">
            <img src="/images/sidebar-black.png" alt="" />
          </div>
        </div>
      </div>
      <div className="navItem search">
        <img src="/images/search-icon.png" alt="" />
        <div className="searchText">Search</div>
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
        <img src="/images/theme-blue.png" height={40} alt="" />
        <div className="themeText">Theme</div>
      </div>
      <div className="donate navItem">
        <img src="/images/blue-donate-icon.png" alt="" height={40} />
        <div className="themeText">Donate</div>
      </div>
      <div className="feedback navItem">
        <img src="/images/feedback-blue.png" alt="" height={40} />
        <div className="feedbackText">Feedback</div>
      </div>
      <div className="settings navItem">
        <img src="/images/settings-blue.png" alt="" height={40} />
        <div className="settingsText">Settings</div>
      </div>
      <div className="share navItem">
        <img src="/images/share-blue.png" alt="" height={40} />
        <div className="settingsText">Share App</div>
      </div>
    </div>
  );
}

export default SideNavLogo;
