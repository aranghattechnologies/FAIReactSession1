import Link from "next/link";

export default function Product() {
    return (
        <div>
            <h1>Product</h1>
           <ul>
            <li>
                <Link href="/products/tea/10">Tea</Link>
            </li>
            <li>
                <Link href="/products/coffee/10">Coffee</Link>
            </li>
            <li>
                <Link href="/products/milk/10">Milk</Link>
            </li>
           </ul>

           <ul>
            <li>
                <Link href="/products/tea/10/icici20">Tea</Link>
            </li>
            <li>
                <Link href="/products/coffee/10/icici20/hdfc30">Coffee</Link>
            </li>
            <li>
                <Link href="/products/milk/10">Milk</Link>
            </li>
           </ul>
        </div>
    );
}