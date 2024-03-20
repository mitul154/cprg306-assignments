"use client";
import AddItemForm from "./add-item-form";
import ItemList from "./item-list";
import itemsData from "./data/items.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectItemName, setSelectItemName] = useState("");
  const handleItemSelect = (itemName) => {
    const newItemName = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])|,.*$/g,
        ""
      )
      .trim();
    setSelectItemName(newItemName);
  };
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  if (!user) return;
  return (
    <main className="mx-10 my-5">
      <h1 className="flex justify-center text-4xl font-bold">Shopping List</h1>
      <div className="w-1/2">
        <AddItemForm handleAddItem={handleAddItem} />
      </div>
      {selectItemName ? (
        <MealIdeas
          ingredient={selectItemName}
          setIngredient={setSelectItemName}
        />
      ) : (
        <ScrollArea className="h-[80vh] max-h-[calc(100vh-10rem)] rounded-md border p-4 my-3">
          <ItemList
            items={items}
            setItems={setItems}
            onItemSelect={handleItemSelect}
          />
        </ScrollArea>
      )}
    </main>
  );
}
