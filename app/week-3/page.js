import ItemList from "./item-list";

export default function page() {
  return (
    <main className="ml-10 mt-10">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
