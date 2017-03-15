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
		base.syncState('/messages', {
			context: this,
			state: 'messages',
			asArray: true
		});
	}

	componentDidUpdate(){
		//scroll to bottom
		this.messages.scrollTop = this.messages.scrollHeight;

	}


	addMessage = message => {
		// //copy the state
		// // ... mean spread ES6
		// const messages = {...this.state.messages}
		// //adding timestamp for each message
		// const timestamp = Date.now();
		// messages[`message : ${timestamp}`] = message;
		// console.log(timestamp);
		// base.push('messages', {
		// 	message
		// })
		base.push('messages', {
			data: message
  	}).then().catch(err => {
	    console.error(err)
	  })
		// //update the state
		// //delete if more than 20 messages
		// Object.keys(messages).slice(0, -20).map(key => messages[key] = null) //null equals delete
		//
		// this.setState({ messages });
		//
		//
		//
		//
	};

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo;
	};



	messageList() {
		const arr = this.state.messages
		if (arr && arr.length) {
			return arr.map((data, index) => {
				return (
					<Message
						key={index}
						isUser={this.isUser(data.pseudo)}
						data={data}
					/>
				)
			})
		}
	}

	render() {

		//
		//
		//
		// const messages_const = Object
		//
		// .keys(this.state.messages)
		// .map(key => <Message key={key}
		//
		// 					 details={this.state.messages[key]}
		// 					 isUser={this.isUser}
		// 					 timestamp={this.state.timestamp}
		// 					 />
		//
		// 					 );
		//
		//
		//
		//
		//
		//

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

					{this.messageList()}

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
