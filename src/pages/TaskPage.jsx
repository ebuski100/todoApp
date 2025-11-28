import React, { useState } from "react";
import Goback from "./Goback";
import FinalBtns from "../Components/FinalBtns";
import StyledTimePicker from "../Components/StyledTimePicker";

const TaskPage = ({ onSave }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const repeatOpts = ["None", "Daily", "Weekly", "Monthly", "Yearly"];

  const [activeRepeat, setActiveRepeat] = useState("None");
  const [showTime, setShowTime] = useState(false);
  const [taskTime, setTaskTime] = useState("");

  function onCancel() {
    setShowRepeat(false);
  }
  return (
    <div className="p-3">
      <div className="flex flex-row justify-between items-center bg-white   sticky top-0 left-0">
        <Goback />
        <img
          src="/images/three-dots-grey.png"
          className="h-6 cursor-pointer"
          alt=""
        />
      </div>

      <div className=" bg-gray-200 rounded-2xl py-1 px-4 text-gray-800 my-4   text-center w-fit">
        hello
      </div>

      <div className="font-bold text-[20px] mb-3">All item</div>

      <div className="flex flex-col ">
        <hr className="border-t-[1px] border-gray-500 my-1" />
        <div className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 ">
          <div className="flex flex-row items-center">
            <img className="mr-4 h-10" src="/images/task-calendar.png" alt="" />
            <div>Due Date</div>
          </div>

          <div className="date bg-gray-200 text-gray-600  rounded-2xl py-2 px-3 ">
            11/11/2025
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 ">
          <div
            onClick={() => setShowTime(true)}
            className="flex flex-row items-center"
          >
            <img className="mr-4 h-10" src="/images/time.png" alt="" />
            <div>Task & Reminder</div>
          </div>

          <div className="bg-gray-200 text-gray-600  rounded-2xl py-2 px-4">
            {taskTime || "No Time"}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 ">
          <div
            onClick={() => setShowRepeat(true)}
            className="flex flex-row items-center"
          >
            <img className="mr-4 h-10" src="/images/repeat.png" alt="" />
            <div>Repeat Task</div>
          </div>

          <div className="bg-gray-200 text-gray-600  rounded-2xl py-2 px-4">
            No
          </div>
        </div>
        <div
          onClick={() => setShowNotes(true)}
          className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 "
        >
          <div className="flex flex-row items-center">
            <img className="mr-4 h-10" src="/images/feedback-grey.png" alt="" />
            <div>Notes</div>
          </div>

          <div className="date">ADD</div>
        </div>
      </div>

      {showRepeat && (
        <div
          onClick={onCancel}
          className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-3 w-[90%] bg-white rounded-2xl "
          >
            <h1 className="font-bold mb-3">Set as Repeat Task</h1>

            <div className="flex flex-row items-center   overflow-x-auto ">
              {/* <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded m-2">
                None
              </div>
              <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded m-2">
                Daily
              </div>
              <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded m-2">
                Weekly
              </div>
              <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded m-2">
                Monthly
              </div>
              <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded m-2">
                Yearly
              </div> */}
              {repeatOpts.map((repeatOpt, index) => (
                <div key={index}>
                  <div
                    onClick={() => setActiveRepeat(index)}
                    className={`bg-gray-200 text-gray-600 px-4 py-2 rounded m-2 ${
                      activeRepeat === index ? "repeatActive" : ""
                    }`}
                  >
                    {repeatOpt}
                  </div>
                </div>
              ))}
            </div>
            <FinalBtns
              onSave={onSave}
              onCancel={onCancel}
              confirmText="DONE"
              cancelText="CANCEL"
            />
          </div>
        </div>
      )}
      {showNotes && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-100 ">
          <div className="bg-white w-full h-full p-3">
            <button onClick={() => setShowNotes(false)} className="my-2">
              <img className="h-6" src="/images/back arrow.png" alt="" />
            </button>

            <div className="font-bold text-[20px] mb-3">All item</div>
            <textarea
              rows="6
          "
              autoFocus
              className=" w-full  border-none outline-none"
              placeholder="Add Notes "
            ></textarea>
          </div>
        </div>
      )}

      {showTime && (
        <div className="timeModal fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center">
          <div className="timeModalCont w-[80%] bg-white rounded-2xl p-3 ">
            <div className="font-bold text-gray-700 text-[20px]">Set Time</div>

            <div className="flex flex-col   ">
              <div className="flex justify-start my-4 ">
                {/* <input
                  type="time"
                  value={taskTime}
                  onChange={(e) => setTaskTime(e.target.value)}
                  className="bg-gray-200 text-gray-700 rounded-[8px] py-2 px-4 outline-none"
                /> */}

                <StyledTimePicker
                  taskTime={taskTime}
                  setTaskTime={setTaskTime}
                />
              </div>
            </div>
            <FinalBtns
              onSave={onSave}
              onCancel={onCancel}
              confirmText="DONE"
              cancelText="CANCEL"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPage;
