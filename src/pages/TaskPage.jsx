import React, { useState, useEffect, useRef } from "react";
import Goback from "./Goback";
import FinalBtns from "../Components/FinalBtns";
import StyledTimePicker from "../Components/StyledTimePicker";
import DeleteTask from "../Components/DeleteTask";
import { useNavigate } from "react-router-dom";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import Task from "../Components/Task";

const TaskPage = ({
  categories,

  activeCategory,
  setTaskList,

  activeTask,
  setActiveTask,
  updateTaskInList,
  dueDate,
  setDueDate,
  tempDueDate,
  setTempDueDate,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [toast, setToast] = useState(null);
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("task-notes") || "";
  });
  const [showRepeat, setShowRepeat] = useState(false);
  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const repeatOptions = ["None", "Daily", "Weekly", "Monthly", "Yearly"];

  const [activeRepeat, setActiveRepeat] = useState("None");
  const [showTime, setShowTime] = useState(false);
  const [taskTime, setTaskTime] = useState(() => {
    return localStorage.getItem("task-time") || "";
  });

  // const [dueDate, setDueDate] = useState(() => {
  //   return localStorage.getItem("task-dueDate") || "";
  // });

  // const [tempDueDate, setTempDueDate] = useState(() => {
  //   if (!dueDate) return new Date();
  //   return new Date(dueDate);
  // });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const [repeatOpts, setRepeatOpt] = useState(() => {
    return localStorage.getItem("repeat-opt") || "";
  });
  const [tempRepeat, setTempRepeat] = useState("");

  const [tempTime, setTempTime] = useState("");
  const [showCalendar, setShowCalender] = useState(false);

  const textAreaRef = useRef(null);

  const menuRef = useRef(null);
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 1000);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const len = textAreaRef.current.value.length;
      textAreaRef.current.setSelectionRange(len, len);
      textAreaRef.current.focus();
    }
  }, []);

  function openTimeModal() {
    setTempTime(taskTime);
    setShowTime(true);
  }

  function goTask() {
    navigate("/Tasks");
  }
  function updateTaskText(newText) {
    activeTask.text = newText;

    localStorage.setItem("task-" + activeTask.id, newText);

    if (typeof updateTaskInList === "function") {
      updateTaskInList(activeTask.id, newText);
    }
  }

  function onSave(action) {
    if (action === "saveTime") {
      setTaskTime(tempTime);
      setShowTime(false);
      localStorage.setItem("task-time", tempTime);
    }
    if (action === "saveRepeat") {
      setRepeatOpt(tempRepeat);
      localStorage.setItem("repeat-opt", tempRepeat);
      setShowRepeat(false);
    }
    if (action === "saveNotes") {
      localStorage.setItem("task-notes", notes);
      setShowNotes(false);
    }
  }

  function onCancel(action) {
    if (action === "closeRepeat") {
      setTempRepeat("");
      setShowRepeat(false);
    }
    if (action === "closeTime") {
      setTempTime("");
      setShowTime(false);
    }

    if (action === "closeCalendar") {
      setShowCalender(false);
    }
  }

  const markTaskDone = (taskId) => {
    let taskWasCompleted = activeTask?.completed;

    setTaskList((prev) => {
      const updated = { ...prev };

      for (const category in updated) {
        updated[category] = updated[category].map((task) =>
          task.id === taskId
            ? {
                ...task,
                completed: !task.completed,
                completedAt: !task.completed ? new Date().toISOString() : null,
              }
            : task
        );
      }

      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });

    setActiveTask((prev) =>
      prev && prev.id === taskId
        ? {
            ...prev,
            completed: !prev.completed,
            completedAt: !prev.completed ? new Date().toISOString() : null,
          }
        : prev
    );
    setOpen(false);

    showToast(
      taskWasCompleted ? "Task marked as undone!" : "Task marked as done!"
    );
  };

  useEffect(() => {
    if (!activeTask) {
      const saved = localStorage.getItem("activeTask");
      if (saved) {
        const parsed = JSON.parse(saved);

        updateTaskInList(parsed.id, parsed.text);
        setActiveTask(parsed);
      }
    }
  }, [activeTask, setActiveTask]);

  function formatTime(time) {
    if (!time) return "";

    const [hour, minute] = time.split(":");
    const h = parseInt(hour);
    const suffix = h >= 12 ? "PM" : "AM";
    const formattedHour = ((h + 11) % 12) + 1;

    return `${formattedHour}:${minute} ${suffix}`;
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function openDeleteModal(taskId) {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  }

  function closeDeleteModal() {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  }

  const deleteTask = (taskId) => {
    setTaskList((prev) => {
      const updated = { ...prev };

      for (const category in updated) {
        updated[category] = updated[category].filter(
          (task) => task.id !== taskId
        );
      }

      return updated;
    });

    closeDeleteModal();
    goTask();
  };

  return (
    <div className="p-3">
      <div className="flex flex-row justify-between items-center bg-white   sticky top-0 left-0">
        <Goback />

        <div ref={menuRef}>
          <div onClick={() => setOpen(!open)}>
            <img
              src="/images/three-dots-grey.png"
              className="h-6 cursor-pointer"
              alt=""
            />
          </div>

          {open && (
            <div className="absolute top-14   right-4  w-auto bg-white border  border-gray-200 rounded-lg shadow-lg z-10 ">
              <ul className="py-1">
                <li onClick={() => markTaskDone(activeTask.id)}>
                  <button className="dropDownIcon ">
                    {activeTask?.completed ? "Mark as Undone" : "Mark as Done"}
                  </button>
                </li>
                <li onClick={() => openDeleteModal(activeTask.id)}>
                  <button className="dropDownIcon ">Delete </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          activeTask?.completed
            ? "completed-task pointer-events-none opacity-50"
            : ""
        }`}
      >
        <div className=" bg-gray-200 rounded-2xl py-1 px-4 text-gray-800 my-4   text-center w-fit">
          {currentCategory.name}
        </div>

        {activeTask && (
          <div className="taskTextContainer my-2">
            <textarea
              ref={textAreaRef}
              className={`text-lg w-full font-bold m-2 break-words whitespace-normal p-2 outline-none ${
                activeTask?.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
              value={activeTask.text}
              onChange={(e) => updateTaskText(e.target.value)}
              readOnly={activeTask?.completed}
            />
          </div>
        )}

        <div className="flex flex-col ">
          <hr className="border-t-[1px] border-gray-500 my-1" />
          <div
            onClick={() => setShowCalender(true)}
            className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 "
          >
            <div className="flex flex-row items-center">
              <img
                className="mr-4 h-10"
                src="/images/task-calendar.png"
                alt=""
              />
              <div>Due Date</div>
            </div>

            <div className="date bg-gray-200 text-gray-600  rounded-2xl py-2 px-3 ">
              {dueDate ? new Date(dueDate).toLocaleDateString() : "No Due Date"}
            </div>
          </div>
          <div
            onClick={openTimeModal}
            className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 "
          >
            <div className="flex flex-row items-center">
              <img className="mr-4 h-10" src="/images/time.png" alt="" />
              <div>Task & Reminder</div>
            </div>

            <div className="bg-gray-200 text-gray-600  rounded-2xl py-2 px-4">
              {taskTime ? formatTime(taskTime) : "No Time"}
            </div>
          </div>
          <div
            onClick={() => setShowRepeat(true)}
            className="flex flex-row justify-between items-center px-2 py-4 border-b border-gray-600 "
          >
            <div className="flex flex-row items-center">
              <img className="mr-4 h-10" src="/images/repeat.png" alt="" />
              <div>Repeat Task</div>
            </div>

            <div className="bg-gray-200 text-gray-600  rounded-2xl py-2 px-4">
              {repeatOpts || "None"}
            </div>
          </div>

          <div
            onClick={() => setShowNotes(true)}
            className="flex flex-row justify-between items-center py-4 border-b border-gray-600 px-2  "
          >
            <div className="flex flex-row items-center">
              <img
                className="mr-4 h-10"
                src="/images/feedback-grey.png"
                alt=""
              />
              <div>
                <div>Notes</div>
                <div className="p-1 text-sm text-gray-600 w-[200px]  break-words whitespace-normal">
                  {notes
                    ? notes.substring(0, 30) + (notes.length > 30 ? "..." : "")
                    : ""}
                </div>
              </div>
            </div>

            <div className="date">
              {notes && notes.trim() !== "" ? "EDIT" : "ADD"}
            </div>
          </div>
        </div>
      </div>
      {showCalendar && (
        <div
          onClick={() => onCancel("closeCalendar")}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="calendarContainer rounded-2xl "
          >
            <div className="my-10">
              <CalendarLib
                onChange={(date) => setTempDueDate(date)}
                value={tempDueDate}
              />
            </div>
            <FinalBtns
              confirmText="DONE"
              cancelText="CANCEL"
              onCancel={() => onCancel("closeCalendar")}
              onSave={() => {
                const formatted = tempDueDate.toLocaleDateString();
                const isoDate = tempDueDate.toISOString().split("T")[0];
                setDueDate(formatted);
                localStorage.setItem("task-dueDate", isoDate);
                setShowCalender(false);
              }}
            />
          </div>
        </div>
      )}

      {showRepeat && (
        <div
          onClick={() => onCancel("closeRepeat")}
          className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-3 w-[90%] bg-white rounded-2xl "
          >
            <h1 className="font-bold mb-3">Set as Repeat Task</h1>

            <div className="flex flex-row items-center   overflow-x-auto ">
              {repeatOptions.map((repeatOpt, index) => (
                <div key={index}>
                  <div
                    onClick={() => {
                      setActiveRepeat(index);
                      setTempRepeat(repeatOptions[index]);
                    }}
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
              onSave={() => onSave("saveRepeat")}
              onCancel={() => onCancel("closeRepeat")}
              confirmText="DONE"
              cancelText="CANCEL"
            />
          </div>
        </div>
      )}
      {showNotes && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-100 ">
          <div className="bg-white w-full h-full p-3">
            <button onClick={() => onSave("saveNotes")} className="my-2">
              <img className="h-6" src="/images/back arrow.png" alt="" />
            </button>
            <div className="flex flex-row items-center  justify-between">
              <div className="font-bold text-[20px] my-3">All item</div>
              <p className="text-sm text-gray-500 text-end">
                {notes.length}/200
              </p>
            </div>
            <textarea
              rows="6
          "
              autoFocus
              className=" w-full  border-none outline-none"
              placeholder="Add Notes "
              value={notes}
              onChange={(e) => {
                if (e.target.value.length <= 200) {
                  setNotes(e.target.value);
                }
              }}
            ></textarea>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <DeleteTask
          DeleteHeader="Delete task?"
          closeDeleteModal={closeDeleteModal}
          onConfirm={() => deleteTask(taskToDelete)}
          onCancel={closeDeleteModal}
        />
      )}

      {toast && (
        <div className="fixed bottom-8 right-[30%] bg-black/50 text-white px-4 py-2 rounded shadow-lg transition-all">
          {toast}
        </div>
      )}

      {showTime && (
        <div className="timeModal fixed top-0 left-0 bottom-0 right-0 bg-black/80 flex justify-center items-center">
          <div
            onClick={(e) => e.stopPropagation()}
            className="timeModalCont w-[80%] bg-white rounded-2xl p-3 "
          >
            <div className="font-bold text-gray-700 text-[20px]">Set Time</div>

            <div className="flex flex-col   ">
              <div className="flex justify-start my-4 ">
                <StyledTimePicker
                  taskTime={tempTime}
                  setTaskTime={setTempTime}
                  formatTime={formatTime}
                />
              </div>
            </div>
            <FinalBtns
              onSave={() => onSave("saveTime")}
              onCancel={() => {
                setTempTime(taskTime);
                onCancel("closeTime");
              }}
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
