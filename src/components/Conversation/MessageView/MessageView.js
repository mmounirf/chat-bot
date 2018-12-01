import React from 'react';
import './MessageView.scss';
import moment from 'moment'

const MessageView = ( props ) => {
    return (
        <div className={`message-container from-${props.from}`}>
            <p className="message-content">{props.message}</p>
            <span className="message-time">{moment(props.timestamp).fromNow()}</span>
        </div>
    )
}

export default MessageView