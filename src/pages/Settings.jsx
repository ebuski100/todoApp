import FootNav from "../Components/FootNav";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Components/LanguageSelector";
import SettingsModals from "../Components/SettingsModals";
function Settings() {
  const [showLangModal, setShowLangModal] = useState(false);

  const [showTformatModal, setTformatModal] = useState(false);

  const [showDformatModal, setDformatModal] = useState(false);
  const [showFollow, setShowFollow] = useState(null);

  const [showReminderModal, setShowReminderModal] = useState(false);
  const socials = {
    x: "https://x.com/@Ebube_dev",
    linkedin:
      "https://www.linkedin.com/in/ebube-felix-🧑🏽%E2%80%8D💻-820a3724a/",
    substack: "https://substack.com/@ebubefelix?utm_source=about-page",
  };

  // const openTimeModal = () => {
  //   setTempTimeFormat(selectedTimeFormat);
  //   showTformatModal(true);
  // };

  const langModalRef = useRef(null);

  const navigate = useNavigate();

  const today = new Date();
  const day = String(today.getDate()).padStart(2, 0);
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const year = today.getFullYear();
  const date1 = `${day}/${month}/${year}`;
  const date2 = `${month}/${day}/${year}`;
  const date3 = `${year}/${month}/${day}`;
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("language") || "system"
  );
  useEffect(() => {
    if (showLangModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLangModal]);
  const { t, i18n } = useTranslation();

  // const goFaq = () => {
  //   navigate("/Faq");
  // };

  const goNotification = () => {
    navigate("/SoundSetting");
  };

  const goAccount = () => {
    navigate("/User");
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };
  const [selectedTimeFormat, setSelectedTimeFormat] = useState(
    localStorage.getItem("timeFormat") || "System default"
  );

  const [selectedDateFormat, setSelectedDateFormat] = useState(
    localStorage.getItem("dateFormat") || date1
  );
  const [selectedReminderFormat, setSelectedReminderFormat] = useState(
    localStorage.getItem("reminderDefault") || "5 minutes before"
  );

  const [tempTimeFormat, setTempTimeFormat] = useState(selectedTimeFormat);

  const [tempDateFormat, setTempDateFormat] = useState(selectedDateFormat);

  const [tempDefaultReminder, setTempDefaultReminder] = useState(
    selectedReminderFormat
  );
  return (
    <>
      <div
        onClick={() => {
          if (showFollow) {
            setShowFollow(false);
          }
        }}
        className="settingsCont pb-25"
      >
        <div className=" z-40 bg-white  sticky top-0 left-0 flex p-4 font-bold ">
          Settings
        </div>
        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">{t("Customize")}</div>

          <div
            onClick={() => {
              if (showFollow) {
                setShowFollow(false);
                return;
              }
              goAccount();
            }}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5"
          >
            <img className="h-8 mr-4" src="/images/user-blue.png" alt="" />
            <div className="text ">{t("Account")}</div>
          </div>

          {/* <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/theme-blue.png" alt="" />
            <div className="text ">{t("Theme")}</div>
          </div> */}
          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/blue bell.png" alt="" />
            <div
              onClick={() => {
                if (showFollow) {
                  setShowFollow(false);
                  return;
                }
                goNotification();
              }}
              className="text "
            >
              {t("Notification & Reminder")}
            </div>
          </div>
          {/* <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/crown.png" alt="" />
            <div className="text">Upgrade</div>
          </div> */}
        </div>
        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">Date & Time</div>

          <div
            onClick={() => {
              if (showFollow) {
                setShowFollow(false);
                return;
              }
              setTformatModal(true);
            }}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5"
          >
            <img className="h-8 mr-4" src="/images/timeformat.png" alt="" />
            <div className=" flex flex-col ">
              <div className="text ">Time Format</div>
              <div className="text-sm text-gray-600">{selectedTimeFormat}</div>
            </div>
          </div>

          <div
            onClick={() => {
              if (showFollow) {
                setShowFollow(false);
                return;
              }
              setDformatModal(true);
            }}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4"
          >
            <img className="h-8 mr-4" src="/images/dateformat.png" alt="" />
            <div className=" flex flex-col ">
              <div className="text ">Date Format</div>
              <div className="text-sm text-gray-600">{selectedDateFormat}</div>
            </div>
          </div>
          <div
            onClick={() => {
              if (showFollow) {
                setShowFollow(false);
                return;
              }
              setShowReminderModal(true);
            }}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4"
          >
            <img className="h-8 mr-4" src="/images/reminder.png" alt="" />
            <div className=" flex flex-col ">
              <div className="text ">Task Reminder default</div>
              <div className="text-sm text-gray-600">
                {selectedReminderFormat}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">About</div>

          <div
            onClick={() => {
              if (showFollow) {
                setShowFollow(false);
                return;
              }
              setShowLangModal(true);
            }}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5"
          >
            <img className="h-8 mr-4" src="/images/language.png" alt="" />
            <div className="text ">Language</div>
          </div>

          {/* <div
            onClick={goFaq}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4"
          >
            <img className="h-8 mr-4" src="/images/faq.png" alt="" />
            <div className="text ">FAQ</div>
          </div> */}
          <div
            onClick={() => setShowFollow((prev) => !prev)}
            className="  relative follow navItem"
          >
            <img src="/images/follow-us.png" alt="" />
            <div className="followText">follow Us</div>

            {showFollow && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-gray-200/50 rounded-2xl absolute -top-50 right-0"
              >
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowFollow(false)}
                  className="followItem"
                >
                  <img src="/images/linkedin.png" alt="" />
                  <p>LinkedIn</p>
                </a>

                <a
                  href={socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowFollow(false)}
                  className="followItem"
                >
                  <img src="/images/twitter.png" alt="" />
                  <p>X (Twitter)</p>
                </a>

                <a
                  href={socials.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowFollow(false)}
                  className="followItem"
                >
                  <img src="/images/substack.png" alt="" />
                  <p>Substack</p>
                </a>
              </div>
            )}
          </div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/privacyPolicy.png" alt="" />
            <div className="text ">Privacy Policy</div>
          </div>
          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/version.png" alt="" />
            <div className="text ">Version:1.02.95.1028</div>
          </div>
        </div>
      </div>
      {showLangModal && (
        <div
          onClick={() => setShowLangModal(false)}
          className="langModalOverlay  flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-[9999]"
        >
          <div
            ref={langModalRef}
            onClick={(e) => e.stopPropagation()}
            className="langModalCont    w-[70%]  bg-white rounded-2xl z-[10000]  p-4"
          >
            <div className="langHeader   top-0 left-0 font-bold">Language</div>

            <div className="flex-1 overflow-y-auto">
              <LanguageSelector
                currentLang={localStorage.getItem("language") || "system"}
                onSelect={(lang) => setSelectedLang(lang)}
              />
            </div>

            <button
              className="p-3 w-full font-semibold text-[#4d74b4] cursor-pointer text-right"
              type="button"
              onClick={() => {
                changeLanguage(selectedLang);
                setShowLangModal(false);
              }}
            >
              SELECT
            </button>
          </div>
        </div>
      )}

      {/* {showTformatModal && (
        <div
          ref={timeFormatRef}
          className="timeFormatModalOverlay flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50"
          onClick={() => setTformatModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="timeModalCont p-4 flex flex-col w-[70%] bg-white rounded-2xl"
          >
            <h1 className="font-bold mb-2">Time Format</h1>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              System default
            </label>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              24 Hour
            </label>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              12 Hour
            </label>
            <div className=" p-2 text-right">
              <button
                className="cursor-pointer mr-4 font-bold text-blue-300/80"
                onClick={() => setTformatModal(false)}
              >
                CANCEL
              </button>
              <button
                onClick={() => setTformatModal(false)}
                className="cursor-pointer mr-2 font-bold text-blue-500"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* {showDformatModal && (
        <div
          ref={timeFormatRef}
          className="timeFormatModalOverlay flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50"
          onClick={() => setDformatModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="timeModalCont p-4 flex flex-col w-[70%] bg-white rounded-2xl"
          >
            <h1 className="font-bold mb-2">Date Format</h1>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              {date3}(Year/Month/Day)
            </label>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              {date1}(Day/Month/Year)
            </label>
            <label className="py-3">
              <input className="mr-3" type="radio" name="tFormat" id="" />
              {date2}(month/Day/Year)
            </label>
            <div className=" p-2 text-right">
              <button
                className="cursor-pointer mr-4 font-bold text-blue-300/80"
                onClick={() => setDformatModal(false)}
              >
                CANCEL
              </button>
              <button
                onClick={() => setDformatModal(false)}
                className="cursor-pointer mr-2 font-bold text-blue-500"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )} */}

      {showTformatModal && (
        <SettingsModals
          title="Time Format"
          options={["System default", "24 Hour", "12 Hour"]}
          value={tempTimeFormat}
          onSelect={(value) => setTempTimeFormat(value)}
          onSave={() => {
            setSelectedTimeFormat(tempTimeFormat);

            localStorage.setItem("timeFormat", tempTimeFormat);
            setTformatModal(false);
          }}
          onClose={() => {
            setTempTimeFormat(selectedTimeFormat);
            setTformatModal(false);
          }}
        />
      )}

      {showDformatModal && (
        <SettingsModals
          title="Date Format"
          options={[
            `${date1} (Day/Month/Year)`,
            `${date2} (Month/Day/Year)`,
            `${date3} (Year/Month/Day)`,
          ]}
          value={tempDateFormat}
          onSelect={(value) => setTempDateFormat(value)}
          onSave={() => {
            setSelectedDateFormat(tempDateFormat);
            localStorage.setItem("dateFormat", tempDateFormat);
            setDformatModal(false);
          }}
          onClose={() => {
            setTempDateFormat(selectedDateFormat);
            setDformatModal(false);
          }}
        />
      )}

      {showReminderModal && (
        <SettingsModals
          title="Task reminder default"
          options={[
            "5 minutes before",
            "10 minutes before",
            "15 minutes before",
            "30 minutes before",
          ]}
          value={tempDefaultReminder}
          onSelect={(value) => setTempDefaultReminder(value)}
          onSave={() => {
            setSelectedReminderFormat(tempDefaultReminder);
            localStorage.setItem("reminderDefault", tempDefaultReminder);
            setShowReminderModal(false);
          }}
          onClose={() => {
            setTempDefaultReminder(selectedReminderFormat);
            setShowReminderModal(false);
          }}
        />
      )}

      <FootNav />
    </>
  );
}

export default Settings;
