import { useEffect, useState } from "react"


export default function UserList(){
    let [totalUsers,setTotalUsers] = useState(0);
    let [users,setUsers] = useState([]);
    let [pageNumber,setPageNumber] = useState(0);

    useEffect(() => {
        fetch("https://dummyjson.com/users").then((response) => response.json())
                .then((data) => {
                    setUsers(data.users);
                    setTotalUsers(data.users.length);
                });
    },[]);

    useEffect(() => {
        //Pulll the data by new page number 
    },[pageNumber]);

    function loadUsers(){
        return users.slice(pageNumber * 10, (pageNumber + 1) * 10);
    }


    return(
        <div className="container">
            {users.length === 0 ? 
                <div className="spinner">
                        Loading....
                </div>
            : 
            <>
            <h1>Users</h1>
            { Array.from({ length : totalUsers / 10}).map((item,index) => {
                return <button key={index} className="btn btn-primary mx-1" onClick={() => {
                   setPageNumber(index)
                }}>{index + 1}</button>
            })}
            <ul className="list-group">
                {
                    loadUsers().map((user:any) => {
                        return <li className="list-group-item" key={user.id}>
                           <div className="row">
                              <div className="col-auto">
                                 <img src={user.image} className="avatar rounded" width={48} height={48} />
                              </div>
                              <div className="col">
                                <h4>{user.firstName} {user.lastName}</h4>
                                <p>{user.email}</p>
                              </div>
                           </div>
                        </li>
                    })
                }
            </ul></>
            }
        </div>
    )
}