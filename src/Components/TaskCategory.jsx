import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TaskCategory() {
  const initialCategories = [
    { id: 1, name: "All", img: "/images/meditation.png", isActive: true },
    { id: 2, name: "work", img: "/images/work.png", isActive: false },
    {
      id: 3,
      name: "personal",
      img: "/images/sittingLady.png",
      isActive: false,
    },
    { id: 4, name: "Birthday", img: "/images/birthday.png", isActive: false },
    { id: 5, name: "Sports", img: "/images/sports.png", isActive: false },
  ];

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const savedName = localStorage.getItem("userName") || "Guest";
  const [activeCategory, setActiveCategory] = useState(() => {
    const savedActive = localStorage.getItem("activeCategory");
    return savedActive ? Number(savedActive) : 1;
  });
  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  function goManageCategory() {
    navigate("/ManageCategories");
    console.log("category page opened");
  }

  useEffect(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="taskCategoryCont">
        {categories.map((category) => (
          <div key={category.id}>
            <div
              onClick={() => {
                setActiveCategory(category.id);
              }}
              className={`taskCont ${
                activeCategory === category.id ? "active" : ""
              }`}
            >
              {category.name}
            </div>
          </div>
        ))}

        <div style={{ minWidth: "3rem" }} />
      </div>

      {currentCategory && (
        <div>
          <div className="w-full p-2 flex flex-row  justify-between  ">
            <div className=" text-center  font-bold text-blue-500 text-[20px] w-full">
              Welcome {savedName}
            </div>
          </div>
          <div className="taskImgCont ">
            <img src={currentCategory.img} alt="" className=" w-full my-10" />
            <div className="taskImgtext">
              No task in {currentCategory.name}. <br />
              Click + to create your task
            </div>
          </div>
        </div>
      )}
      <div ref={menuRef}>
        <div onClick={() => setOpen(!open)} className="taskNavImg">
          <img src="/images/three-dots-grey.png" alt="" className="h-10" />
        </div>

        {open && (
          <div className="absolute top-14   right-4  w-auto bg-white border  border-gray-200 rounded-lg shadow-lg z-10 ">
            <ul className="py-1">
              <li>
                <button onClick={goManageCategory} className="dropDownIcon ">
                  Manage Categories
                </button>
              </li>
              <li>
                <button className="dropDownIcon ">Upgrade to PRO</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TaskCategory;
