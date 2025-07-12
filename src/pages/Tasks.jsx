// import styles from "./Tasks.module.css";
import AddTask from "../Components/AddTask";
import FootNav from "../Components/FootNav";
import TaskCategory from "../Components/TaskCategory";
function Tasks() {
  return (
    <>
      {/* <h1 className={`${styles.headName} `}>tasks</h1> */}
      <TaskCategory />
      <div className="taskImgCont">
        <img src="/images/meditation.png" alt="" />
      </div>
      <AddTask />
      <FootNav />
    </>
  );
}

export default Tasks;
