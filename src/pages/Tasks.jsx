import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import Task from "../Components/Task";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteTask from "../Components/DeleteTask";
import CompletedLink from "../Components/CompletedLink";
import FinalBtns from "../Components/FinalBtns";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  activeTask,
  setActiveTask,
  dueDate,
  setDueDate,
  tempDueDate,
  setTempDueDate,
  showCalendar,
  setShowCalendar,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [showCalendar, setShowCalendar] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const file =
    localStorage.getItem("completionSoundFile") || "/sounds/done-note.wav";
  const audio = new Audio(file);
  const categoryRefs = useRef({});
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // function formatDateOnly(date) {
  //   const d = new Date(date);
  //   const dd = String(d.getDate()).padStart(2, "0");
  //   const mm = String(d.getMonth() + 1).padStart(2, "0");
  //   const yy = String(d.getFullYear()).slice(-2);
  //   return `${dd}/${mm}/${yy}`;
  // }

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
                  activeTask={activeTask}
                  // dueDate={dueDate}
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
            setShowCalendar={setShowCalendar}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />
        </div>
      )}

      {showCalendar && (
        <div
          onClick={() => setShowCalendar(false)}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-[1000]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="calendarContainer rounded-2xl "
          >
            <div className="my-10 ">
              <CalendarLib
                onChange={(date) => setTempDueDate(date)}
                value={tempDueDate}
              />
            </div>
            <FinalBtns
              confirmText="DONE"
              cancelText="CANCEL"
              onCancel={() => setShowCalendar(false)}
              onSave={() => {
                const formatted = tempDueDate;
                setDueDate(formatted);
                localStorage.setItem("task-dueDate", formatted);
                console.log(formatted);
                setShowCalendar(false);
              }}
            />
          </div>
        </div>
      )}

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
