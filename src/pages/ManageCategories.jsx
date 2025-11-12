import { useState } from "react";
import Goback from "./Goback";

const ManageCategories = () => {
  const initialCategories = [
    { id: 1, name: "All", number: 0 },
    { id: 2, name: "work", number: 0 },
    { id: 3, name: "Birthday", number: 0 },
  ];
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false);
  };

  const deleteCategory = () => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };
  return (
    <div>
      <div className="manageCatHeader  flex  justify-center  ">
        <Goback />

        <div className="mTitle font-bold text-2xl ">Manage Categories</div>
      </div>
      <div className="secondHeader text-gray-600 text-center ">
        Categories displayed on the homePage
      </div>
      <div className="categoriesCont">
        <ul>
          {categories.map((category) => (
            <li className="catListItem" key={category.id}>
              <div className="catItemCont flex flex-row">
                <span className="catItemName">{category.name}</span>
                <span>{category.number}</span>
              </div>

              <div>
                <img
                  className="cursor-pointer h-6"
                  src="/images/three-dots-grey.png"
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>

        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="createCategory flex items-center "
        >
          <span className="plusIcon text-blue-500 ">+</span>
          <span className="font-bold text-blue-700">Create New</span>
        </div>
      </div>
      <div className="reorderInfo">Lond press and drag to reorder</div>
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <form onSubmit={addCategory} className="catForm">
              <div className="formHeader">Create new Category</div>
              <textarea
                type="text"
                placeholder="Input here"
                onChange={(e) => setNewCategory(e.target.value)}
                value={newCategory}
                className="catInput"
              />
              <div className=" flex justify-end categoryBtns">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="catBtns catBtnCancel"
                >
                  CANCEL
                </button>
                <button type="submit" className="catBtns catBtnSave">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
