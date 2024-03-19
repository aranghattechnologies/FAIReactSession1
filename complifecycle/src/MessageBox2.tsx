import { useEffect, useState } from "react";

type MessageBox2Props = {
    title :string,
    lastupdated?: Date;
}

export default function MessageBox2(props: MessageBox2Props) {

    
     let [totalupdates, setTotalUpdates] = useState(0);
     let [lastUpdatedDate, setLastUpdatedDate] = useState(new Date());
     //componentDidMount + componentDidUpdate
     useEffect(() => {
        console.log("Component Updated or Moounted");
     });

     //componentDidMount
     useEffect(() => {
        console.log("Component Mounted");
     }, []);

     //componentDidUpdate + shouldComponentUpdate
      useEffect(() => {
        console.log("Component Refreshed " + lastUpdatedDate.toString());
        setTotalUpdates(0);
      },[lastUpdatedDate,totalupdates,props]);

      //componentWillUnmount
      useEffect(() => {
        return function cleanup() {
            console.log("Component will unmount");
        }
      },[]);

    return ( <div>
        {props.title} <strong>{lastUpdatedDate.toString()}
        </strong>
        <br />
        <button onClick={() => { setTotalUpdates(totalupdates + 1)}}>Update</button>
        <button onClick={() => {setLastUpdatedDate(new Date())}}>Refresh</button>
        </div>);
}