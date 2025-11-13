import { useState, useEffect, useRef } from "react";
import Goback from "./Goback";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const ManageCategories = () => {
  const initialCategories = [
    { id: 1, name: "All", number: 0 },
    { id: 2, name: "work", number: 0 },
    { id: 3, name: "Birthday", number: 0 },
  ];

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategories(items);
  };

  const [categories, setCategories] = useState(initialCategories);

  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenuId(null);
        event.stopPropagation();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenuId]);

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

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    setActiveMenuId(null);
  };
  return (
    <div>
      <div className="manCatHeaders">
        <div className="manageCatHeader  flex  justify-center  ">
          <Goback className={`manArrow`} />

          <div className="mTitle font-bold text-2xl ">Manage Categories</div>
        </div>
        <div className="secondHeader text-gray-600 text-center ">
          Categories displayed on the homePage
        </div>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="categories">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {categories.map((category, index) => (
                <Draggable
                  key={category.id}
                  draggableId={String(category.id)}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="catListItem"
                      key={category.id}
                    >
                      <div className="catItemCont flex flex-row">
                        <span className="catItemName">{category.name}</span>
                        <span>{category.number}</span>
                      </div>

                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveMenuId(
                            activeMenuId === category.id ? null : category.id
                          );
                        }}
                        className="relative"
                      >
                        <img
                          className="cursor-pointer h-6"
                          src="/images/three-dots-grey.png"
                          alt=""
                        />

                        {activeMenuId === category.id && (
                          <div className="editModalOverlay">
                            <div
                              ref={menuRef}
                              className=" editCont absolute top-14   right-4  w-auto bg-white border  border-gray-200 rounded-lg shadow-lg z-10 "
                            >
                              <ul>
                                <li className="editDropdown">Edit</li>

                                <li
                                  onClick={() => deleteCategory(category.id)}
                                  className="editDropdown"
                                >
                                  Delete
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="categoriesCont">
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
        <div className="modalOverlay" onClick={() => setShowModal(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={addCategory} className="catForm">
              <div className="formHeader">Create new Category</div>
              <textarea
                type="text"
                placeholder="Input here"
                onChange={(e) => setNewCategory(e.target.value)}
                value={newCategory}
                className="catInput"
                autoFocus
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

      <div className="deleteCatModalOverlay flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 bg-blue-200">
        <div className="delCatModalCont flex flex-col w-[80%]  rounded-2xl  bg-white justify-center items-start p-6">
          <div className="delCatHeader">Delete the Category ?</div>
          <p className="text-blue-500">
            All tasks in this category will be deleted
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
