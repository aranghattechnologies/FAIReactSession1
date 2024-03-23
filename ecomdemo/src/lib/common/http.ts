export class http {
    static baseUrl = "http://localhost:8080";

    static async get(url: string) {
        return fetch(`${this.baseUrl}${url}`)
                    .then((response) => response.json());
    }

    static async post(url: string
                    , data: any) {
        return fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    static async put(url: string
                    , data: any) {
        return fetch(`${this.baseUrl}${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    static async delete(url: string) {
        return fetch(`${this.baseUrl}${url}`, {
            method: "DELETE",
        }).then((response) => response.json());
    }
}