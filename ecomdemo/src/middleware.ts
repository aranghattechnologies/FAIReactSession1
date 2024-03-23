import { NextResponse, type NextRequest } from "next/server";
import { isLoggedIn } from "./lib/auth/utils";


export async function middleware(request:NextRequest) {
    const isAuthenticated = await isLoggedIn();

    if(request.url.includes("cart") && !isAuthenticated){
        return  NextResponse.redirect(new URL("/login",request.url));
    }
}

export const config = {
    matcher : "",
}