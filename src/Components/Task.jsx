function Task({ taskList }) {
  // const filteredTasks = taskList.filter(
  //   (task) => task.category === activeCategory
  // );

  return (
    <ul className="taskList w-full">
      {taskList.map((task) => (
        <li
          key={task.id}
          className="taskItem flex flex-row  w-full justify-between items-center p-4 m-2 bg-gray-100/50 rounded"
        >
          <div className="flex flex-row">
            <div className="h-5 w-5 rounded-full border-2 border-gray-700 mr-4">
              <img src="" alt="" />
            </div>
            <div className="text-gray-800">{task.text}</div>
          </div>

          <div className="cursor-pointer flex items-center flex-col">
            <img src="/images/bin-red.png" className="h-6" alt="" />
            <p className="text-sm text-gray-600">delete</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Task;
