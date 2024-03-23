'use server'

import { redirect } from "next/navigation";
import { http } from "../common/http"

export async function  register(formData: FormData) {
    
    var registerRequest = {
        name : formData.get("name"),
        email : formData.get("email"),
        password : formData.get("password")
    }

    try{
        await http.post("/users",registerRequest);
    }
    catch(e){
        console.log(e);
    }

    redirect("/login");
}