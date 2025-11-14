import FootNav from "../Components/FootNav";
import { useNavigate } from "react-router-dom";
function Settings() {
  const navigate = useNavigate();

  const goFaq = () => {
    navigate("/Faq");
  };
  return (
    <>
      <div className="settingsCont pb-24">
        <div className=" z-40 bg-white  sticky top-0 left-0 flex p-4 font-bold ">
          Settings
        </div>
        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">Customize</div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5">
            <img className="h-8 mr-4" src="/images/user-blue.png" alt="" />
            <div className="text ">Account</div>
          </div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/theme-blue.png" alt="" />
            <div className="text ">Theme</div>
          </div>
          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/blue bell.png" alt="" />
            <div className="text ">Notification & Reminder</div>
          </div>
          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/crown.png" alt="" />
            <div className="text">Upgrade</div>
          </div>
        </div>
        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">Date & Time</div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5">
            <img className="h-8 mr-4" src="/images/timeformat.png" alt="" />
            <div className="text ">Time Format</div>
          </div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/dateformat.png" alt="" />
            <div className="text ">Date Format</div>
          </div>
          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4">
            <img className="h-8 mr-4" src="/images/reminder.png" alt="" />
            <div className="text ">Task Reminder Default</div>
          </div>
        </div>

        <div className="p-2 border-b border-gray-300 settingSect ">
          <div className="p-3 text-gray-700">About</div>

          <div className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-5">
            <img className="h-8 mr-4" src="/images/language.png" alt="" />
            <div className="text ">Language</div>
          </div>

          <div
            onClick={goFaq}
            className="active:bg-gray-100 rounded-2xl flex flex-row items-center px-6 py-4"
          >
            <img className="h-8 mr-4" src="/images/faq.png" alt="" />
            <div className="text ">FAQ</div>
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
      <FootNav />
    </>
  );
}

export default Settings;
