import { useEffect } from "react";
import { useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(17);

    useEffect(() => {
            let countDown = setInterval(() => {
                setCounter((prevCount) => {
                    if (prevCount + 1 === 25) {
                        clearInterval(countDown);
                    }
                    return prevCount + 1;
                })
            }, 1000);

            return () => {
                clearInterval(countDown);
            }
        },[]);

    return (
        <>
            Counter: {counter}
        </>
    )
}

export { Counter }