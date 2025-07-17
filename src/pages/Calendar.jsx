import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  return (
    <>
      <div className="calheadleft">
        <img src="/images/three-dots-grey.png" alt="" height={30} />
      </div>
      <div className="calendarContainer">
        <CalendarLib />
      </div>
      <div className="calNotaskText">
        No task for the day. <br />
        Click "+" to create your tasks.
      </div>
      <AddTask />
      <FootNav />
    </>
  );
}

export default Calendar;
