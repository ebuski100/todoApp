import Goback from "./Goback";

function Completed() {
  return (
    <>
      <Goback />
      <div className="completedHeader">
        <img src="/images/bin.png" height={24} alt="" />
      </div>
      <div className="completedTime">Completed Time</div>
    </>
  );
}

export default Completed;
