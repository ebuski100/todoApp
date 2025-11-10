function LoadPage() {
  return (
    <div className="loadPage-cont">
      <div className=" load-page-logo-cont">
        <div className="side-nav-logo-item">
          <img
            className="blue-checkmark"
            src="/images/check-mark-in-a-circle-blue.png"
            alt=""
          />
          <div className="bar blue-bar logo-bar"></div>
        </div>
        <div className="side-nav-logo-item">
          <img className="logo-dot" src="/images/purple-dot.png" alt="" />
          <div className="bar purple-bar logo-bar"></div>
        </div>
        <div className="side-nav-logo-item">
          <img className="logo-dot" src="/images/green-dot.png" alt="" />
          <div className="bar green-bar logo-bar"></div>
        </div>
      </div>

      <div className="loadTitle ">
        To-D
        <div className="load-page-img-div">
          <img src="/images/check-mark-in-a-circle-blue.png" alt="" />
        </div>
        List
      </div>
    </div>
  );
}

export default LoadPage;
