import React from "react";
class Apple extends React.Component{
    render(){
        const {AppleInfo} = this.props;
        const{ type, colour } = AppleInfo
        return(
            <h2>Im a {colour} {type} Apple!!!</h2>
        )
    }
}
export default Apple;
