import { useEffect, useState } from "react";
import Goback from "./Goback";
import Task from "../Components/Task";
import DeleteTask from "../Components/DeleteTask";

function Completed({ activeCategory, taskList }) {
  const [groupedTasks, setGroupedTasks] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Close modal
  const onCancel = () => setShowDeleteModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  // Group completed tasks by date whenever taskList or activeCategory changes
  useEffect(() => {
    if (!taskList) return;

    const completedTasks = Object.values(taskList)
      .flat()
      .filter(
        (task) =>
          task.completed &&
          (!activeCategory || task.categoryId === activeCategory)
      );

    const groups = completedTasks.reduce((acc, task) => {
      const dateObj = new Date(task.completedAt);
      const date =
        dateObj.getFullYear() +
        "-" +
        String(dateObj.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(dateObj.getDate()).padStart(2, "0");

      if (!acc[date]) acc[date] = [];
      acc[date].push(task);
      return acc;
    }, {});

    setGroupedTasks(groups);
  }, [taskList, activeCategory]);

  const dates = Object.keys(groupedTasks).sort().reverse();

  return (
    <>
      <div className="completedHeader">
        <div className="flex flex-row items-center ">
          <Goback />
          <div className="completedTime ml-3">Completed Tasks</div>
        </div>

        <img
          onClick={() => setShowDeleteModal(true)}
          src="/images/bin.png"
          className="h-5 cursor-pointer"
          alt="Delete All"
        />
      </div>

      <div className="mt-4">
        {dates.length === 0 && (
          <p className="text-center text-gray-400">No completed tasks yet.</p>
        )}

        {dates.map((date) => (
          <div key={date} className="mb-6">
            <div className="text-gray-700 pl-3 font-bold mb-2">
              {(() => {
                const [y, m, d] = date.split("-");
                return new Date(y, m - 1, d).toDateString();
              })()}
            </div>

            <Task
              taskList={groupedTasks[date]}
              goTaskPage={() => {}}
              openDeleteModal={() => {}}
            />
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <DeleteTask
          onCancel={onCancel}
          closeDeleteModal={closeDeleteModal}
          DeleteHeader="Delete All completed tasks?"
        />
      )}
    </>
  );
}

export default Completed;
