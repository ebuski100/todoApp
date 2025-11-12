import { useNavigate } from "react-router-dom";

function Goback() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <div onClick={goBack} className={`BackArrow `}>
        <img src="/images/back arrow.png" className="h-8 active:h-9 " alt="" />
      </div>
    </>
  );
}
export default Goback;
