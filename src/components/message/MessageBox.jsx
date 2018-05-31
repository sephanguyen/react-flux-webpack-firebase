import React from 'react';
import { Card } from 'material-ui';
import firebase from 'firebase';





class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  
  onKeyUp(evt) {
    if(evt.keyCode === 13 && evt.target.value.trim() != '') {
      evt.preventDefault();
      let messageRef = firebase.app().database().ref('messages');
      messageRef.push({
        message: this.state.message
      });
      this.setState({
        message: ''
      })
      
      // console.log("send new message", evt.target.value);
    }
  }

  render() {
    return (
      <Card
        style={{
          maxWidth: 1500,
          margin: '30px auto',
          padding: 30
        }}
      >
        <textarea
          value={this.state.message}
          onChange={(event) => this.onChange(event)}
          onKeyUp={(event) => this.onKeyUp(event)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }}
        />
      </Card>
    );
  }
}

export default MessageBox;
