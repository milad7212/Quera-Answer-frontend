import { useEffect, useState } from "react";

export function useTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isStop, setIsStop] = useState(false);
    useEffect(() => {
        if (!isStop) {
            const timing = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
            return () => clearInterval(timing);
        }
    }, [seconds, isStop]);
    const reset = () => {
        setSeconds(0);
        setIsStop(false);
    };
    const stop = () => {
        setIsStop(true);
    };
    const resume = () => {
        setIsStop(false);
    };
    // ...
    return { seconds, reset, stop, resume };
}

// const [secounds, setSecounds] = useState(0);
// useEffect(() => {
//     const timing = setInterval(() => {
//         setSecounds(secounds + 1);
//     }, 1000);
//     return () => clearInterval(timing);
// }, []);

// const stop = () => {};
// const resume = () => {};
// const reset = () => {};
// // ...
// return { secounds };