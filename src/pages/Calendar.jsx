import { useState } from "react";
import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TaskInput from "../Components/TaskInput";
import Task from "../Components/Task";
import DeleteTask from "../Components/DeleteTask";

function Calendar({
  categories,
  activeCategory,
  addTask,
  showInput,
  setShowInput,
  taskList,
  setTaskList,

  setDueDate,
  tempDueDate,
  setTempDueDate,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [taskToDelete, setTaskToDelete] = useState(null);
  function formatDateOnly(date) {
    const d = new Date(date);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yy = String(d.getFullYear()).slice(-2);
    return `${dd}/${mm}/${yy}`;
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

  const allTasks = Object.values(taskList || {})
    .flat()
    .sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
      <div className="calheadleft">
        <img src="/images/three-dots-black.png" alt="" className="h-6" />
      </div>
      <div className="calendarContainer">
        {/* <CalendarLib
          onChange={(date) => setTempDueDate(date)}
          value={tempDueDate}
        /> */}

        <CalendarLib
          onChange={(date) => {
            setTempDueDate(date);
            setDueDate(date); // <-- keep TaskInput in sync
            localStorage.setItem("task-dueDate", formatDateOnly(tempDueDate));
          }}
          value={tempDueDate}
        />
      </div>
      <div className="calTasksCont">
        {taskList.length === 0 ? (
          <div className="calNotaskText">
            No task for the day. <br />
            Click "+" to create your tasks.
          </div>
        ) : (
          <Task taskList={allTasks} openDeleteModal={openDeleteModal} />
        )}
      </div>
      {showDeleteModal && (
        <DeleteTask
          closeDeleteModal={closeDeleteModal}
          onConfirm={() => deleteTask(taskToDelete)}
          onCancel={closeDeleteModal}
        />
      )}

      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay "></div>
          <TaskInput
            categories={categories}
            activeCategory={activeCategory}
            addTask={addTask}
            setDueDate={setDueDate}
            dueDate={tempDueDate}
            tempDueDate={tempDueDate}
            setShowInput={setShowInput}
          />
        </div>
      )}
      <AddTask onClick={ShowInput} />
      <FootNav />
    </>
  );
}

export default Calendar;
