import { useState } from "react";
function Favoritecolor(){
    //let color="white";
    const [color,setColor]= useState('Blue')
    return (
        <>
        <h1> My Favorite color is {color}</h1>
        <button onClick={()=> {setColor('red')}}> change color </button>
        </>
    )

}
export default Favoritecolor;

