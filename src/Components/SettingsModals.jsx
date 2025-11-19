import React from "react";
import { useRef } from "react";
const SettingsModals = ({
  title,
  options = [],
  value,
  onSelect,
  onSave,
  onClose,
}) => {
  const modalRef = useRef(null);
  //   const handleOverlayClick = (e) => {
  //     if (e.target === e.currentTarget) {
  //       onClose();
  //     }
  //   };

  const handleOverlayClick = () => {
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[70%] p-4 rounded-2xl"
      >
        <h1 className="font-bold mb-2">{title}</h1>

        {/* Radio Options */}
        {options.map((opt) => (
          <label key={opt} className="py-3 flex flex-row">
            <input
              type="radio"
              name={title}
              className="mr-4"
              checked={value === opt}
              onChange={() => onSelect(opt)}
            />
            {opt}
          </label>
        ))}

        <div className="text-right mt-4">
          <button className="mr-4 font-bold text-blue-300/80" onClick={onClose}>
            CANCEL
          </button>

          <button className="font-bold text-blue-500" onClick={onSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModals;
