import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import CompletedLink from "./Components/CompletedLink";
import Calendar from "./pages/Calendar";
import Completed from "./pages/Completed";
import Tasks from "./pages/Tasks";
import ManageCategories from "./pages/ManageCategories";
import "./i18";
import Settings from "./pages/Settings";
import Faq from "./pages/Faq";
import SoundSetting from "./pages/SoundSetting";

// import TaskTemplates from "./pages/TaskTemplates";
import Donate from "./pages/Donate";

import User from "./pages/User";
import TaskPage from "./pages/TaskPage";

// import LoadPage from "./pages/LoadPage";
// import Theme from "./pages/Theme";

function App() {
  const DEFAULT_CATEGORIES = [
    {
      id: 0.0,
      name: "All",
      img: "/images/personal.png",
      number: 0,
      deletable: false,
      isDefault: true,
    },

    {
      id: 1.0,
      name: "Birthdays",
      img: "/images/birthday.png",
      number: 0,
      deletable: true,
      isDefault: true,
    },
    {
      id: 2.0,
      name: "Work",
      img: "/images/work.png",
      number: 0,
      deletable: true,
      isDefault: true,
    },
    {
      id: 3.0,
      name: "Personal",
      img: "/images/sittingLady.png",
      number: 0,
      deletable: true,
      isDefault: true,
    },
  ];

  const [categories, setCategories] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("categories"));
    return Array.isArray(saved)
      ? [...DEFAULT_CATEGORIES, ...saved]
      : DEFAULT_CATEGORIES;
  });
  const [showInput, setShowInput] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  // const [completedTasks, setCompletedTasks] = useState(() => {
  //   const saved = localStorage.getItem("completedTasks");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  // }, [completedTasks]);

  useEffect(() => {
    const storable = categories.filter(
      (cat) => !DEFAULT_CATEGORIES.some((def) => def.id === cat.id)
    );

    localStorage.setItem("categories", JSON.stringify(storable));
  }, [categories]);
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const [activeCategory, setActiveCategory] = useState(() => {
    const saved = localStorage.getItem("activeCategory");
    const parsed = Number(saved);
    return Number.isNaN(parsed) ? 0 : parsed;
  });

  function updateTaskInList(id, newText) {
    setTaskList((prev) => {
      const updatedCategoryTasks = prev[activeCategory].map((task) =>
        task.id === id ? { ...task, text: newText } : task
      );

      return {
        ...prev,
        [activeCategory]: updatedCategoryTasks,
      };
    });
  }

  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      categoryId: activeCategory,
      createdAt: Date.now(),
    };

    const updatedTaskList = {
      ...taskList,
      [activeCategory]: taskList[activeCategory]
        ? [newTask, ...taskList[activeCategory]]
        : [newTask],
    };

    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
    setShowInput(false);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/completed"
          element={
            <Completed
              activeCategory={activeCategory}
              taskList={taskList}
              activeTask={activeTask}
              setTaskList={setTaskList}
            />
          }
        />
        <Route path="/d" element={<CompletedLink />} />
        <Route
          path="/"
          element={
            <Tasks
              categories={categories}
              setCategories={setCategories}
              activeCategory={activeCategory}
              addTask={addTask}
              setActiveCategory={setActiveCategory}
              taskList={taskList}
              // completedTasks={completedTasks}
              // setCompletedTasks={setCompletedTasks}
              showInput={showInput}
              setShowInput={setShowInput}
              setTaskList={setTaskList}
              activeTask={activeTask}
              setActiveTask={setActiveTask}
            />
          }
        />
        <Route
          path="/ManageCategories"
          element={
            <ManageCategories
              categories={categories}
              setCategories={setCategories}
            />
          }
        />
        <Route
          path="/Calendar"
          element={
            <Calendar
              categories={categories}
              activeCategory={activeCategory}
              addTask={addTask}
              showInput={showInput}
              setShowInput={setShowInput}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          }
        />
        <Route
          path="/Tasks"
          element={
            <Tasks
              categories={categories}
              setCategories={setCategories}
              activeCategory={activeCategory}
              addTask={addTask}
              setActiveCategory={setActiveCategory}
              taskList={taskList}
              showInput={showInput}
              // completedTasks={completedTasks}
              // setCompletedTasks={setCompletedTasks}
              setShowInput={setShowInput}
              setTaskList={setTaskList}
              activeTask={activeTask}
              setActiveTask={setActiveTask}
            />
          }
        />
        <Route path="/Settings" element={<Settings />} />
        <Route
          path="/TaskPage"
          element={
            <TaskPage
              activeCategory={activeCategory}
              categories={categories}
              taskList={taskList}
              setTaskList={setTaskList}
              activeTask={activeTask}
              setActiveTask={setActiveTask}
              updateTaskInList={updateTaskInList}
            />
          }
        />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/SoundSetting" element={<SoundSetting />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
