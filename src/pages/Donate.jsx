import { useState } from "react";
import Goback from "./Goback";

function Donate() {
  const [activeItem, setActiveItem] = useState(null);
  const items = [
    { id: 1, name: "A Lollipop", price: 415, img: "/images/lollipop.png" },
    {
      id: 2,
      name: "A Chocolate Bar",
      price: 800,
      img: "/images/chocolate-bar.png",
    },
    { id: 3, name: "Ice Cream", price: 1500, img: "/images/ice-cream.png" },
    {
      id: 4,
      name: "A cup of coffee",
      price: 2500,
      img: "/images/ice-coffee-cup.png",
    },
    { id: 5, name: "A Burger Meal", price: 4000, img: "/images/cheese.png" },
  ];

  const selectedPrice = items.find((item) => item.id === activeItem)?.price;

  return (
    <>
      <div className="donateCont overflow-y-auto h-screen -webkit-overflow-scrolling-touch">
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

        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`supportItem flex items-center justify-between p-3 my-2 cursor-pointer rounded-lg ${
              activeItem === item.id
                ? "border-2 border-blue-800"
                : "border border-gray-300"
            }`}
          >
            <div className="flex items-center">
              <img src={item.img} alt={item.name} className="h-8 w-8 mr-3" />
              <div className="sItemDesc">
                <div className="sItemName">{item.name}</div>
                <div className="sItemPrice">#{item.price}</div>
              </div>
            </div>
            <img
              className={`h-6 ${
                activeItem === item.id ? "opacity-100" : "opacity-0"
              }`}
              src="/images/blueCheckmark.png"
              alt=""
            />
          </div>
        ))}

        <div className={`supportCta  ${activeItem ? "supportActive" : ""}`}>
          {activeItem ? `SUPPORT #${selectedPrice}` : "SUPPORT"}
        </div>
      </div>
    </>
  );
}

export default Donate;
