"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Item from "./item";

export default function ItemList({ items, setItems, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [isGrouped, setIsGrouped] = useState(false);
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    setIsGrouped(false);
  };
  const [groupedItems, setGroupedItems] = useState([]);
  const groupObjects = () => {
    const grouped = items.reduce((acc, item) => {
      let category = item.category.toLowerCase();
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
    console.log(grouped);
    setGroupedItems(grouped);
  };
  useEffect(() => {
    groupObjects();
  }, [items]);
  items.sort((a, b) => {
    return ("" + a[sortBy]).localeCompare(b[sortBy]);
  });

  useEffect(() => {
    if (isGrouped) {
      setItems(
        [...items].sort((a, b) => ("" + a.category).localeCompare(b.category))
      );
    } else {
      setItems(
        [...items].sort((a, b) => ("" + a[sortBy]).localeCompare(b[sortBy]))
      );
    }
  }, [sortBy, isGrouped]);

  return (
    <div>
      <div className="flex gap-3 items-center mx-">
        <span className=" text-base  text-gray-500">Sort By:</span>
        <Button
          variant={sortBy === "name" ? "" : `secondary`}
          onClick={() => handleSort("name")}
        >
          Name
        </Button>
        <Button
          variant={sortBy === "category" ? "" : `secondary`}
          onClick={() => handleSort("category")}
        >
          Category
        </Button>
        <Button
          variant={!isGrouped ? `secondary` : ""}
          onClick={() => {
            setIsGrouped(true);
            setSortBy("");
          }}
        >
          Group Category
        </Button>
      </div>
      {isGrouped ? (
        Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2">
            <h3 className="font-bold capitalize">{category}</h3>
            {items.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect}
              />
            ))}
          </div>
        ))
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
