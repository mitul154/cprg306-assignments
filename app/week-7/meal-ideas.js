"use client";
import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function MealIdeas({ ingredient, setIngredient }) {
  const [mealIdeas, setMealIdeas] = useState(null);
  const loadMealIdeas = async () => {
    const data = await fetchMealIdeas(ingredient);
    setMealIdeas(data.meals);
  };
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div>
      <span className="flex gap-3">
        <Button>Meal Ideas for {ingredient}</Button>
        <Button onClick={() => setIngredient(null)}>Go Back</Button>
      </span>
      <div className="flex flex-col gap-2">
        {mealIdeas ? (
          mealIdeas.map((meal) => {
            return (
              <Card key={meal.idMeal}>
                <CardHeader>{meal.strMeal}</CardHeader>
              </Card>
            );
          })
        ) : (
          <Card>
            <CardHeader>Recipe not found</CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
