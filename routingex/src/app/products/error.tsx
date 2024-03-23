'use client';
export default function Error({error}:{error: {message: string}}){
    return (
        <main style={{color:'red'}}>
            <h1>Sorry we coulnt load any products</h1>
            <p>{error.message}</p>
        </main>
    )
}