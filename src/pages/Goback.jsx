import { useNavigate } from "react-router-dom";

function Goback({ className }) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <div onClick={goBack} className={className}>
        <img
          src="/images/back arrow.png"
          className="h-6 active:h-9 cursor-pointer"
          alt=""
        />
      </div>
    </>
  );
}
export default Goback;
