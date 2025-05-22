import Car from './Car'; 
import Apple from './Apple';

function Garage(){
// const brand = 'Ford';
// const colour = 'Black'
const carInfo = {brand:"Ford",colour:"black "}
// const carInfo = {}
const AppleInfo = {type:"Fuji",colour:"red"}
const isDoorOpened = true;
const showcarInfo  = carInfo.brand != undefined && carInfo.colour != undefined ?
      <Car carInfo={carInfo}/> : null
const carlist = [
  { brand:"BMW",colour:"red"},
  { brand:"Ford",colour:"green"}
]
  return(
    <div>
      <h1>who lives in garage???</h1>
      {/* <Car brand={brand} colour={colour}/> */}
      {showcarInfo && <Car carInfo = {carInfo}/>}
      
      <Apple AppleInfo={AppleInfo}/>
      {/* <Gun/> */}
      {isDoorOpened?<h2>door is open</h2>:<h2>door is closed</h2>}
      <ul>
        {carlist.map((carInfo)=> <li key={carInfo.brand}> <Car carInfo={carInfo}/></li>)}
        </ul> 

    </div>
    
  )
}

export default Garage;