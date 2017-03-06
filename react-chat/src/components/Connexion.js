import React from 'react';

class Connexion extends React.Component{
	render() {
		return(
			<div className="connexionBox">
			<form className="connexion"> 
			<h1 className="speakr" >- Speakr -</h1>
			<h6 className="speakr-motto" >six messages, not one more</h6>
			<input type="text" 
			 	   placeholder="Enter your pseudo..." 
			 	   required 
				   required/>
				   <button type="submit"> Go </button>
			</form>
			</div>


		)
	}
}

export default Connexion;