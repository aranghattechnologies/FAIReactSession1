
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { clearCookies } from "@/lib/auth/signin";


export default async function Logout() {
//  await clearCookies();
  redirect("/login");
}

