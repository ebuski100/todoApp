// import styles from "./Tasks.module.css";
import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import TaskInput from "../Components/TaskInput";
import { useState, useEffect } from "react";

function Tasks() {
  const [showInput, setShowInput] = useState(false);
  const savedName = localStorage.getItem("userName") || "Guest";

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

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
      <div className="w-full p-2 flex flex-row  justify-between items-center  ">
        <div className=" text-center  font-bold text-blue-500 text-[20px] w-full">
          Welcome {savedName}
        </div>

        {profilePic ? (
          <div className=" w-[50%] flex justify-end">
            <img
              src={profilePic}
              alt="Profile"
              className="w-15 h-15 rounded-full object-cover border border-2 border-gray-700"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <span>No Photo</span>
          </div>
        )}
      </div>
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
