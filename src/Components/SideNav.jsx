import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import CategoryDropdown from "./CategoryDropdown";

function SideNav({
  onClose,
  showSideNav,
  ontap,
  categories,
  setCategories,
  addTask,
  activeCategory,
}) {
  const [showInput, setShowInput] = useState(null);
  const navigate = useNavigate();
  const savedName = localStorage.getItem("userName") || "Guest";

  const [showFollow, setShowFollow] = useState(null);

  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  const openEmail = () => {
    window.location.href = "mailto: felixebus042@gmail.com";
  };

  // const goToX = () => {
  //   window.open("https://x.com/@Ebube_dev", "_blank", "noopener,noreferrer");
  // };

  const socials = {
    x: "https://x.com/@Ebube_dev",
    linkedin:
      "https://www.linkedin.com/in/ebube-felix-🧑🏽%E2%80%8D💻-820a3724a/",
    substack: "https://substack.com/@ebubefelix?utm_source=about-page",
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
          onClick={(e) => {
            if (showFollow) {
              setShowFollow(false);
            }
            e.stopPropagation();
          }}
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
              <div
                onClick={() => {
                  if (showFollow) {
                    setShowFollow(false);
                    return;
                  }

                  goAccount();
                }}
                className="profile"
              >
                <img
                  className={`w-[40px] h-[40px] rounded-full object-cover border border-2 mr-3 border-gray-700 ${
                    profilePic ? "bg-transparent" : "bg-gray-300 border-none"
                  }`}
                  src={profilePic}
                  alt=""
                />

                <div className="profile-name">{savedName}</div>
              </div>
            </div>

            <div className=" r78; 977 5vc4acd addtask navItem">
              <div className="addtaskImg">
                <img src="/images/plus-white.png" alt="" className="h-4" />
              </div>

              <div
                onClick={() => {
                  if (showFollow) {
                    setShowFollow(false);
                    return;
                  }
                  ShowInput();
                }}
                className="addTaskText"
              >
                Add task
              </div>
            </div>

            <CategoryDropdown
              ontap={ontap}
              categories={categories}
              setCategories={setCategories}
            />
            <div className="nav-hr"></div>

            <div
              onClick={() => {
                if (showFollow) {
                  setShowFollow(false);
                  return;
                }
                goDonate();
              }}
              className="donate navItem"
            >
              <img src="/images/blue-donate-icon.png" alt="" />
              <div className="themeText">Donate</div>
            </div>
            <div className="feedback navItem">
              <img src="/images/feedback-blue.png" alt="" />
              <div
                onClick={() => {
                  if (showFollow) {
                    setShowFollow(false);
                    return;
                  }
                  openEmail();
                }}
                className="feedbackText"
              >
                Feedback
              </div>
            </div>

            <div
              onClick={() => {
                if (showFollow) {
                  setShowFollow(false);
                  return;
                }

                handleShare();
              }}
              className="share navItem"
            >
              <img src="/images/share-blue.png" alt="" />
              <div className="settingsText">Share App</div>
            </div>
            <div
              onClick={() => setShowFollow((prev) => !prev)}
              className="  relative  follow navItem"
            >
              <img src="/images/follow-us.png" alt="" />
              <div className="followText">follow Us</div>
              {/* {showFollow && (
                <div className="p-3 bg-gray-200/50 rounded-2xl  absolute -top-50 right-0">
                  <div className="followItem">
                    <img src="/images/linkedin.png" alt="" />
                    <p>linkedIn</p>
                  </div>
                  <div onClick={goToX} className="followItem">
                    <img src="/images/twitter.png" alt="" />
                    <p>x.com</p>
                  </div>
                  <div className="followItem">
                    <img src="/images/substack.png" alt="" />
                    <p>substack</p>
                  </div>
                </div>
              )} */}

              {showFollow && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-gray-200/50 rounded-2xl absolute -top-50 right-0"
                >
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowFollow(false)}
                    className="followItem"
                  >
                    <img src="/images/linkedin.png" alt="" />
                    <p>LinkedIn</p>
                  </a>

                  <a
                    href={socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowFollow(false)}
                    className="followItem"
                  >
                    <img src="/images/twitter.png" alt="" />
                    <p>X (Twitter)</p>
                  </a>

                  <a
                    href={socials.substack}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowFollow(false)}
                    className="followItem"
                  >
                    <img src="/images/substack.png" alt="" />
                    <p>Substack</p>
                  </a>
                </div>
              )}
            </div>

            <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-3 py-4">
              <img
                className="h-8 mr-4"
                src="/images/privacyPolicy.png"
                alt=""
              />
              <div className="text ">Privacy Policy</div>
            </div>
            <div className=" px-3 active:bg-gray-100 rounded-2xl flex flex-row items-center  py-4">
              <img className="h-8 mr-4" src="/images/version.png" alt="" />
              <div className="text ">Version:1.02.95.1028</div>
            </div>
          </div>
        </div>
      </div>

      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay "></div>
          <TaskInput
            categories={categories}
            addTask={addTask}
            activeCategory={activeCategory}
          />
        </div>
      )}
    </>
  );
}

export default SideNav;
