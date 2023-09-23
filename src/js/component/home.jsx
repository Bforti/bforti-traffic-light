import React, {useState} from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component




const Home = () => {
const [roja, setLuzRoja]= useState("light")
const [amarilla, setLuzAmarilla]= useState("light")
const [verde, setLuzVerde]= useState("light")

	return (
		<div className="text-center">
			<div className="cable"></div>
			<div className="traffic-light">
               <div id="red" className={roja} onClick={()=>{setLuzRoja("light On"), setLuzVerde("light"), setLuzAmarilla("light")}}></div>
               <div id="yellow" className={amarilla} onClick={()=>{setLuzAmarilla("light On"), setLuzRoja("light"), setLuzVerde("light")}}></div>
               <div id="green" className={verde} onClick={()=>{setLuzVerde("light On"), setLuzRoja("light"), setLuzAmarilla("light")}}></div>
            </div>
			
		</div>
	);
};

export default Home;
