import { saveToDo } from "@/services/todo/toDoServices";

export default function EditToDo() {

    return (
        <main>
            <h1>Add New To Do</h1>
            <form action={saveToDo}>
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
                <label>
                    Completed:
                    <input type="checkbox" name="completed" />
                </label>
                <button type="submit">Add</button>
            </form>
        </main>
    );

}