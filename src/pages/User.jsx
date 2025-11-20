import React, { useEffect, useRef, useState } from "react";
import Goback from "./Goback";

const User = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteProfileM, setShowDeleteProfileM] = useState(false);
  const [showDeleteAccountM, setShowDeleteAccountM] = useState(false);

  const [name, setName] = useState("");

  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  function closeDelAccModal() {
    setShowDeleteAccountM(false);
  }

  function closeDeleteProfileM() {
    setShowDeleteProfileM(false);
  }

  function closeEmailModal() {
    setShowEmailModal(false);
  }
  function closePasswordModal() {
    setShowPasswordModal(false);
  }
  useEffect(() => {
    const savedImage = localStorage.getItem("profilePic");
    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);

    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);

      localStorage.setItem("profilePic", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeProfilePic = () => {
    localStorage.removeItem("profilePic");
    setPreview(null);
    setShowDeleteProfileM(false);
  };
  return (
    <div>
      <div className="sticky  p-3 bg-white top-0 left-0 w-full flex flex-row">
        <Goback />
        <p className="font-bold text-1.2xl ml-4">Account</p>
      </div>
      <div className="h-[200px]  flex flex-row p-3">
        <div className="w-[120px]    p-2">
          <p className=" mb-2 font-bold text-1.5xl">Photo</p>

          {preview ? (
            <img
              className="h-24 w-24 rounded-full object-cover "
              src={preview}
              alt="profile"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              No Pfp
            </div>
          )}
        </div>
        <div className=" w-[60%] p-2">
          <div className="flex flex-col ">
            <button
              disabled={!preview}
              onClick={() => setShowDeleteProfileM(true)}
              className={`w-[200px] border-2 rounded-2xl font-bold m-2 p-2
    ${
      preview
        ? "border-red-400 text-red-600 cursor-pointer"
        : "border-gray-300 text-gray-400 cursor-not-allowed"
    }
            `}
            >
              Remove photo
            </button>
            <button
              onClick={handleButtonClick}
              className="w-[200px] bg-blue-200 p-3 text-gray-700 font-bold rounded-[8px] m-2 cursor-pointer"
            >
              Change photo
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="px-3">
            <div className="text-gray-600 text-sm">Pick a photo up to 4MB</div>
            <div className="text-gray-600 text-xs">
              Your avatar photo will be public
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  p-6">
        <label className="font-bold">Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          className="outline-none w-[200px] border border-gray-500 rounded-[10px] px-4 py-3 mt-2"
        />
      </div>
      <div className="email p-6">
        <div className="font-bold mb-4">Email</div>
        <div className="currentEmail mb-2">felixebus042@gmail.com</div>
        <div
          onClick={() => setShowEmailModal(true)}
          className="font-bold p-3 bg-gray-300/50 text-gray-600 w-[200px] rounded-[10px]"
        >
          Change email
        </div>
      </div>
      <div className="password p-6">
        <div className="font-bold mb-4">Password</div>
        <div className=" mb-2">felixebus042@gmail.com</div>
        <div
          onClick={() => setShowPasswordModal(true)}
          className="p-3 bg-gray-300/50 text-gray-600 font-bold w-[200px] rounded-[10px]"
        >
          Change password
        </div>
      </div>

      <div className="flex flex-col p-6">
        <div className="font-bold mb-4">Delete account</div>
        <p className="mb-2 text-gray-700 w-full">
          Deleting your account is permanent. You will immediately lose access
          to all your data
        </p>
        <button
          onClick={() => setShowDeleteAccountM(true)}
          className="border-2 border-red-400 p-2 w-[200px] font-bold rounded-[10px] cursor-pointer"
        >
          Delete account
        </button>
      </div>

      {showEmailModal && (
        <div
          onClick={closeEmailModal}
          className="emailModal fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="emailModalCont bg-white w-[80%] rounded-2xl p-4 "
          >
            <div className="sticky top-0 left-0 flex flex-row p-2 ">
              <button onClick={closeEmailModal}>
                <img className="h-6" src="/images/back arrow.png" alt="" />
              </button>
              <p className="ml-4 font-bold">Change email address</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500 mb-2">
                Update the email you use for you Todo List Account. your email
                is currently felixebus042
              </p>

              <div className="flex flex-col">
                <label className="font-bold mb-2">New email</label>
                <input
                  className="border  outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-bold">Confirm new email</label>
                <input
                  className="border mt-2 outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                  type="email"
                />
              </div>
              <div className="mt-2 flex flex-col">
                <label className="font-bold">Todo List password</label>
                <input
                  className="border mt-2 outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                  type="password"
                />{" "}
              </div>
            </div>

            <div className=" p-3 text-right">
              <button
                onClick={closeEmailModal}
                className="mr-3 bg-gray-200/50 p-2 w-[100px] font-bold text-gray-600 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <button className="bg-red-500 cursor-pointer rounded-[8px] font-bold text-white p-2">
                Change email
              </button>
            </div>
          </div>
        </div>
      )}
      {showPasswordModal && (
        <div
          onClick={closePasswordModal}
          className=" fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" h-[50%] bg-white w-[80%] rounded-2xl p-4 "
          >
            <div className="sticky  top-0 left-0 flex flex-row p-2 ">
              <button onClick={closePasswordModal}>
                <img className="h-6" src="/images/back arrow.png" alt="" />
              </button>
              <p className="ml-4 font-bold">Add password</p>
            </div>
            <div className="">
              <div className="flex flex-col py-4">
                <label className="font-bold mb-2 ">New password</label>
                <input
                  className="border  outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                  type="password"
                />
              </div>
              <div className="flex flex-col py-4">
                <label className=" font-bold">Confirm new password</label>
                <input
                  className="border mt-2 outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                  type="email"
                />
              </div>
            </div>

            <div className=" p-3 text-right">
              <button
                onClick={closePasswordModal}
                className="mr-3 bg-gray-200/50 p-2 w-[100px] font-bold text-gray-600 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <button className="bg-red-500 cursor-pointer rounded-[8px] font-bold text-white p-2">
                Add password
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteProfileM && (
        <div
          onClick={closeDeleteProfileM}
          className="removePhotoModal fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="removePhotoModalCont bg-white rounded-2xl w-[90%] p-3 "
          >
            <div className="font-bold mb-2">Remove Photo? </div>
            <p className="my-4">Your profile photo will be removed</p>

            <div className=" text-right p-2 my-3">
              <button
                onClick={closeDeleteProfileM}
                className="mr-3 bg-gray-200/50 p-2 w-[80px] font-bold text-gray-600 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={removeProfilePic}
                className="bg-red-600 cursor-pointer rounded-[8px] font-bold text-white p-2"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteAccountM && (
        <div
          onClick={closeDelAccModal}
          className="deleteAcc fixed top-0 bottom-0 left-0 right-0  bg-black/50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="delAccModalCont bg-white rounded-2xl p-3 w-[90%]"
          >
            <div className="sticky  top-0 left-0 flex flex-row p-2 ">
              <button onClick={closeDelAccModal}>
                <img className="h-6" src="/images/back arrow.png" alt="" />
              </button>
              <p className="ml-4 font-bold">Delete account</p>
            </div>
            <div className="textDel">
              <p className="text-sm  my-4">
                We'll be sorry to see you go, but thanks for trying TodoList
              </p>
              <p className="text-sm my-4">
                Deleting your account is permanent. You will immediately lose
                access to all your data
              </p>
              <p className="text-xs text-gray-700 my-4">
                Deleting your account requires Your current password as
                confirmation . Type in your password to bo delete Account
              </p>
            </div>
            <div className="flex flex-col py-4">
              <label className="font-bold mb-2 ">Password</label>
              <input
                className="border  outline-none p-1 rounded-[8px] bg-gray-100/50 border-gray-500"
                type="password"
              />
            </div>
            <div className=" p-3 text-right">
              <button
                onClick={closeDelAccModal}
                className="mr-3 bg-gray-200/50 p-2 w-[100px] font-bold text-gray-500 hover:text-gray-700 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <button className="bg-red-200 cursor-not-allowed rounded-[8px] font-bold text-white p-2">
                Delete account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
