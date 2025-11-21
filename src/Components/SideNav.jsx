import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";

function SideNav({ onClose, showSideNav }) {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const savedName = localStorage.getItem("userName") || "Guest";

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  const openEmail = () => {
    window.location.href = "mailto: felixebus042@gmail.com";
  };

  function goDonate() {
    navigate("/donate");
  }

  function goAccount() {
    navigate("/User");
  }

  function ShowInput() {
    setShowInput(true);
    console.log("input shown");
  }
  function HideInput() {
    setShowInput(false);
  }

  const handleShare = () => {
    const shareData = {
      title: "My Todo App",
      text: "Check out my awesome todo app!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <>
      <div className="  fixed inset-0 bg-black/80 z-40" onClick={onClose}>
        <div
          className={`navContainer fixed top-0 left-0 h-full w-80 bg-white z-50 transform duration-1000 transition-transform  ease-linear
          ${
            showSideNav ? "translate-x-0 overflow-y-auto" : "-translate-x-full"
          }`}
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
              <div onClick={goAccount} className="profile">
                <img
                  // className="w-[40px] h-[40px] rounded-full object-cover border border-2 mr-3 border-gray-700"
                  className={`w-[40px] h-[40px] rounded-full object-cover border border-2 mr-3 border-gray-700 ${
                    profilePic ? "bg-transparent" : "bg-gray-300 border-none"
                  }`}
                  src={profilePic}
                  alt=""
                />

                <div className="profile-name">{savedName}</div>
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

              <div onClick={ShowInput} className="addTaskText">
                Add task
              </div>
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
            <div onClick={goDonate} className="donate navItem">
              <img src="/images/blue-donate-icon.png" alt="" />
              <div className="themeText">Donate</div>
            </div>
            <div className="feedback navItem">
              <img src="/images/feedback-blue.png" alt="" />
              <div onClick={openEmail} className="feedbackText">
                Feedback
              </div>
            </div>

            <div onClick={handleShare} className="share navItem">
              <img src="/images/share-blue.png" alt="" />
              <div className="settingsText">Share App</div>
            </div>
          </div>
        </div>
      </div>
      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay "></div>
          <TaskInput />
        </div>
      )}
    </>
  );
}

export default SideNav;
