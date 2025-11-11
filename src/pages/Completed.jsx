import Goback from "./Goback";

function Completed() {
  return (
    <>
      <Goback />
      <div className="completedHeader">
        <img src="/images/bin.png" 
        className="h-7" alt="" />
      </div>
      <div className="completedTime">Completed Time</div>
    </>
  );
}

export default Completed;
