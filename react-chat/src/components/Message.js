import React from 'react';
import moment from 'moment';

class Message extends React.Component {
render() {
    const { data, isUser } = this.props

    if (isUser) {
        return (
            <p className="user-message">
                {data.message}
            </p>
        )
    } else {
        return (
            <p className="not-user-message">
                <strong>{data.pseudo}</strong>
                : {data.message}
                <em className="timestamp">
                  {moment(data.timestamp).fromNow()}
                </em>
            </p>
        )
    }
}
}

export default Message;
