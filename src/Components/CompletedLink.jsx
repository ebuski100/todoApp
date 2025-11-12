import { useNavigate } from "react-router-dom";

function CompletedLink() {
  const navigate = useNavigate();
  function goToCompleted() {
    navigate("/completed");
  }

  return (
    <div onClick={goToCompleted} className="completedLink">
      Check all Completed tasks
    </div>
  );
}

export default CompletedLink;
