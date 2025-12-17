import { useState } from "react";
import { useLocation } from "react-router-dom";

const TaskInput = ({
  categories = [],
  activeCategory,
  addTask,
  setShowCalendar,
  setShowInput,
  tempDueDate,
  dueDate,
}) => {
  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const [taskText, setTaskText] = useState("");
  const location = useLocation();
  const currentPage = location.pathname;

  function handleCalendarIconClick() {
    if (currentPage === "/Calendar") {
      setShowInput(false);
      console.log(tempDueDate);
    } else if (currentPage === "/Tasks") {
      setShowCalendar(true);
    }
  }

  return (
    <div className=" taskInput">
      <input
        type="text"
        className="taskInputBox  w-full"
        autoFocus
        placeholder="Input new task here..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <div className="inputTaskBtns flex flex-rows justify-between items-center  ">
        <div className="flex flex-row  flex-1">
          <div className="inputCategory mr-4">
            {currentCategory ? currentCategory.name : "All"}
          </div>

          <div className="relative ">
            <img
              onClick={handleCalendarIconClick}
              src="/images/calendar-blue.png"
              alt=""
              className="h-9 "
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white mt-1 font-bold ">
              {dueDate ? new Date(dueDate).getDate() : ""}
            </span>
          </div>

          <img src="/images/clipboard-check.png" alt="" className="h-9 ml-4 " />
        </div>

        <div
          onClick={() => {
            addTask(taskText);
            setTaskText("");
          }}
          className="taskSubmitBtn "
          style={{ backgroundColor: taskText.trim() ? "#4e4ee6" : "#aaaaaa" }}
        >
          <img className="h-6" src="/images/upload task arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
