function AddTask({ onClick }) {
  return (
    <>
      <div className="addTaskCont" onClick={onClick}>
        <div className="addTask">
          <img src="/images/plus-white.png" alt="" className="h-8" />
        </div>
      </div>
    </>
  );
}

export default AddTask;
