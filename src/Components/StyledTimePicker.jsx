import React, { useRef } from "react";

const StyledTimePicker = ({ taskTime, setTaskTime, formatTime }) => {
  const timeInputRef = useRef(null);

  const openPicker = () => {
    if (timeInputRef.current?.showPicker) {
      timeInputRef.current.showPicker();
    } else {
      timeInputRef.current.click();
    }
  };

  return (
    <div className="relative">
      <div
        onClick={openPicker}
        className="flex items-center justify-between bg-gray-200 rounded-[8px] py-2 px-5 cursor-pointer shadow-sm active:scale-95 transition w-40"
      >
        <span className="text-gray-700 mr-4 font-semibold text-lg">
          {taskTime ? formatTime(taskTime) : "Set Time"}
        </span>

        <img src="/images/time.png" alt="clock" className="h-6 opacity-80" />
      </div>

      <input
        ref={timeInputRef}
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        className="absolute opacity-0 pointer-events-none"
      />
    </div>
  );
};

export default StyledTimePicker;
