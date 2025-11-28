import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import Task from "../Components/Task";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteTask from "../Components/DeleteTask";

function Tasks({
  categories,
  setCategories,
  activeCategory,
  addTask,
  setActiveCategory,
  taskList,
  showInput,
  setShowInput,
  setTaskList,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const categoryRefs = useRef({});
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

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

  function openDeleteModal(taskId) {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  }

  function closeDeleteModal() {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  }

  function goTaskPage() {
    navigate("/TaskPage");
  }

  const deleteTask = (taskId) => {
    setTaskList((prev) => {
      const updated = { ...prev };

      for (const category in updated) {
        updated[category] = updated[category].filter(
          (task) => task.id !== taskId
        );
      }

      return updated;
    });

    closeDeleteModal();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tasksForActiveCategory = taskList[activeCategory] || [];
  useEffect(() => {
    const el = categoryRefs.current[activeCategory];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [activeCategory]);

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
          openDeleteModal={openDeleteModal}
          goTaskPage={goTaskPage}
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

      {showDeleteModal && (
        <DeleteTask
          closeDeleteModal={closeDeleteModal}
          onConfirm={() => deleteTask(taskToDelete)}
          onCancel={closeDeleteModal}
        />
      )}

      <AddTask onClick={ShowInput} />
      <FootNav
        categories={categories}
        setCategories={setCategories}
        addTask={addTask}
        activeCategory={activeCategory}
      />
    </div>
  );
}

export default Tasks;
