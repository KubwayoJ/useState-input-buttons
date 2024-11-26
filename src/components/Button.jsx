

// const Button = () => {
//   return (
    

//     <button className="bg-green-800 justify-center items-center text-white w-40">+</button>
    
    
//   )
// }

// export default Button


const Button = ({ bgColor ,btnText}) => {
  return (
    // <button className="bg-green-900 w-[100px] rounded-[5px] text-white "></button>
    <button className={`${bgColor} bg-slate-800 p-3 rounded-md `}>{btnText}</button>

  )
}

export default Button

// Button.propTypes={
//     bgColor: PropTypes.string,
//     btnText: PropTypes.string,

// }