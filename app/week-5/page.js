import ItemList from "./item-list";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function page() {
  return (
    <main className="mx-10 my-5">
      <h1 className="flex justify-center text-4xl font-bold">Shopping List</h1>
      <ScrollArea className="h-[80vh] max-h-[calc(100vh-10rem)] rounded-md border p-4 my-3">
        <ItemList />
      </ScrollArea>
    </main>
  );
}
