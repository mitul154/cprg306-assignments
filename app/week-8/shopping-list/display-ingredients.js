// TODO Fix this component so that it displays the ingredients for a meal when the card is clicked and making code more modular

import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Card, CardHeader } from "@/components/ui/card";
import Button from "@/components/ui/button";
export default function DisplayIngredients({
  meal,
  ingredients,
  loadIngredients,
}) {
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
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          {ingredients.map((ingredient) => (
            <DrawerDescription key={ingredient}>{ingredient}</DrawerDescription>
          ))}
        </DrawerHeader>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
