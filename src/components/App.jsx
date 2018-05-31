import React from 'react';
import MessageList from './message/MessageList';
import MessageBox from './message/MessageBox';
import Login from './Login';
import ChannelList from './channel/ChannelList';
import AppBar from 'material-ui/AppBar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class App extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    let view = <Login />;

    if (this.props.user) {
      view = (
        <div>
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
          <MessageBox />
        </div>
      );
    }

    return (
      <div>
        <AppBar title="Awesome Chat App" />
        { view }
      </div>
    );
  }
}

export default App;
