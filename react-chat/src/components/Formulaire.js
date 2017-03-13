import React from 'react';




class Formulaire extends React.Component{

state = {
	length:this.props.length
}


createMessage = event => {
	event.preventDefault();

	
	const message = {
		message: this.message.value,
		pseudo: this.props.pseudo
	};

	this.props.addMessage(message);

	//reset the form
	this.messageForm.reset();
	const length = this.props.length;
	this.setState({length});
}

compteur = event => {
	const length = this.props.length - this.message.value.length;

	this.setState({length});
};





	render() {
					// styles for the emoji picker wrapper 

		return(

			<form className="form" 
				  onSubmit={e => this.createMessage(e)}
				  ref={input => this.messageForm = input}
			>
				 <textarea maxLength={this.props.length} 
				 	       required
				 	       ref={input => this.message = input}
				 	       onChange={e => this.compteur(e)}
				 >
				 </textarea>

				 <div className="info">
				 	{this.state.length} 
				 	
				 </div>
				 <div className="last-seen">
				   <span> Welcome to this Chat <strong> {this.props.pseudo}</strong> ! </span> 
				 	
				 </div>




				   <button type="submit"> Send </button>

			</form>
			


		)
	}
		static propTypes ={
			addMessage: React.PropTypes.func.isRequired,
			pseudo: React.PropTypes.string.isRequired,
			length: React.PropTypes.number.isRequired
		};

}

export default Formulaire;