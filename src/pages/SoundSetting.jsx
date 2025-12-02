import React, { useState } from "react";
import Goback from "./Goback";
import SubmissionBtns from "../Components/SubmissionBtns";
import Alarmchoice from "../Components/Alarmchoice";

import sounds from "../data/sounds.json";

const SoundSetting = () => {
  const [showSoundType, setShowSoundType] = useState(false);
  const [showAlarmList, setShowAlarmList] = useState(false);
  const [showNoteList, setShowNoteList] = useState(false);
  const [showCompletionSounds, setShowCompletionSounds] = useState(false);

  const [notificationSound, setNotificationSound] = useState(
    localStorage.getItem("notificationSound") || "blared"
  );

  const [alarmSound, setAlarmSound] = useState(
    localStorage.getItem("alarm") || "beep"
  );
  const [completionSound, setCompletionSound] = useState(
    localStorage.getItem("completion") || "done"
  );
  const handleCompletionSelect = (sound) => {
    setCompletionSound(sound.name);
    localStorage.setItem("completionSoundName", sound.name);
    localStorage.setItem("completionSoundFile", sound.file);
  };

  const handleAlarmSelect = (sound) => {
    setAlarmSound(sound.name);
    localStorage.setItem("alarmSoundName", sound.name);
    localStorage.setItem("alarmSoundFile", sound.file);
  };

  const handleNoteSelect = (sound) => {
    setNotificationSound(sound.name);
    localStorage.setItem("notificationSoundName", sound.name);
    localStorage.setItem("notificationSoundFile", sound.file);
  };

  const [soundType, setSoundType] = useState(
    localStorage.getItem("soundType") || "notification"
  );

  const handleSelectSoundType = (type) => {
    setSoundType(type);
    localStorage.setItem("soundType", type);
  };

  const [tempNote, setTempNote] = useState(notificationSound);
  const [tempAlarm, setTempAlarm] = useState(alarmSound);
  const [tempCompletion, setTempCompletion] = useState(completionSound);

  const [tempType, setTempType] = useState(soundType);

  return (
    <div className="px-2 ">
      <div className="noteHeader flex flex-row   items-center sticky top-0 left-0 p-4  w-full bg-white">
        <Goback />
        <div className="font-bold ml-4"> Notification & Reminder</div>
      </div>

      <div className="taskitemsBox p-4 border-b border-gray-500 ">
        <div className="text-gray-600 ">Task Reminder</div>
        <div onClick={() => setShowSoundType(true)} className="py-4">
          <p> Default Task Reminder Type</p>
          <p className="text-gray-600 text-sm">{soundType}</p>
        </div>

        <div onClick={() => setShowNoteList(true)} className="py-4">
          <p> Notification RingTone</p>
          <p className="text-gray-600 text-sm">{notificationSound}</p>
        </div>
        <div
          onClick={() => {
            setShowAlarmList(true);
          }}
          className="py-4"
        >
          <p> Alarm RingTone</p>
          <p className="text-gray-600 text-sm">{alarmSound}</p>
        </div>
      </div>

      <div className="taskitemsBox p-4 ">
        <div className="text-gray-600">Task Completion</div>

        <div onClick={() => setShowCompletionSounds(true)} className="py-4">
          <p> Task Completion Sound</p>
          <p className="text-gray-600 text-sm">{completionSound}</p>
        </div>
      </div>

      {showSoundType && (
        <div
          onClick={() => setShowSoundType(false)}
          className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] bg-white p-4 rounded-2xl "
          >
            <div>Default Task Reminder Type</div>
            <div className="  justify-between labelCont flex flex-row">
              <label className="py-4 ">
                <input
                  className="mr-2"
                  type="radio"
                  value="notification"
                  name="soundType"
                  checked={tempType === "notification"}
                  onChange={(e) => setTempType(e.target.value)}
                  id=""
                />
                Notification
                <p className="text-xs text-gray-500">
                  with 1-3s short ringtone
                </p>
                <div className="flex justify-start mt-3">
                  <img
                    className="h-32 border-2 border-gray-300 rounded-2xl overflow-hidden  "
                    src="/images/SkeletonImage1.jpg"
                    alt=""
                  />
                </div>
              </label>
              <label className="py-4 ">
                <input
                  className="mr-3"
                  type="radio"
                  value="alarm"
                  name="soundType"
                  checked={tempType === "alarm"}
                  onChange={(e) => setTempType(e.target.value)}
                  id=""
                />
                Alarm
                <p className="text-xs text-gray-500">
                  with repeat long ringtone
                </p>
                <div className="flex justify-start mt-3">
                  <img
                    className="h-32 border-2 border-gray-300 rounded-2xl overflow-hidden  "
                    src="/images/skeletonImage2.jpg"
                    alt=""
                  />
                </div>
              </label>
            </div>
            <SubmissionBtns
              onCancel={() => {
                console.log("hello el");
                setTempType(soundType);
                setShowSoundType(false);
              }}
              onSave={() => {
                handleSelectSoundType(tempType);
                setShowSoundType(false);
              }}
            />
          </div>
        </div>
      )}

      {showAlarmList && (
        <Alarmchoice
          list={sounds.alarms}
          tempValue={tempAlarm}
          setTempValue={setTempAlarm}
          onSave={(value) => {
            handleAlarmSelect(value);
            setShowAlarmList(false);
          }}
        />
      )}
      {showNoteList && (
        <Alarmchoice
          list={sounds.notifications}
          tempValue={tempNote}
          setTempValue={setTempNote}
          onSave={(value) => {
            handleNoteSelect(value);
            setShowNoteList(false);
          }}
        />
      )}
      {showCompletionSounds && (
        <Alarmchoice
          list={sounds.notifications}
          tempValue={tempCompletion}
          setTempValue={setTempCompletion}
          onSave={(value) => {
            handleCompletionSelect(value);
            setShowCompletionSounds(false);
          }}
        />
      )}
    </div>
  );
};

export default SoundSetting;
