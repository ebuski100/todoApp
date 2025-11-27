import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import Task from "../Components/Task";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tasks({ categories, setCategories }) {
  const [showInput, setShowInput] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const categoryRefs = useRef({});
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(() => {
    const saved = localStorage.getItem("activeCategory");
    const parsed = Number(saved);
    return Number.isNaN(parsed) ? 0 : parsed;
  });
  const navigate = useNavigate();
  function goManageCategory() {
    navigate("/ManageCategories");
    console.log("category page opened");
  }

  function ShowInput() {
    setShowInput(true);
    console.log("input shown");
  }
  function HideInput() {
    setShowInput(false);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const addTask = (taskText) => {
  //   if (!taskText.trim()) return;

  //   const newTask = {
  //     id: Date.now(),
  //     text: taskText.trim(),
  //     category: activeCategory,
  //     completed: false,
  //   };

  //   setTaskList((prev) => [...prev, newTask]);
  //   setShowInput(false);
  // };
  // const tasksForActiveCategory = taskList.filter(
  //   (task) => task.category === activeCategory
  // );

  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };

    // Update tasks for current category
    const updatedTaskList = {
      ...taskList,
      [activeCategory]: taskList[activeCategory]
        ? [...taskList[activeCategory], newTask]
        : [newTask],
    };

    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList)); // persist
    setShowInput(false);
  };

  const tasksForActiveCategory = taskList[activeCategory] || [];

  return (
    <div className="tasksCont">
      <div className="taskCategoryCont">
        {categories.map((category) => (
          <div key={category.id}>
            <div
              ref={(el) => (categoryRefs.current[category.id] = el)}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              className={`taskCont ${
                activeCategory === category.id ? "active" : ""
              } whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {category.name}
            </div>
          </div>
        ))}

        <div style={{ minWidth: "3rem" }} />
      </div>

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
      {tasksForActiveCategory.length === 0 ? (
        <TaskCategory
          categories={categories}
          setCategories={setCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ) : (
        <Task
          taskList={tasksForActiveCategory}
          activeCategory={activeCategory}
        />
      )}

      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay "></div>
          <TaskInput
            categories={categories}
            activeCategory={activeCategory}
            addTask={addTask}
          />
        </div>
      )}

      <AddTask onClick={ShowInput} />
      <FootNav categories={categories} setCategories={setCategories} />
    </div>
  );
}

export default Tasks;
