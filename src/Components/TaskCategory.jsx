import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TaskCategory() {
  const initialCategories = [
    { id: 1, name: "All" },
    { id: 2, name: "work" },
    { id: 3, name: "personal" },
    { id: 4, name: "Birthday" },
  ];
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const [activeCategory, setActiveCategory] = useState(() => {
    const savedActive = localStorage.getItem("activeCategory");
    return savedActive ? Number(savedActive) : 1;
  });

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
      <ul className="taskCategoryCont">
        {categories.map((category) => (
          <li key={category.id}>
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
          </li>
        ))}

        <div style={{ minWidth: "3rem" }} />
      </ul>
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
