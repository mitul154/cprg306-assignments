import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AddItemForm() {
  const [name, setName] = useState("");
  const [quanitity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      name: name,
      quantity: quanitity,
      category: category,
    };

    console.log(item);
    alert(`Added ${quanitity} ${name} to the ${category} category`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <Input
        required
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="quantity">Quantity:</label>
      <Input
        min={1}
        max={99}
        required
        type="number"
        id="quantity"
        value={quanitity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label className="" htmlFor="category">
        Category:
      </label>
      <div className="my-2">
        <select
          className="border inline-block active:border-none border-black rounded-md px-4 py-2 focus:outline-none"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Button className="my-10" type="submit">
        Add Item
      </Button>
    </form>
  );
}
