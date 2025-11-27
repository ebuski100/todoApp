const CreateCategory = ({ addCategory, newCategory, onChange, onClose }) => {
  return (
    <div>
      <div className="modalOverlay" onClick={onClose}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={addCategory} className="catForm">
            <div className="formHeader">Create new Category</div>
            <textarea
              type="text"
              placeholder="Input here"
              onChange={onChange}
              value={newCategory}
              maxLength={30}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              className="catInput"
              autoFocus
            />
            <p className="text-sm text-gray-500">{newCategory.length}/30</p>
            <div className=" flex justify-end categoryBtns">
              <button
                type="button"
                onClick={onClose}
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
    </div>
  );
};

export default CreateCategory;
