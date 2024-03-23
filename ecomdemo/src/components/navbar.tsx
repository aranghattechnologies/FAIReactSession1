import { getSession } from "@/lib/auth/signin";
import { isLoggedIn } from "@/lib/auth/utils"
import Link from "next/link";

export default async function TopNavBar(){

    let isUserAuthenticated = await isLoggedIn();
    let user = await getSession();

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <Link href="/" className="text-decoration-none">MyLittleCart</Link>
                </div>
                <div className="row">
                    <div className="col"></div>
                    {isUserAuthenticated ? 
                    <div className="col-auto">
                        Welcome {user?.name}
                        <Link href="/cart" className="btn btn-link">My Orders</Link>
                        <Link href="/logout" className="btn btn-link">Logout</Link>
                    </div>
                        : <div className="col-auto">
                            <Link href="/login" className="btn btn-link">Login</Link>
                            <Link href="/register" className="btn btn-link">Register</Link>
                        </div>
                }
                </div>
            </div>
        </nav>
    )
}