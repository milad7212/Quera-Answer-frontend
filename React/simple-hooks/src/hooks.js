import { useState } from "react";

export function useStack() {
    // ...
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