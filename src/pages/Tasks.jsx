// import styles from "./Tasks.module.css";
import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import { useState } from "react";
function Tasks() {
  const [showInput, setShowInput] = useState(false);

  function ShowInput() {
    setShowInput(true);
    console.log("input shown");
  }
  function HideInput() {
    setShowInput(false);
  }

  return (
    <div className="tasksCont">
      <TaskCategory />
      <div className="taskImgCont">
        <img src="/images/meditation.png" alt="" />
        <div className="taskImgtext">
          No task in this category. <br />
          Click + to create your task
        </div>
      </div>
      {showInput && (
        <div>
          <div onClick={HideInput} className="inputOverlay "></div>
          <TaskInput />
        </div>
      )}

      <AddTask onClick={ShowInput} />
      <FootNav />
    </div>
  );
}

export default Tasks;
