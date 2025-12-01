import { useNavigate } from "react-router-dom";

function CompletedLink({ activeCategory }) {
  const navigate = useNavigate();
  function goToCompleted() {
    navigate("/completed", { state: { activeCategory } });
  }

  return (
    <div onClick={goToCompleted} className="completedLink">
      Check all Completed tasks
    </div>
  );
}

export default CompletedLink;
