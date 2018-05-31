import React from 'react';
import MessageList from './message/MessageList';
import MessageBox from './message/MessageBox';
import ChannelList from './channel/ChannelList';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar title="Awesome Chat App" />
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1500,
            width: '100%',
            margin: '30px auto 30px'
          }}
        >
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox/>
      </div>
    );
  }
}

export default App;
