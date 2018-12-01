import React, { Component } from 'react';
import './MessageInput.scss';
import moment from 'moment';
class MessageInput extends Component {

    state = {message: ''}

    handleChange = (e) => {
        this.setState({message: e.target.value, from: 'client'})
    }

    render () {
        return (
            <div className="message-input-container">
                <input type="text" placeholder="Your Message" onChange={this.handleChange} />
                <button onClick={this.props.messageContent.bind(this, 
                        {
                            from: 'client',
                            content: this.state.message,
                            timestamp: moment().toISOString(),
                            id: moment().unix()
                        }
                    )}>
                    Send
                </button>
            </div>
        )
    }
}


export default MessageInput