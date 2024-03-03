"use client";
import AddItemForm from "./add-item-form";
import ItemList from "./item-list";
import itemsData from "./data/items.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
export default function page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="mx-10 my-5">
      <h1 className="flex justify-center text-4xl font-bold">Shopping List</h1>
      <div className="w-1/2">
        <AddItemForm handleAddItem={handleAddItem} />
      </div>
      <ScrollArea className="h-[80vh] max-h-[calc(100vh-10rem)] rounded-md border p-4 my-3">
        <ItemList items={items} setItems={setItems} />
      </ScrollArea>
    </main>
  );
}
