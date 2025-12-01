import React from "react";
import SubmissionBtns from "./SubmissionBtns";

const DeleteTask = ({
  closeDeleteModal,
  onCancel,
  onConfirm,
  DeleteHeader,
}) => {
  return (
    <div
      onClick={closeDeleteModal}
      className="deleteTaskModal fixed top-0 right-0 left-0 bottom-0 bg-black/50 flex items-center justify-center z-100"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="deleteModalCont bg-white w-[80%] rounded-2xl p-4"
      >
        <div className="font-bold mb-3 ">{DeleteHeader} </div>
        <div className="flex flex-row p-3 justify-end">
          <div
            onClick={onCancel}
            className="cursor-pointer text-blue-500/50 font-bold mr-4"
          >
            CANCEL
          </div>
          <div
            onClick={onConfirm}
            className="cursor-pointer text-blue-600 font-bold mr-2"
          >
            DELETE
          </div>
        </div>
        {/* <SubmissionBtns onCancel={onCancel} onSave={onSave} /> */}
      </div>
    </div>
  );
};

export default DeleteTask;
