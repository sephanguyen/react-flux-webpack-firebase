import React from 'react';
import Message from './Message.jsx';
import { Card, List } from 'material-ui';
import firebase from 'firebase';
import serviceAccount from '../../../config/learn-c3079-firebase-adminsdk-hnyia-4d9e474ec4.json';
import { values } from 'lodash';



class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {}
    };

    let messageRef = firebase
      .app()
      .database()
      .ref('messages');
    messageRef.on('child_added', msg => {
      
      if (this.state.messages[msg.key]) {
        return;
      }

      let msgValue = msg.val();
      msgValue.key = msg.key;
      this.state.messages[msgValue.key] = msgValue;
      this.setState({ message: this.state.messages });
    });

    messageRef.on('child_removed', msg => {
      let key = msg.key;
      delete this.state.messages[key];
      this.setState({ message: this.state.messages });
    });
  }

  render() {
    var messageNodes = values(this.state.messages).map((message, index) => {
      return <Message key={index} message={message.message} />;
    });

    return (
      <Card style={{ flexGrow: 2, marginLeft: 30 }}>
        <List>{messageNodes}</List>
      </Card>
    );
  }
}

export default MessageList;
