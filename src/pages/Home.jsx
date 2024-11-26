// import { useState } from "react"


// const Home = () => { 
//     const [counter,setCounter] =useState(0);
//   return (
//     <div>
//     <div className="h-screen w-[400px] justify-center items-center text-white bg-red-600 ">
//     <button className="bg-red-800 rounded-lg" onClick={() =>setCounter(counter-1)}>-</button>
//     <button onClick={() =>setCounter(counter-1)}>+</button>


//     </div>
//     </div>

//   )
// }

// export default Home
import Button from "../components/Button"
const Home = () => {
  return (
    
    <div className=" w-[30%] bg-slate-600 shadow-md mx-auto flex items-center justify-center rounded-lg">
      
    <form className="bg-yelow-900  h-[40vh] w-[600px]  flex flex-col justify-center items-center space-x-4 space-y-5 rounded-lg">
    <h1 className="text-xl">Type your name</h1>
    <input className="px-4 py-2 rounded-lg  bg-slate-300 focus:ring-1" type="text" placeholder="your name"/>
    <div className="flex space-x-4 mt-50 ">
        <Button bgColor={'bg-blue-800 text-white px-10'} btnText='clear'/>
        <Button bgColor={'bg-blue-800 text-white px-10'} btnText='reset'/>
    </div>

    </form>


    </div>
  )
}

export default Home