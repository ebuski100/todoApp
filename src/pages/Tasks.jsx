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
