import { useEffect, useState } from "react";

export function useDomainValidator() {
    
    let [email, setEmail] = useState("");
    let [isEmailValid, setIsEmailValid] = useState(false);
   
    useEffect(() => {
        if(email.includes("@aranghat.com")){
            setIsEmailValid(true);
        }
    },[email]);


    return {isEmailValid,setEmail};
}

