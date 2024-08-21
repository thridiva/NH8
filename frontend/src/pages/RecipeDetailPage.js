import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";

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

const recipeData = {
  id: "12345",
  name: "Paneer Tikka",
  image: "dish1",
  description: "Delicious paneer marinated in spices and grilled.",
  ingredients: [
    "250 grams paneer, cut into cubes",
    "1 bell pepper, cut into chunks",
    "1 onion, cut into chunks",
    "1 tomato, cut into chunks",
    "1/2 cup yogurt",
    "1 tablespoon ginger-garlic paste",
    "1 tablespoon lemon juice",
    "1 teaspoon red chili powder",
    "1 teaspoon garam masala",
    "1/2 teaspoon turmeric powder",
    "Salt to taste",
    "2 tablespoons oil",
    "Skewers",
  ],
  procedure: [
    "Step 1: In a large bowl, mix yogurt, ginger-garlic paste, lemon juice, red chili powder, garam masala, turmeric powder, and salt.",
    "Step 2: Add paneer cubes, bell pepper, onion, and tomato chunks to the marinade.",
    "Step 3: Mix well to coat evenly. Cover and refrigerate for at least 1 hour.",
    "Step 4: Preheat the grill or oven to 200°C (392°F).",
    "Step 5: Thread the marinated paneer and vegetables onto skewers.",
    "Step 6: Brush with oil and grill for 15-20 minutes, turning occasionally, until golden and slightly charred.",
    "Step 7: Serve hot with mint chutney and lemon wedges.",
  ],
};

export function RecipeDetailPage() {
  // TODO const { id } = useParams(); // used to fetch recipie data from the database
  const recipe = recipeData;

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <div className="recipe-detail-page">
        <img src={dishImages[recipe.image]} alt={recipe.name} />
        <div className="recipe-detail-content">
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Procedure:</h2>
          <div className="steps-recipe-page">
            {recipe.procedure.map((step, index) => (
              <div key={index}>{step}</div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
