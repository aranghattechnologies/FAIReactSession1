'use client'
import { register } from "@/lib/auth/register";
import { useEffect, useState } from "react";

export default function Register(){

    let [email,setEmail] = useState("");
    let [userExist,setUserExist] = useState(false);
    useEffect(() => {
        fetch(`/api/users/${email}`)
        .then(res => res.json())
        .then(data => {
            setUserExist(data.userexist);
        })
    },[email]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-6"></div>
                <div className="col">
                    <form action={register}>
                        <div className="mb-3 mt-5">
                            <label htmlFor="name" className="form-label">Name *</label>
                            <input type="name" className="form-control" required name="name" id="name" aria-describedby="nameHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email"
                           
                            className="form-label">Email address *</label>
                            <input 
                             onChange={(e) => setEmail(e.target.value)}
                            type="email" className="form-control" required  name="email" id="email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            {userExist ? <div className="text-danger" role="alert">
                                User already exists </div> : ""}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password *</label>
                            <input type="password" className="form-control" required name="password" id="password"/>
                        </div>
                        <button type="submit" disabled={userExist} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}