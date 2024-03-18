import { useState } from "react"

type ToDoItem = {
    title :string,
    isCompleted: boolean
}

export default function ToDoList(){

    let [todoList,setToDoList] = useState<ToDoItem[]>([]);
    let [newTask,setNewTask]   = useState<string>("");

    function addNewTask(){
        setToDoList([...todoList,{title:newTask,isCompleted:false}]);
    }

    function markAsCompleted(index:number){
        let tempArray = [...todoList];
        tempArray[index].isCompleted = true;
        setToDoList(tempArray);
    }

    return (
        <div className="container">
        <h1>ToDoList</h1>
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter a new task"

                onChange={(e) => setNewTask(e.target.value)}
                />
                <div className="input-group-append"> <button type="button" className="btn btn-primary" onClick={addNewTask}>Add</button></div>
        </div>
           
           

            <hr />
            <ol className="list-group">
                {
                    todoList.map((item,index) => {
                        return <li className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="col">
                                    <div className={item.isCompleted ? "badge bg-success" : "badge bg-danger"}>{item.isCompleted ? "Completed" : "Pending"}</div>
                                </div>
                                <div className="col-auto"> <button className="btn btn-sm btn-primary" type="button" onClick={() => markAsCompleted(index)}>Mark as completed</button></div></div>
                                </li>
                           
                       
                    })
                }
            </ol>
        </div>
    )
}