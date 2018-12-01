import React, { Component } from 'react';
import './Conversation.scss';
import MessageView from './MessageView/MessageView';

class Conversation extends Component {
    render () {
        return (
            <div className="conversation-container">
                {
                this.props.messages.map((message) => {
                    return (
                        <MessageView
                            from={message.from}
                            message={message.content}
                            timestamp={message.timestamp}
                            key={message.id}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Conversation