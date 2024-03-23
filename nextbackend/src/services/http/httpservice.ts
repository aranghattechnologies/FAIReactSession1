

export class http {

    static baseUrl = "http://localhost:8080";

    static async get(url: string, options?: RequestInit) {

        const response = await fetch(`${http.baseUrl}${url}`, {
        method: "GET",
        ...options,
        });

        return response;
    }
    
    static async post(url: string, options?: RequestInit) {
        const response = await fetch(`${http.baseUrl}${url}`, {
        method: "POST",
        ...options,
        });
        return response;
    }

    static async put(url: string, options?: RequestInit) {
        const response = await fetch(`${http.baseUrl}${url}`, {
        method: "PUT",
        ...options,
        });
        return response;
    }

    static async delete(url: string, options?: RequestInit) {
        const response = await fetch(`${http.baseUrl}${url}`, {
        method: "DELETE",
        ...options,
        });
        return response;
    }
}