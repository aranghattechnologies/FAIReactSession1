import Image from "next/image";
import styles from "./page.module.css";
import { getProducts } from "@/lib/cart/products";
import Link from "next/link";

export default async function Home() {

  let products = await getProducts();
  console.log(products);

  return (
    <main className={styles.main}>
        <div className="container-fluid">
           <div className="row">
            {products.map((product:any) => 
            <div className="col-sm-13 col-md-6 col-xl-4 col-3 py-4">
                <Link href={"/product/" + product.id} className=" text-decoration-none card mt-2 h-100 shadow">
                    <img src={product.thumbnail} className="img-fluid h-50"/>
                    <div className="card-body">
                      <h1>{product.title}</h1>
                      {product.description}
                      <h5>Rs. {product.price}</h5>
                    </div>
                </Link>
            </div>  
            )}
           </div>
        </div>
    </main>
  );
}
