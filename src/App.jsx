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

// import LoadPage from "./pages/LoadPage";
// import Theme from "./pages/Theme";

function App() {
  const DEFAULT_CATEGORIES = [
    {
      id: 0,
      name: "All",
      img: "/images/personal.png",
      number: 0,
      deletable: false,
      isDefault: true,
    },

    {
      id: 1,
      name: "Birthdays",
      img: "/images/birthday.png",
      number: 0,
      deletable: true,
      isDefault: true,
    },
    {
      id: 2,
      name: "Work",
      img: "/images/work.png",
      number: 0,
      deletable: true,
      isDefault: true,
    },
    {
      id: 3,
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

  useEffect(() => {
    const storable = categories.filter(
      (cat) => !DEFAULT_CATEGORIES.some((def) => def.id === cat.id)
    );

    localStorage.setItem("categories", JSON.stringify(storable));
  }, [categories]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/completed" element={<Completed />} />
        <Route path="/d" element={<CompletedLink />} />
        <Route
          path="/"
          element={
            <Tasks categories={categories} setCategories={setCategories} />
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
        <Route path="/Calendar" element={<Calendar />} />
        <Route
          path="/Tasks"
          element={
            <Tasks categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/SoundSetting" element={<SoundSetting />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
