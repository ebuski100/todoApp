import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function SideNavLogo() {
  const navigate = useNavigate();

  const savedName = localStorage.getItem("userName") || "Guest";

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  function goDonate() {
    navigate("/donate");
  }
  return (
    <div className="navContainer">
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
      <div className="nav-cont-body">
        <div className="side-nav-sub-header">
          <div className="profile">
            {/* <div className="profile-img"></div> */}
            {profilePic ? (
              <div className=" w-[50%] flex justify-end">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-15 h-15 rounded-full object-cover border border-2 border-gray-700"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                <span>No Photo</span>
              </div>
            )}
            <div className="profile-name">{savedName}</div>
          </div>
        </div>

        {/* <div className="navItem search">
          <img src="/images/search-icon.png" alt="" />
          <div className="searchText">Search</div>
        </div> */}
        <div className=" r78; 977 5vc4acd addtask navItem">
          <div className="addtaskImg">
            <img src="/images/plus-white.png" alt="" className="h-4" />
          </div>

          <div className="addTaskText">Add task</div>
        </div>
        {/* <div className="proSect navItem">
          <img src="/images/crown.png" alt="" />
          <div className="proText">PRO Version</div>
        </div> */}
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

        {/* <div className="navItem theme">
          <img src="/images/theme-blue.png" alt="" />
          <div className="themeText">Theme</div>
        </div> */}
        <div
          onClick={() => {
            goDonate();
            console.log("hello you clicked donate");
          }}
          className="donate navItem"
        >
          <img src="/images/blue-donate-icon.png" alt="" />
          <div className="themeText">Donate</div>
        </div>
        <div className="feedback navItem">
          <img src="/images/feedback-blue.png" alt="" />
          <div className="feedbackText">Feedback</div>
        </div>
        {/* <div className="settings navItem">
        <img src="/images/settings-blue.png" alt="" height={40} />
        <div className="settingsText">Settings</div>
      </div> */}
        <div className="share navItem">
          <img src="/images/share-blue.png" alt="" />
          <div className="settingsText">Share App</div>
        </div>
      </div>
    </div>
  );
}

export default SideNavLogo;
