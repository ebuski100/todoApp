import { useState, useEffect } from "react";
import CreateCategory from "./CreateCategory";

function CategoryDropdown({ ontap }) {
  const defaultCategories = [
    {
      id: 1,
      name: "All",
      number: 0,
      isDefault: true,
    },
  ];

  const [newCategory, setNewCategory] = useState("");
  const [createNewModal, setCreateNewModal] = useState(false);

  const onClose = () => {
    setCreateNewModal(false);
  };

  const onChange = (e) => setNewCategory(e.target.value);

  const [categories, setCategories] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("categories")) || [];
    return [...defaultCategories, ...stored];
  });

  useEffect(() => {
    const storable = categories.filter((cat) => !cat.isDefault);
    localStorage.setItem("categories", JSON.stringify(storable));
  }, [categories]);

  const [showDropdown, setShowDropdown] = useState(false);
  const addCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() === "") return;

    const newCategoryItem = {
      id: Date.now(),
      name: newCategory.trim(),
      number: 0,
    };
    setCategories([...categories, newCategoryItem]);
    setNewCategory("");
    setCreateNewModal(false);
  };

  return (
    <>
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <div className="   category navItem">
          <div className="category1st">
            <div className="categoryImg">
              <img src="/images/category-blue.png" alt="" />
            </div>
            <div className="categoryText">Category</div>
          </div>

          <div className="categoryDropdown">
            <img src="/images/grey arrow down.png" alt="" />
          </div>
        </div>
        {showDropdown && (
          <div className="w-full bg-white shadow-md  mt-1 ">
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="flex flex-row items-center justify-between p-4 cursor-pointer hover:bg-gray-100 "
              >
                <div
                  onClick={() => {
                    localStorage.setItem("activeCategory", cat.id);
                    window.dispatchEvent(
                      new CustomEvent("categoryChanged", {
                        detail: cat.id,
                      })
                    );
                    ontap();
                  }}
                  className="flex flex-row "
                >
                  <div>
                    <img
                      src="/images/sideNav-note.png"
                      className="h-6 mr-4"
                      alt=""
                    />
                  </div>
                  <div>{cat.name}</div>
                </div>

                <div className="mr-4">{cat.number}</div>
              </div>
            ))}
            <div onClick={(e) => e.stopPropagation()} className="px-4 py-2 ">
              <div
                onClick={() => {
                  setCreateNewModal(true);
                }}
                className="createCategory flex items-center "
              >
                <span className="plusIcon text-blue-500   ">+</span>
                <span className="font-bold text-blue-700 ml-3">Create New</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {createNewModal && (
        <CreateCategory
          addCategory={addCategory}
          newCategory={newCategory}
          onClose={onClose}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default CategoryDropdown;
