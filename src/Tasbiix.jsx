import { useState } from "react"

const Tasbiix = () => {

    const [counter ,setColor]   = useState (0)

    const handleIncriment = () => {
        setColor(counter + 1)
    }

    const handleDecriment = () => {
       if (counter > 0){
        setColor (counter -1)}

    }
    
    const handleReset = () => {
        setColor(0)
    }


   


    return <div className="flex justify-center items-center h-screen">
        <div>
        <h1 style={{color : counter == 10 ? "orange" : ""}} className="text-8xl font-bold pl-28 pb-10">{counter}</h1>
        
        <button onClick={handleIncriment} className="bg-green-500 px-8 py-2 rounded-3xl text-3xl text-white">+</button>
        <button onClick={handleDecriment} className="bg-red-500 px-8 py-2 rounded-3xl text-3xl text-white ml-5">-</button>
        <button onClick={handleReset} className="bg-blue-500 px-8 py-2 rounded-3xl text-3xl text-white ml-5">x</button></div>

        

    </div>
}
export default Tasbiix