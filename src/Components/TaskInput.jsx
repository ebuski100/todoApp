import { useState } from "react";

const TaskInput = ({ categories, activeCategory, addTask }) => {
  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const [taskText, setTaskText] = useState("");
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
        <div className="inputCategory">
          {currentCategory ? currentCategory.name : "All"}
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
