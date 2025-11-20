import Goback from "./Goback";

function Donate() {
  return (
    <>
      <div className="donateCont">
        <Goback />
        <div className="donateHeader">
          Support To-do List Team
          <img src="images/heart-red.png" className="h-10" alt="" />
        </div>
        <div className="headerDesc">
          This is a donation page. You could treat us with a meal or a cup of
          coffee here. We will be really grateful for your kind encouragement.
          Anyway, we feel grateful to you whether you donate or not.
        </div>
        <div className="supportItem lollipop">
          <img src="/images/lollipop.png" alt="" height={32} />
          <div className="sItemDesc">
            <div className="sItemName">A Lollipop</div>
            <div className="sItemPrice">#415.00</div>
          </div>
          <img src="check-mark-in-a-circle-blue.png" height={16} alt="" />
        </div>
        <div className="supportItem Chocolate">
          <img src="/images/chocolate-bar.png" alt="" height={32} />
          <div className="sItemDesc">
            <div className="sItemName">A Chocolate Bar</div>
            <div className="sItemPrice">#800.00</div>
          </div>
          <img src="check-mark-in-a-circle-blue.png" height={16} alt="" />
        </div>
        <div className="supportItem icecream">
          <img src="/images/ice-cream.png" alt="" height={32} />
          <div className="sItemDesc">
            <div className="sItemName">Ice Cream</div>
            <div className="sItemPrice">#1500.00</div>
          </div>
          <img src="check-mark-in-a-circle-blue.png" height={16} alt="" />
        </div>
        <div className="supportItem coffee">
          <img src="/images/ice-coffee-cup.png" alt="" height={32} />
          <div className="sItemDesc">
            <div className="sItemName">A cup of coffee</div>
            <div className="sItemPrice">#2500.00</div>
          </div>
          <img src="check-mark-in-a-circle-blue.png" height={16} alt="" />
        </div>

        <div className="supportItem burgerMeal">
          <img src="/images/cheese.png" alt="" height={32} />
          <div className="sItemDesc">
            <div className="sItemName">A Burger Meal</div>
            <div className="sItemPrice">#4000.00</div>
          </div>
          <img src="check-mark-in-a-circle-blue.png" height={16} alt="" />
        </div>

        <div className="supportCta ">SUPPORT</div>
      </div>
    </>
  );
}

export default Donate;
