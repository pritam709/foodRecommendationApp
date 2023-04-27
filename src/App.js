import "./styles.css";
import { useState } from "react";

export default function App() {
  const myFoods = {
    chinese: [
      {
        name: "chowmein",
        rating: "4/5",
        img:
          "https://greenbowl2soul.com/wp-content/uploads/2019/11/vegetable-chow-mein.jpg"
      },
      {
        name: "ma po tofu",
        rating: "3/5",
        img:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ5kApXeJ5Wyyv5yaN_tEwzUp1hzTiRUUCR6b8f5k2H_ceV13VG_vihQ71i-7x8ZElivrO6tyFtpziyGO0"
      },
      {
        name: "wonton",
        rating: "2.5/5",
        img:
          "https://www.thespruceeats.com/thmb/XiQRCJ_xLecR0X0cZkiDlogGZJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pork-and-shrimp-wonton-4077052-hero-01-3215d83b87704242a85db72b4201ebc1.jpg"
      }
    ],
    southIndian: [
      {
        name: "dosa",
        rating: "4.5/5",
        img:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg"
      },
      {
        name: "idli",
        rating: "4/5",
        img:
          "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTAml8NiyRZiLwM5mMsE_1F0GmKQB1ZwUyaOynlsUwkvySgHCt8RR2uYcwnvgdjd9RAJ7-Im7sCTziiec4"
      },
      {
        name: "uttapams",
        rating: "3.5/5",
        img:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ2WOhGbLf68hUqDfWufOsZUMPjuLQp5EqOCnqbadCsq4aJL_MbHJbqvwP92fZw3IbaUHZno3QcINYjS3Y"
      }
    ],
    haryanviPehlwaanDiet: [
      {
        name: "choorma",
        rating: "4.5/5",
        img: "https://i.ytimg.com/vi/fY2i9I7-wyE/maxresdefault.jpg"
      },
      {
        name: "khees",
        rating: "4/5",
        img:
          "https://i.pinimg.com/originals/cf/03/5d/cf035d8a944108025a1cbd1f56e4a8d1.jpg"
      },
      {
        name: "bajra roti with makhhan",
        rating: "4.5/5",
        img:
          "https://blogger.googleusercontent.com/img/a/AVvXsEh8ljjR7gocweIinyQp_Pu0vbtfTv2dTFwM8tOVt9jpEmiA9HcndVThiKnn7tV-dF5kcUYBtcg8tEoHEkM8uD6lcrrKk4GgOscPZCfl5bejiHENNdp6D3mEKFloijy0ObAvF74AFiw8tq__ZGUGolscVAGiLNMOCugczZjCFK8iyOBIRyOOTXeixPt8bQ=w640-h480"
      },
      {
        name: "malpua",
        rating: "3.5/5",
        img:
          "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQhU3AxADh39OKm3a4q_7Hl_YFdtomErcgYL6w2h123Kd26iN-3EMzsnmfRfcf9nPRzjY3l8Xwn13JDH8I"
      }
    ],
    gujraati: [
      {
        name: "khandvi",
        rating: "3/5",
        img:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQqkR16gum06z0uTeCp9axJet7W-rij7J8hbPZSRlE7U17B8MFlEMSbLxlY2r1Dd5FvpeKuK85epdWNZnA"
      },
      {
        name: "thepla",
        rating: "4/5",
        img:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/thepla-recipe-2.jpg"
      },
      {
        name: "dhokla",
        rating: "3.5/5",
        img:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/khaman-dhokla-recipe.jpg"
      }
    ]
  };

  var foodIhave = Object.keys(myFoods);
  const [state, setState] = useState("gujraati");

  function spanClickHandler(item) {
    return setState(item);
  }
  return (
    <div className="App">
      <div className="head">
        <h1>Food Recommendations</h1>
        <p>Checkout my favorite food. Select a genre to get started</p>
      </div>
      {foodIhave.map((item) => {
        return (
          <span
            className="item"
            onClick={function () {
              return spanClickHandler(item);
            }}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}

      <hr />
      <ul className="foodList">
        {myFoods[state].map(function (food) {
          return (
            <li>
              {" "}
              {food.name} ({food.rating}){" "}
              <img
                style={{ width: "200px", height: "200px" }}
                alt="image1"
                src={food.img}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
