import React from 'react';


class Message extends React.Component{


	beforeRender = (isUser) => {
		if(isUser) {
			return(
				

				<p className="user-message">

					 {this.props.details.message}  

				</p>

				   )
	  	    	}
	  else {
	  	return(
	  			<p className="not-user-message">

					<strong>{this.props.details.pseudo}</strong> : {this.props.details.message} <strong>{this.props.timestamp} </strong>

				</p>


	  		  )

	        }

	       };

	render() {
		return this.beforeRender(this.props.isUser(this.props.details.pseudo));
	}
		static propTypes ={
			details: React.PropTypes.object.isRequired

		};
}

export default Message;