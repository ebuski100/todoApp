import { useEffect, useState } from "react";
import Goback from "./Goback";
import Task from "../Components/Task";
import DeleteTask from "../Components/DeleteTask";
import { useNavigate } from "react-router-dom";

function Completed({ activeCategory, taskList, setTaskList }) {
  const navigate = useNavigate();
  const [groupedTasks, setGroupedTasks] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onCancel = () => setShowDeleteModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const goTaskPage = (task) => {
    navigate("/TaskPage", { state: { task } });
  };

  const deleteAllCompleted = () => {
    setTaskList((prev) => {
      const updated = { ...prev };

      for (const categoryId in updated) {
        if (!activeCategory || String(categoryId) === String(activeCategory)) {
          updated[categoryId] = updated[categoryId].filter(
            (task) => !task.completed
          );
        }
      }

      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });

    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (!taskList) return;

    const completedTasks = Object.values(taskList)
      .flat()
      .filter(
        (task) =>
          task.completed &&
          (!activeCategory ||
            String(task.categoryId) === String(activeCategory))
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
          <div className="completedTime ml-4">Completed Tasks</div>
        </div>

        <img
          onClick={() => setShowDeleteModal(true)}
          src="/images/bin-red.png"
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

            {groupedTasks[date].map((task) => (
              <Task
                key={task.id}
                taskList={[task]}
                // goTaskPage={() => goTaskPage(task)}
                goTaskPage={goTaskPage}
              />
            ))}
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <DeleteTask
          onCancel={onCancel}
          closeDeleteModal={closeDeleteModal}
          DeleteHeader="Delete All completed tasks?"
          onConfirm={deleteAllCompleted}
        />
      )}
    </>
  );
}

export default Completed;
