import { useRef, useEffect } from "react";

function TaskCategory({
  categories,
  setCategories,
  activeCategory,
  setActiveCategory,
}) {
  const categoryRefs = useRef({});

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
  useEffect(() => {
    const el = categoryRefs.current[activeCategory];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [activeCategory]);
  return (
    <>
      {/* <div className="taskCategoryCont">
        {categories.map((category) => (
          <div key={category.id}>
            <div
              ref={(el) => (categoryRefs.current[category.id] = el)}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              className={`taskCont ${
                activeCategory === category.id ? "active" : ""
              } whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {category.name}
            </div>
          </div>
        ))}

        <div style={{ minWidth: "3rem" }} />
      </div> */}

      {currentCategory && (
        <div>
          <div className="w-full p-2 flex flex-row  justify-between  ">
            <div className=" text-center  font-bold text-blue-500 text-[20px] w-full">
              Welcome {savedName}
            </div>
          </div>
          <div className="taskImgCont ">
            <img src={currentCategory.img} alt="" className=" w-full my-10" />
            <div className="taskImgtext">
              No task in {currentCategory.name}. <br />
              Click + to create your task
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskCategory;
