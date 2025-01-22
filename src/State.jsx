import { useState } from "react"

 const State = () => {
    const [color, setColor] = useState ()

    const handleRed = () =>
    {
        setColor(true)
    }

    const handleGreen = () => {
        setColor(false)
    }
    return <>
    <div style={{backgroundColor : color == false ? "green" : ""}} className="bg-orange-500 w-80 h-40 rounded-lg mt-20 ml-80 "></div>
    <button onClick={handleRed}  className="bg-orange-600 px-14 py-3 rounded-lg text-white text-2x1 ml-80">orange</button>
    <button onClick={handleGreen} className="bg-green-500 px-14 py-3 rounded-lg text-white text-2x1 mt-10 ml-10">green</button>

    </>
}
export default State