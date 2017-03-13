import React from 'react';

class Connexion extends React.Component{



	goToChat = event => {
		event.preventDefault();
		// retrieve pseudo
		const pseudo = this.pseudoInput.value;
		// redirect to chatbox
		this.context.router.transitionTo(`/pseudo/${pseudo}`);

	};

	render() {



		return(
			<div className="connexionBox" onSubmit={e => this.goToChat(e)}>
			<form className="connexion"> 
			<h1 className="speakr" >- Speakr -</h1>
			<h6 className="speakr-motto" > the last twenty messages only</h6>
			<input type="text" 
			 	   placeholder="Enter your pseudo..." 
			 	   ref={input => {this.pseudoInput = input}}
				   required/>
				   <button type="submit"> Dive In </button>
			</form>
			</div>

		)
	}
	
	//asking context for transition router

	static contextTypes = {
		router: React.PropTypes.object
	}

}





export default Connexion;