import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
import AddTask from "../Components/AddTask";

const Work = () => {
  return (
    <>
      <TaskCategory />
      <div className="taskImgCont">
        <img src="/images/meditation.png" alt="" />
        <div className="taskImgtext">
          No task in this category. <br />
          Click + to create your task
        </div>
      </div>
      <AddTask />
      <FootNav />
    </>
  );
};

export default Work;
