import React from 'react';
import Formulaire from './Formulaire';
import moment from 'moment';
import Message from './Message';
import base from './base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';




class App extends React.Component{


	state = {
		messages: {},
		timestamp: Date.now(),
		lastseen: moment().startOf('hour').fromNow()
	
	
	}

	componentWillMount(){
		this.ref = base.syncState('/messages', {
			context: this,
			state: 'messages'

			

		});
	}

	componentDidUpdate(){
		//scroll to bottom
		this.messages.scrollTop = this.messages.scrollHeight;

	}


	addMessage = message => {
		//copy the state
		// ... mean spread ES6
		const messages = {...this.state.messages}
		//adding timestamp for each message
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		console.log(timestamp);
		//update the state
		//delete if more than 20 messages
		Object.keys(messages).slice(0, -20).map(key => messages[key] = null) //null equals delete
		
		this.setState({ messages });

	
		

	};

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo;
	};



	render() {
		
		
		{this.state.timestamp}
		
		const messages_const = Object

		.keys(this.state.messages)
		.map(key => <Message key={key} 
							 
							 details={this.state.messages[key]}							 
							 isUser={this.isUser}
							 timestamp={this.state.timestamp}
							 />

							 );


		
		
		
		
		
	return(

		
		<div className="box">

			<div>
				<div className="messages" 
					 ref={input => this.messages = input}
				>
					<ReactCSSTransitionGroup
					component="div"
					className="message"
					transitionName="message"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
					>
				
					{messages_const}

					</ReactCSSTransitionGroup>
				</div>
				<Formulaire addMessage={this.addMessage}
							pseudo={this.props.params.pseudo}
							length={140}
							lastseen={this.state.lastseen}
							
							
				/> 
					

			</div> 
		</div>

		)
	}
		static propTypes ={
			params: React.PropTypes.object.isRequired
		};
}

export default App;