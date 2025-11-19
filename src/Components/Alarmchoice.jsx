import { useRef, useEffect } from "react";

const Alarmchoice = ({ list, tempValue, setTempValue, onSave }) => {
  const audioRef = useRef(null);

  const playSound = async (file) => {
    stopAudio();

    try {
      const audio = new Audio(file);
      audioRef.current = audio;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise.catch((err) => {
          console.warn("Audio play rejected:", err);
        });
      }
    } catch (err) {
      console.error("Failed to play audio:", err);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (err) {
        console.log(err);
      }

      audio.src = "";

      if (typeof audio.load === "function") audio.load();
    } catch (err) {
      console.warn("Error while stopping audio:", err);
    } finally {
      audioRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const handleSave = () => {
    stopAudio();
    if (typeof onSave === "function") onSave(tempValue);
  };

  return (
    <div className=" fixed bg-white top-0 right-0 left-0 bottom-0 ">
      <div className="sticky  top-0 left-0 bg-white p-3 flex flex ">
        <button onClick={handleSave}>
          <img className="h-7" src="/images/back arrow.png" alt="" />
        </button>
        <div className="ml-4">Notification & Reminder</div>
      </div>
      <div className="p-4 ">
        <div className="text-blue-500 mb-2">System Ringtone</div>
        <div
          className=" flex flex-col
     "
        >
          {list.map((sound, index) => (
            <label className="p-2" key={index}>
              <input
                value={sound.name}
                checked={tempValue === sound.name}
                onChange={(e) => setTempValue(e.target.value)}
                onClick={() => playSound(sound.file)}
                className="mr-3"
                type="radio"
                name="sound"
              />
              <span>{sound.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alarmchoice;
