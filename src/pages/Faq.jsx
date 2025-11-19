import Goback from "./Goback";

const Faq = () => {
  const openEmail = () => {
    window.location.href = "mailto: felixebus042@gmail.com";
  };
  return (
    <div className="p-4 ">
      <div className="header flex flex-row justify-start items-center py-4">
        <Goback />
        <div className="text-2xl font-bold ml-5">FAQ</div>
      </div>
      <p className="text-gray-700/80 pl-2 ">you might be wondering</p>

      <div className="faqCont p-4 text-gray-700 bg-gray-300/30 h-auto rounded-2xl w-[100%]  my-5 h-20">
        <div className="flex py-6 flex-row justify-between items-center">
          <p>The phone cannot receive notifications and reminders</p>
          <img className="h-6 ml-4 " src="/images/forward arrow.png" alt="" />
        </div>
        <div className="flex py-6 flex-row justify-between items-center">
          <p>There is no sound for task reminder</p>
          <img className="h-6 ml-4 " src="/images/forward arrow.png" alt="" />
        </div>
        <div className="flex py-6 flex-row justify-between items-center">
          <p>Differences between Pro and free versions</p>
          <img className="h-6 ml-4 " src="/images/forward arrow.png" alt="" />
        </div>
        <div className="flex py-6 flex-row justify-between items-center">
          <p>How to Import System Calendar events</p>
          <img className="h-6 ml-4 " src="/images/forward arrow.png" alt="" />
        </div>
      </div>
      <div className="pl-2  text-gray-700/70">
        {" "}
        If you have any problems, please{" "}
        <span onClick={openEmail} className="text-blue-700 cursor-pointer">
          contact us
        </span>
      </div>
    </div>
  );
};

export default Faq;
