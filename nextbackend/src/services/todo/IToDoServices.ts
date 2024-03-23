export type ToDoItem = {
    id: number;
    title: string;
    completed: boolean;
};

export interface IToDoService {
    getToDoList(): Promise<ToDoItem[]>;
    saveToDo(item: ToDoItem): Promise<void>;
    deleteToDoItem(id: number): Promise<void>;
}