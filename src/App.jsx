import { Routes, Route } from "react-router-dom";

// import Category from "./pages/Category";
// import FootNav from "./Components/FootNav";
// import SideNavLogo from "./Components/SideNavLogo";

// import AddTask from "./Components/AddTask";
// import TaskCategory from "./Components/TaskCategory";
import CompletedLink from "./Components/CompletedLink";
import Calendar from "./pages/Calendar";
import Completed from "./pages/Completed";
import Tasks from "./pages/Tasks";
import ManageCategories from "./pages/ManageCategories";
import "./i18";
import Settings from "./pages/Settings";
import Faq from "./pages/Faq";
import SoundSetting from "./pages/SoundSetting";
// import SideNavLogo from "./Components/SideNavLogo";

// import TaskTemplates from "./pages/TaskTemplates";
import Donate from "./pages/Donate";

// import LoadPage from "./pages/LoadPage";
// import Theme from "./pages/Theme";

function App() {
  return (
    <div className="app-container">
      {/* <SideNavLogo /> */}

      {/* <FootNav /> */}
      {/* <LoadPage /> */}
      {/* <Theme /> */}
      {/* <Completed /> */}
      {/* <Tasks /> */}
      {/* <TaskCategory /> */}
      {/* <Calendar /> */}
      {/* <AddTask /> */}
      {/* <CompletedLink /> */}
      {/* <TaskTemplates /> */}
      {/* <Donate /> */}

      <Routes>
        <Route path="/completed" element={<Completed />} />
        <Route path="/d" element={<CompletedLink />} />
        <Route path="/" element={<Tasks />} />
        <Route path="/ManageCategories" element={<ManageCategories />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/SoundSetting" element={<SoundSetting />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
