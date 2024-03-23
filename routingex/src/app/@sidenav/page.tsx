import Link from "next/link";

export default function SideNav(){
    return (
        <div>
            <h1>Side Nav</h1>
            <Link href="/users">Users</Link> <br />
            <Link href="/products">Products</Link>
        </div>
    )
}