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
        <div className="blackTheme themeItem">
          <div className="themeText">Black</div>
        </div>
        <div className="purpleTheme themeItem">
          <div className="themeText">lightpink</div>
        </div>
        <div className="orangeTheme themeItem">
          <div className="themeText">Orange </div>
        </div>
        <div className="greenTheme themeItem">
          <div className="themeText">cyan</div>
        </div>
      </div>
    </>
  );
}
export default Theme;
