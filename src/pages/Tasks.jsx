import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import Task from "../Components/Task";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteTask from "../Components/DeleteTask";
import CompletedLink from "../Components/CompletedLink";

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
  setActiveTask,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const categoryRefs = useRef({});
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function goManageCategory() {
    navigate("/ManageCategories");
  }

  function ShowInput() {
    setShowInput(true);
  }
  function HideInput() {
    setShowInput(false);
  }
  function playDoneNote() {
    const file = localStorage.getItem("completionSoundFile") || "done";
    const audio = new Audio(file);
    console.log(file);
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Audio play failed:", err));
  }

  function toggleTaskCompletion(task) {
    setTaskList((prev) => {
      const updated = { ...prev };
      const categoryTasks = updated[task.categoryId] || [];
      if (!task.completed) {
        playDoneNote();
      }

      updated[task.categoryId] = categoryTasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toISOString() : null,
            }
          : t
      );

      return updated;
    });
  }

  function openDeleteModal(taskId) {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  }

  function closeDeleteModal() {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  }

  function goTaskPage(task) {
    setActiveTask(task);
    localStorage.setItem("activeTask", JSON.stringify(task));
    navigate("/TaskPage");
  }

  function handleCategoryClick(id) {
    setActiveCategory(id);
    localStorage.setItem("activeCategory", id);
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
  const completedForActiveCategory = (taskList[activeCategory] || []).filter(
    (task) => task.completed
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const el = categoryRefs.current[activeCategory];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [activeCategory]);

  // Separate active and completed tasks
  const allTasks = taskList[activeCategory] || [];
  const activeTasks = allTasks.filter((task) => !task.completed);
  const completedTasks = allTasks.filter((task) => task.completed);

  return (
    <div className="tasksCont flex flex-col h-screen">
      {/* Category selector */}
      <div className="taskCategoryCont ">
        {categories.map((category) => (
          <div key={category.id}>
            <div
              ref={(el) => (categoryRefs.current[category.id] = el)}
              onClick={() => handleCategoryClick(category.id)}
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

      {/* Dropdown menu */}
      <div ref={menuRef}>
        <div onClick={() => setOpen(!open)} className="taskNavImg">
          <img src="/images/three-dots-grey.png" alt="" className="h-10" />
        </div>
        {open && (
          <div className="absolute top-14 right-4 w-auto bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li>
                <button onClick={goManageCategory} className="dropDownIcon">
                  Manage Categories
                </button>
              </li>
              <li>
                <button className="dropDownIcon">Upgrade to PRO</button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Active Tasks */}
      <div className="w-full flex-1 overflow-y-auto pb-[7rem]">
        <div className="activeTasksContainer mb-2 w-full p-2 ">
          {activeTasks.length === 0 ? (
            <TaskCategory
              categories={categories}
              setCategories={setCategories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ) : (
            <div>
              <h2 className="font-bold text-lg m-2">Active </h2>{" "}
              {activeTasks.map((task) => (
                <Task
                  key={task.id}
                  taskList={[task]}
                  goTaskPage={() => goTaskPage(task)}
                  openDeleteModal={() => openDeleteModal(task.id)}
                  toggleCompletion={() => toggleTaskCompletion(task)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="completedTasksContainer w-full p-2 ">
            <h2 className="font-bold text-lg m-2">Completed </h2>
            {completedTasks.map((task) => (
              <Task
                key={task.id}
                taskList={[task]}
                goTaskPage={() => goTaskPage(task)}
                openDeleteModal={() => openDeleteModal(task.id)}
                toggleCompletion={() => toggleTaskCompletion(task)}
              />
            ))}
            {completedForActiveCategory.length > 0 && (
              <CompletedLink activeCategory={activeCategory} />
            )}
          </div>
        )}
      </div>

      {/* Task Input */}
      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay"></div>
          <TaskInput
            categories={categories}
            activeCategory={activeCategory}
            addTask={addTask}
          />
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteTask
          closeDeleteModal={closeDeleteModal}
          onConfirm={() => deleteTask(taskToDelete)}
          onCancel={closeDeleteModal}
          DeleteHeader="Delete task ?"
        />
      )}

      {/* Add Task Button */}
      <AddTask onClick={ShowInput} />

      {/* Footer Navigation */}
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
