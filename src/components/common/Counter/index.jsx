import { useState } from "react";

const Counter = () => {

    const [num, setNum] = useState(0)

    const sumar = () => {
        setNum (num +1)
    }


    const restar = () => {
        if (num > 0) setNum (num -1)
    }


    return (
        <div>
            <button style={{ backgroundColor: "black", color:"white"}} onClick={restar} >-</button>
            <input type="text" value={num} />
            <button style={{ backgroundColor: "black", color:"white"}} onClick={sumar} >+</button>
        </div>

    )

};

export default Counter;