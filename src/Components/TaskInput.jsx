const TaskInput = () => {
  return (
    <div className=" taskInput">
      <input
        type="text"
        className="taskInputBox  w-full"
        autoFocus
        placeholder="Input new task here..."
      />
      <div className="inputTaskBtns flex flex-rows justify-between items-center  ">
        <div className="inputCategory">Daily</div>

        <img className="inputCalendar" src="/images/calendar-blue.png" alt="" />

        <div className="taskSubmitBtn ">
          <img className="h-6" src="/images/upload task arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
