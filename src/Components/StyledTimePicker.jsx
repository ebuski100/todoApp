import React, { useRef } from "react";

const StyledTimePicker = ({ taskTime, setTaskTime }) => {
  const timeInputRef = useRef(null);

  const openPicker = () => {
    if (timeInputRef.current?.showPicker) {
      timeInputRef.current.showPicker(); // Modern browsers
    } else {
      timeInputRef.current.click(); // Fallback
    }
  };

  return (
    <div className="relative">
      {/* Custom UI */}
      <div
        onClick={openPicker}
        className="flex items-center justify-between bg-gray-200 rounded-2xl py-2 px-5 cursor-pointer shadow-sm active:scale-95 transition w-40"
      >
        <span className="text-gray-700 mr-4 font-semibold text-lg">
          {taskTime ? formatTime(taskTime) : "Set Time"}
        </span>

        <img src="/images/time.png" alt="clock" className="h-6 opacity-70" />
      </div>

      {/* Hidden Native Time Input */}
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

// Helper to make 13:00 -> 1:00 PM
function formatTime(time) {
  const [hour, minute] = time.split(":");
  const h = parseInt(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const formattedHour = ((h + 11) % 12) + 1;
  return `${formattedHour}:${minute} ${suffix}`;
}

export default StyledTimePicker;
