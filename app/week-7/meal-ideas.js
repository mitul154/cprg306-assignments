"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

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
async function fetchMealDetails(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function MealIdeas({ ingredient, setIngredient }) {
  const [ingredients, setIngredients] = useState([]);
  const [mealIdeas, setMealIdeas] = useState(null);
  const loadMealIdeas = async () => {
    const data = await fetchMealIdeas(ingredient);
    setMealIdeas(data.meals);
  };
  const loadIngredients = async (id) => {
    const data = await fetchMealDetails(id);
    setIngredients(
      Object.keys(data.meals[0])
        .filter((key) => key.startsWith("strIngredient"))
        .map((key) => data.meals[0][key])
        .filter((ingredient) => ingredient)
    );
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
              <Drawer>
                <DrawerTrigger>
                  <Card
                    key={meal.idMeal}
                    onClick={() => {
                      loadIngredients(meal.idMeal);
                    }}
                  >
                    <CardHeader>{meal.strMeal}</CardHeader>
                  </Card>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Ingredients for {meal.strMeal}</DrawerTitle>
                      {ingredients.map((ingredient) => (
                        <DrawerDescription key={ingredient}>
                          {ingredient}
                        </DrawerDescription>
                      ))}
                    </DrawerHeader>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerContent>
                </DrawerTrigger>
              </Drawer>
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
