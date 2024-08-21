import React, { useState } from "react";
import { Footer } from "../components/Footer";
// import { useParams } from "react-router-dom";

export function ViewMenu() {
  // const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  const menuData = {
    name: "Hyderabad Menu",
    Appetizers: [
      { src: "/imgs/view-menu/appetizers/main-img.jpg", alt: "main-img" },
      { src: "/imgs/view-menu/appetizers/a1.jpg", alt: "Pakora" },
      { src: "/imgs/view-menu/appetizers/a2.jpg", alt: "Mirchi Bajji" },
      { src: "/imgs/view-menu/appetizers/a3.jpg", alt: "Samosa" },
      { src: "/imgs/view-menu/appetizers/a4.jpg", alt: "Cut Mirchi" },
      { src: "/imgs/view-menu/appetizers/a5.jpg", alt: "Paneer 65" },
      { src: "/imgs/view-menu/appetizers/a6.jpg", alt: "Vegetable Bonda" },
    ],
    MainCourses: [
      { src: "/imgs/view-menu/maincourse/main-img.jpg", alt: "main-img" },
      { src: "/imgs/view-menu/maincourse/m1.jpg", alt: "Hyderabadi Biryani" },
      { src: "/imgs/view-menu/maincourse/m2.jpg", alt: "Haleem" },
      { src: "/imgs/view-menu/maincourse/m3.jpg", alt: "Chicken Curry" },
      { src: "/imgs/view-menu/maincourse/m4.jpg", alt: "Khatti Dal" },
      { src: "/imgs/view-menu/maincourse/m5.jpg", alt: "Dum Biriyani" },
      { src: "/imgs/view-menu/maincourse/m6.jpg", alt: "Chicken FriedRice" },
    ],
    Desserts: [
      { src: "/imgs/view-menu/desserts/main-img.jpg", alt: "main-img" },
      { src: "/imgs/view-menu/desserts/d1.jpg", alt: "Double Ka Meetha" },
      { src: "/imgs/view-menu/desserts/d2.jpg", alt: "Qubani Ka Meetha" },
      { src: "/imgs/view-menu/desserts/d3.jpg", alt: "Sheer Khurma" },
      { src: "/imgs/view-menu/desserts/d4.jpg", alt: "Badam Ki Jali" },
      { src: "/imgs/view-menu/desserts/d5.jpg", alt: "Mauz Ka Meetha" },
      { src: "/imgs/view-menu/desserts/d6.jpg", alt: "Shahi Tukda" },
    ],
    Beverages: [
      { src: "/imgs/view-menu/beverages/main-img.jpg", alt: "main-img" },
      { src: "/imgs/view-menu/beverages/b1.jpg", alt: "Irani Chai" },
      { src: "/imgs/view-menu/beverages/b2.jpg", alt: "Falooda" },
      { src: "/imgs/view-menu/beverages/b3.jpg", alt: "Jigarthanda" },
      { src: "/imgs/view-menu/beverages/b4.jpg", alt: "Badam Milk" },
      { src: "/imgs/view-menu/beverages/b5.jpg", alt: "Rooh Afza" },
      { src: "/imgs/view-menu/beverages/b6.jpg", alt: "Lassi" },
    ],
  };

  // const restaurantMenu = menuData[id];
  const restaurantMenu = menuData;

  if (!restaurantMenu) {
    return <div className="view-menu">Menu not found</div>;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const resName = restaurantMenu.name.split(" ")[0];

  return (
    <>
      <div className="view-menu-container">
        <div className="menu-header">
          <h1>{restaurantMenu.name}</h1>
        </div>
        <section className="menu-categories">
          {Object.keys(restaurantMenu)
            .filter((category) => category !== "name")
            .map((category, index) => (
              <div
                key={index}
                className={`category ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                <div className="category-image">
                  <img
                    src={restaurantMenu[category][0].src}
                    alt={restaurantMenu[category][0].alt}
                  />
                </div>
                <p>{category}</p>
              </div>
            ))}
        </section>
        <section className="menu-items">
          {restaurantMenu[selectedCategory] &&
            restaurantMenu[selectedCategory].slice(1).map((item, index) => (
              <div key={index} className="menu-item">
                <div
                  className="menu-item-circle"
                  onClick={() => handleCategoryChange(item.alt)}
                ></div>
                <img src={item.src} alt={item.alt} />
                <p>{item.alt}</p>
              </div>
            ))}
        </section>
      </div>
      <Footer branchName={resName} />
    </>
  );
}
