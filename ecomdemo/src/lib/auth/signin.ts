"use server";
import { cookies } from "next/headers";
import { http } from "../common/http";
import jwt from "jsonwebtoken";

export async function signin(preState:any,formData: FormData) {
    var signinRequest = {
        email : formData.get("email"),
        password : formData.get("password")
    }

    try{
        var response = await http.get(`/users?email=${signinRequest.email}`);
      
        if(response.length === 0){
            console.log("User not found");
            return;
        }

        if(response[0].password == signinRequest.password){
            //Todo: Create a JWT Token and and save in cookies
            const token = jwt.sign({id:response[0].id,name : response[0].name}
                        , "secret", {expiresIn : "1d"});
            console.log(token);

            cookies().set("token",token,{path:"/"});

            return { "status" : "success"}

        }
        
    }
    catch(e){
        console.log(e);
    }

    return { "status" : "failed"}
}

export async function getSession(){
    if(cookies().has("token")){
        const token = cookies().get("token");
        const decoded = jwt.verify(token?.value,"secret");
        return decoded;
    }
    return null;
}

export async function clearCookies(){
    cookies().delete("token");
}