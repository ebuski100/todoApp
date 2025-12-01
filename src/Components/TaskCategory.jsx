import { useEffect } from "react";

function TaskCategory({
  categories,
  setCategories,
  activeCategory,
  setActiveCategory,
}) {
  useEffect(() => {
    const handleCategoryChange = (e) => {
      setActiveCategory(e.detail);
    };

    window.addEventListener("categoryChanged", handleCategoryChange);

    return () => {
      window.removeEventListener("categoryChanged", handleCategoryChange);
    };
  }, []);

  const savedName = localStorage.getItem("userName") || "Guest";

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = localStorage.getItem("categories");
      if (updated) setCategories(JSON.parse(updated));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [setCategories]);

  return (
    <>
      {currentCategory && (
        <div>
          <div className=" text-center    font-bold text-blue-500 text-[20px] w-full">
            Welcome {savedName}
          </div>

          <div className="taskImgCont ">
            <img src={currentCategory.img} alt="" className=" w-full my-6 " />
            <div className="taskImgtext">
              No active tasks in {currentCategory.name}. <br />
              Click + to add your task
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskCategory;
