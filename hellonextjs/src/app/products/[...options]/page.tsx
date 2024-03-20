export default function MultiDiscountPage({params}: {p: any[]}) {
    return (
        <div>
            
            <h1>Product : {params.options[0]}</h1>
            <p>Discount : {params.options[1]}</p>
            {/* <p>Discount: {options.params[1]}</p>
            {options.params[2] && <p>Additional Discount: {options.params[2]}</p>}
            {options.params[3] && <p>Additional Discount: {options.params[3]}</p>}
            {options.params[4] && <p>Additional Discount: {options.params[4]}</p>} */}
        </div>
    );
}