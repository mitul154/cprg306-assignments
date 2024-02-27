import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Item({ name, quantity, category }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          Buy {quantity} in {category}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
