import { useState, useRef, useEffect } from "react";

function TaskCategory() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="taskCategoryCont">
        <div className="taskCont">All</div>
        <div className="taskCont">Work</div>
        <div className="taskCont">Personal</div>
        <div className="taskCont">WishList</div>
        <div className="taskCont">Birthday</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>
        <div className="taskCont">Chores</div>

        <div style={{ minWidth: "3rem" }} />
      </div>
      <div ref={menuRef} onClick={() => setOpen(!open)} className="taskNavImg">
        <img src="/images/three-dots-grey.png" alt="" className="h-10" />
      </div>

      {open && (
        <div className="absolute   right-4 mt-2 w-auto bg-white border  border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button className="dropDownIcon ">Manage Categories</button>
            </li>
            <li>
              <button className="dropDownIcon ">Upgrade to PRO</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default TaskCategory;
