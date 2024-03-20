import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
export default function Item({ name, quantity, category, onSelect }) {
  return (
    <Card
      onClick={() => {
        onSelect(name);
      }}
      className="w-full h-full cursor-pointer"
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          Buy {quantity} in {category}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
