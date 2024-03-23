"use server"
import { redirect } from "next/navigation";
import { http } from "../http/httpservice";
import { IToDoService, ToDoItem } from "./IToDoServices";


export default class TodoServer implements IToDoService {
    getToDoList(): Promise<ToDoItem[]> {
        throw new Error("Method not implemented.");
    }
    saveToDo(item: ToDoItem): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteToDoItem(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

  export async function getToDoList(){

    console.log("fetching data from serve");
  
    const response = await http.get("/todo",{cache: "no-cache"});
    const toDoItems = await response.json();
  
    console.log(toDoItems);
  
    return toDoItems;
  }

  export async function saveToDo(formData: FormData) {
    let request = {
        title: formData.get("title"),
        completed: false,
    };
    
    
    await http.post("/todo",{
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });
    
    return redirect("/");
}