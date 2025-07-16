import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  return (
    <>
      {/* <div className="calenderHeader">
        <div className="calheadRight">
          <div className="backMonth">
            <img src="/images/backward arrow.png" alt="" height={40} />
          </div>
          <div className="calHeadText">JULY 2025</div>

          <div className="nextMonth">
            <img src="/images/forward arrow.png" alt="" height={24} />
          </div>
        </div>
        <div className="calheadleft">
          <img src="/images/three-dots-grey.png" alt="" height={30} />
        </div>
      </div> */}
      <div className="calheadleft">
        <img src="/images/three-dots-grey.png" alt="" height={30} />
      </div>
      <div className="calendarContainer">
        <CalendarLib />
      </div>
      <AddTask />
      <FootNav />
    </>
  );
}

export default Calendar;
