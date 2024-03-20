import { memo, useEffect } from "react"

 const Message = memo(function({message}: {message: string}) {

    useEffect(() => {
        console.log("Component Message got updataed");
    });

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
});

export default Message;