import React, { Component } from 'react';
import './App.scss';
import Conversation from './components/Conversation/Conversation';
import MessageInput from './components/MessageInput/MessageInput';
import { ApiAiClient } from 'api-ai-javascript';

class App extends Component {
  state = {
    messages: []
  }
  client = new ApiAiClient({accessToken: 'c61614b13f724f8f97e9854d29093d7b'});

  componentDidMount() {
    this.client.textRequest('hello').then((botResponse) => {
      this.addMessage('bot', botResponse.result.fulfillment.speech, botResponse.timestamp, botResponse.id);
    })
  }

  addMessage = (from, content, timestamp, id) => {
    let messages = [...this.state.messages];
    messages.push({from: from, content: content, timestamp: timestamp, id: id});
    this.setState({messages});
  }

  newMessage = (payload) => {
    this.addMessage(payload.from, payload.content, payload.timestamp, payload.id);
    this.client.textRequest(payload.content).then((botResponse) => {
      this.addMessage('bot', botResponse.result.fulfillment.speech, botResponse.timestamp, botResponse.id);
    })
  }

  render() {
    return (
      <div className="App">
        <Conversation messages={this.state.messages} />
        <MessageInput messageContent={this.newMessage}/>
      </div>
    );
  }
}

export default App;
