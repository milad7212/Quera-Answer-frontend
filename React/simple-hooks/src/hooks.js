import { useState } from "react";

export function useStack() {
    // ...
    const [stack, setStack] = useState([])
    const push=(item)=>{
        setStack([...stack,item])
    }
    const pop =()=>{
        let arr=[...stack]
        arr.pop()
        setStack(arr)
    }

    return {stack,push,pop }
}

export function useCounter(start, finish) {
    // ...
    const [counter, setCounter] = useState(start);

    const conunt = () => {
        if (counter < finish) {
            setCounter(counter + 1);
        } else {
            setCounter(start);
        }
    };
    return [counter, conunt];
}