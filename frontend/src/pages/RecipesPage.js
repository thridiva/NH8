import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./../components/Footer";

// fetch from api
const genreImages = {
  Vegetarian: "/imgs/recipe-page/vegetarian.jpg",
  "Non-Vegetarian": "/imgs/recipe-page/non-vegetarian.jpg",
  Desserts: "/imgs/recipe-page/desserts.jpg",
};

const dishImages = {
  dish1: "/imgs/recipe-page/dessert1.jpg",
  dish2: "/imgs/recipe-page/dish2.jpg",
  dish3: "/imgs/recipe-page/dish3.jpg",
  dish4: "/imgs/recipe-page/dish4.jpg",
  dish5: "/imgs/recipe-page/dish5.jpg",
  dish6: "/imgs/recipe-page/dish6.jpg",
  dish7: "/imgs/recipe-page/dish7.jpg",
  dish8: "/imgs/recipe-page/dish8.jpg",
  dish9: "/imgs/recipe-page/dish9.jpg",
  dish10: "/imgs/recipe-page/dish10.jpg",
  dish11: "/imgs/recipe-page/dish11.jpg",
  dish12: "/imgs/recipe-page/dish12.jpg",
  dessert1: "/imgs/recipe-page/dessert1.jpg",
  dessert2: "/imgs/recipe-page/dessert2.jpg",
  dessert3: "/imgs/recipe-page/dessert3.jpg",
  dessert4: "/imgs/recipe-page/dessert4.jpg",
  dessert5: "/imgs/recipe-page/dessert5.jpg",
  dessert6: "/imgs/recipe-page/dessert6.jpg",
};

export function RecipesPage() {
  const [selectedGenre, setSelectedGenre] = useState("Vegetarian");

  const dishes = {
    Vegetarian: [
      { name: "Paneer Tikka", image: "dish1", id: 1 },
      { name: "Vegetarian Biriyani", image: "dish2", id: 2 },
      { name: "Chana Masala", image: "dish3", id: 3 },
      { name: "Aloo Paratha", image: "dish4", id: 4 },
      { name: "Masoor Dal", image: "dish5", id: 5 },
      { name: "Gobi Manchurian", image: "dish6", id: 6 },
    ],
    "Non-Vegetarian": [
      { name: "Butter Chicken", image: "dish7", id: 7 },
      { name: "Rogan Josh", image: "dish8", id: 8 },
      { name: "Chicken Biriyani", image: "dish9", id: 9 },
      { name: "Fish Curry", image: "dish10", id: 10 },
      { name: "Tandoori Chicken", image: "dish11", id: 11 },
      { name: "Chicken Tikka", image: "dish12", id: 12 },
    ],
    Desserts: [
      { name: "Gulab Jamun", image: "dessert1", id: 13 },
      { name: "Rasgulla", image: "dessert2", id: 14 },
      { name: "Rasmalai", image: "dessert3", id: 15 },
      { name: "Kheer", image: "dessert4", id: 16 },
      { name: "Coconut Ladoo", image: "dessert5", id: 17 },
      { name: "Jalebi", image: "dessert6", id: 18 },
    ],
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <div className="recipes-page">
        <div className="welcome-text">
          <p>
            Indulge in a culinary journey of exquisite flavors crafted by our
            talented chefs.
          </p>
        </div>
        <div className="genre-buttons">
          {Object.keys(dishes).map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => handleGenreChange(genre)}
            >
              <img src={genreImages[genre]} alt={genre} />
              <p className="genre-p">{genre}</p>
            </button>
          ))}
        </div>
        <div className="image-section">
          <div className="image-container">
            {dishes[selectedGenre].map((dish, index) => (
              <div
                className="image-wrapper"
                key={index}
                id={`dish-${dish.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <Link
                  // to={`/recipe/${dish.name.replace(/\s+/g, "-").toLowerCase()}`}
                  to={`/recipe/${dish.id}`}
                >
                  <img src={dishImages[dish.image]} alt={dish.name} />
                </Link>
                <p className="dish-name">{dish.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
