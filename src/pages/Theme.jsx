function Theme() {
  return (
    <>
      <div className="themeHeader">
        <div className="themeBackArrow">
          <img src="/images/back arrow.png" height={32} alt="" />
        </div>
        <div className="themeTitle">Theme</div>
      </div>
      <div className="themeCont">
        <div className="purpleTheme themeItem"></div>
        <div className="orangeTheme themeItem"></div>
        <div className="greenTheme themeItem"></div>
        <div className="blackTheme themeItem"></div>
      </div>
    </>
  );
}
export default Theme;
