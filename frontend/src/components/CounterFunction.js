import React, { useState } from "react";


function CounterFunction() {

    let [number, setNumber] = useState(0);

    return (
        <div>

            <h1>Counter Function</h1>
            <h2>Counter={number}</h2>

            <button onClick={e => increment()}>Function increment</button>
            <button onClick={e => decrement()}>Function Dectrement</button>


        </div>
    )

    function increment() {
        setNumber(number + 1);
    }
    function decrement() {
        setNumber(number - 1);
    }


}
export default CounterFunction;