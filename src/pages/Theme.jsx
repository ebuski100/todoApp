import Goback from "./Goback";

function Theme() {
  return (
    <>
      <div className="themeHeader">
        {/* <div className="themeBackArrow">
          <img src="/images/back arrow.png" height={32} alt="" />
        </div> */}
        <Goback />
        <div className="themeTitle">Theme</div>
      </div>
      <div className="themeCont">
        <div className="themeContItem">
          <div className="blackTheme themeItem"></div>

          <div className="themeText">Dark</div>
        </div>
        <div className="themeContItem">
          <div className="purpleTheme themeItem"></div>
          <div className="themeText">lightpink</div>
        </div>
        <div className="themeContItem">
          <div className="orangeTheme themeItem"></div>
          <div className="themeText">Orange </div>
        </div>
        <div className="themeContItem">
          <div className="greenTheme themeItem"></div>
          <div className="themeText">cyan</div>
        </div>
      </div>
    </>
  );
}
export default Theme;
