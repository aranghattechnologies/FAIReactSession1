import { http } from "../common/http";

export async function getProducts() {
    let products = await http.get("/products");
    return products;
}

export async function getProduct(id: string) {
    let product = await http.get(`/products?id=${id}`);
    return product[0];
}