

export default function ProductPage({params}: {params :{name: string, discount: string}}) {



    return (
        <div>
            <h1>Product : {params.name}</h1>
            <p>Discount: {params.discount}</p>
        </div>
    );
}