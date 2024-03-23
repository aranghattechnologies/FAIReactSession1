'use client';

import { signin } from "@/lib/auth/signin";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function Login(){


    let [status,formState] = useFormState(signin,{status: ""});
    let [isLoggInFailed,setIsLoggInFailed] = useState(false);

    useEffect(() => {
        if(status?.status === "failed"){
            setIsLoggInFailed(true);
        }
        else if(status?.status === "success"){
            setIsLoggInFailed(false);
            window.location.href = "/";
        }
          
    },[status]);

    return(
        <main>
            <div className="container-fluid">
               <div className="row">
               <div className="col-6"></div>
                <div className="col-6">
                <h1>Login</h1>
            <form action={formState}>
                {isLoggInFailed ? <div className="alert alert-danger p-1 text-center" role="alert">
                    Login failed </div> : ""}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                </div>
               </div>
            </div>
        </main>
    )
}