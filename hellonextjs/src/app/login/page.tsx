'use client';

import { useState } from "react";

export default function Login(){
    let [username, setUsername] = useState("");
    return(
        <div>
            <h1>Login</h1>
            <p>This is the login page</p>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            Hello {username}
        
        </div>
    )
}