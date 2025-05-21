function Car(props){
    // const { brand, colour } = props
    const { carInfo }= props
    const { brand, colour } = carInfo

const text = `Hi , im a  ${colour} ${brand} car`;

return (
<h2> {text} </h2>
);
}
export default Car;