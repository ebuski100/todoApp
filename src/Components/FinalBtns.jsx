const FinalBtns = ({ onSave, onCancel, cancelText, confirmText }) => {
  return (
    <div className="flex flex-row p-3 justify-end">
      <div
        id="cancel"
        onClick={onCancel}
        className="cursor-pointer text-blue-500/50 font-bold mr-4"
      >
        {cancelText}
      </div>
      <div
        onClick={onSave}
        className="cursor-pointer text-blue-600 font-bold mr-2"
      >
        {confirmText}
      </div>
    </div>
  );
};

export default FinalBtns;
