import { useState } from "react";
import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TaskInput from "../Components/TaskInput";

function Calendar() {
  const [showInput, setShowInput] = useState(false);

  function ShowInput() {
    setShowInput(true);
    console.log("input shown");
  }
  function HideInput() {
    setShowInput(false);
  }
  return (
    <>
      <div className="calheadleft">
        <img src="/images/three-dots-black.png" alt="" className="h-6" />
      </div>
      <div className="calendarContainer">
        <CalendarLib />
      </div>
      <div className="calTasksCont">
        <div className="calNotaskText">
          No task for the day. <br />
          Click "+" to create your tasks.
        </div>
        <div className="calNotaskText">
          No task for the day. <br />
          Click "+" to create your tasks.
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
    </>
  );
}

export default Calendar;
