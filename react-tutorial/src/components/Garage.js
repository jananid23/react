import Car from './Car';
import Apple from './Apple';

function Garage(){
// const brand = 'Ford';
// const colour = 'Black'
const carInfo = {brand:"Ford",colour:"black "}
  return(
    <div>
      <h1>who lives in garage???</h1>
      {/* <Car brand={brand} colour={colour}/> */}
      <Car carInfo={carInfo}/>
      <Apple/>
    </div>
    
  )
}

export default Garage;