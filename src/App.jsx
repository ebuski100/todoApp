import { Routes, Route } from "react-router-dom";

// import Category from "./pages/Category";
// import FootNav from "./Components/FootNav";
// import SideNavLogo from "./Components/SideNavLogo";

// import AddTask from "./Components/AddTask";
// import TaskCategory from "./Components/TaskCategory";
import CompletedLink from "./Components/CompletedLink";
// import Calendar from "./pages/Calendar";
import Completed from "./pages/Completed";
import Tasks from "./pages/Tasks";

// import TaskTemplates from "./pages/TaskTemplates";
// import Donate from "./pages/Donate";

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
      </Routes>
    </div>
  );
}

export default App;
