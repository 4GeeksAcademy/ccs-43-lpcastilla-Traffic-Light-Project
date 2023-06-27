import React, {useState} from "react";


//create your first component
const Home = () => {
	
	const [ color, setColor] = useState(null);
	
	const handleClick = (flashLight) => {
		setColor(flashLight);
	  };
	
	  return (
		<div className="trafficLight">
			<div className="upperPart d-flex">
				<div className="stick"></div>
			</div>
			<div className="container rounded text-center">
				<div className="redLight">
					<button
						className={`btn btn-danger rounded-circle ${color === "red" ? "active" : ""}`} 
						onClick={() => handleClick("red")}
						type="button"
					></button>
				</div>
				<div className="yellowLight">
					<button
						className={`btn btn-warning rounded-circle ${color === "yellow" ? "active" : ""}`} 
						onClick={() => handleClick("yellow")}
						type="button"
					></button>
				</div>
				<div className="greenLight">
					<button
						className={`btn btn-success rounded-circle ${color === "green" ? "active" : ""}`}
						onClick={() => handleClick("green")}
						type="button" 
					></button>
				</div>
			</div>
		</div>
	  );
	};
	
	export default Home;
	