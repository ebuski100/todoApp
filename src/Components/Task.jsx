function Task({ taskList, openDeleteModal, goTaskPage }) {
  return (
    <ul className="taskList w-full">
      {taskList.map((task) => (
        <li
          key={task.id}
          className={`taskItem  flex flex-row  w-full justify-between items-center  m-2 bg-gray-100/50 rounded ${
            task.completed ? "completed-task" : ""
          }`}
        >
          <div className="flex flex-1 p-4   flex-row">
            <div className="h-5 w-5 rounded-full border-2 border-gray-700 mr-4">
              <img src="" alt="" />
            </div>
            <div
              onClick={() => goTaskPage(task)}
              className="text-gray-800 w-[90%]  "
            >
              {task.text.length > 30
                ? task.text.slice(0, 30) + "..."
                : task.text}
            </div>
          </div>

          <div
            onClick={() => openDeleteModal(task.id)}
            className="cursor-pointer flex items-center flex-col w-[50px] pr-2"
          >
            <img src="/images/bin-red.png" className="h-6" alt="" />
            <p className="text-sm text-gray-600">delete</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Task;
