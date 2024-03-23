
import { getToDoList } from "@/services/todo/toDoServices";

export default async function Home() {
  let toDoItems = await getToDoList();
  return (
    <main>
       {toDoItems.map((item) =>
        <>
          <h1>{item.title}</h1>
          <p>Status : {item.completed ? "Completed" : "Pending"}</p>
          </>
       )}
    </main>
  );
}



