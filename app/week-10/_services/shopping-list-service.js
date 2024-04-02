import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const getItems = async (userId) => {
  const itemsCollection = collection(db, "users", userId, "items");
  //   const itemsQuery = query(itemsCollection);
  const itemsSnapshot = await getDocs(itemsCollection);
  return itemsSnapshot.docs.map((doc) => doc.data());
};

const addItem = async (userId, item) => {
  item.category = item.category.toLowerCase();
  const itemsCollection = collection(db, "users", userId, "items");
  await addDoc(itemsCollection, item);
};

export { getItems, addItem };
