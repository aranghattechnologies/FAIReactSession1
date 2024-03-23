import Link from "next/link";

export default function ProductNav() {
    return (
        <main>
            <h1>ProductNav</h1>
            <Link href="/products?type=Beverages">Beverages</Link> | 
            <Link href="/products?type=Electronics">Electronics</Link>
            <hr />
            <input type="checkbox" /> Arrives Today
            <input type="checkbox" /> Arrives Tomorrow
        </main>
    )
}