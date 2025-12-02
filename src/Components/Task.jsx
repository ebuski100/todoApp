function Task({
  taskList,
  task,
  openDeleteModal,
  goTaskPage,
  toggleCompletion,
}) {
  const tasks = taskList || (task ? [task] : []);

  return (
    <ul className="taskList w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`taskItem  flex flex-row  w-full justify-between items-center  m-2 bg-gray-100/50 rounded ${
            task.completed ? "completed-task" : ""
          } `}
        >
          <div className="flex flex-1 p-4   flex-row">
            <div
              onClick={toggleCompletion}
              className={`relative h-6 w-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-1000
                
    ${
      task.completed
        ? "bg-green-500 border-green-500 pop-animation glow-animation"
        : "border-gray-600 bg-white"
    } border-2
  `}
            >
              <svg
                className={`w-4 h-4 text-white transition-all duration-300 
      ${
        task.completed
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-50 -rotate-45"
      }
    `}
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div
              onClick={() => goTaskPage(task)}
              className={`ml-4 text-gray-800 w-[90%] ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.text.length > 30
                ? task.text.slice(0, 30) + "..."
                : task.text}
            </div>
          </div>
          {!task.completed && (
            <div
              onClick={() => openDeleteModal(task.id)}
              className="cursor-pointer flex items-center flex-col w-[50px] pr-2"
            >
              <img src="/images/bin-red.png" className="h-6" alt="" />
              <p className="text-sm text-gray-600">delete</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Task;
