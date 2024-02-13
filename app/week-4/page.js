"use client";
import AddItemForm from "./add-item-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <div className="flex justify-center my-2">
      <Card>
        <CardHeader>
          <CardTitle>Add item</CardTitle>
          <CardDescription>Add item to shopping list</CardDescription>
        </CardHeader>
        <CardContent>
          <AddItemForm />
        </CardContent>
      </Card>
    </div>
  );
}
