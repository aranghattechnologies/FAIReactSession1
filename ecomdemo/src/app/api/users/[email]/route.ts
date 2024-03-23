import { http } from "@/lib/common/http";

export async function GET(request: Request
    , { params }: { params :{ email: string }}) {
    let users = await http.get(`/users?email=${params.email}`);
    console.log(params.email);
    console.log(users);
    if (users.length > 0) 
        return new Response(JSON.stringify({userexist : true}), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    else
        return new Response(JSON.stringify({userexist : false}), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    
}