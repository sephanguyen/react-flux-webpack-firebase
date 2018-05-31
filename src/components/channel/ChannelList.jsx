import React from 'react';
import Chanel from './Channel';
import { Card, List, CircularProgress } from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../../stores/ChatStore';

@connectToStores
class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    console.log(ChatStore)
    ChatStore.getChannels();
  }

  
  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }


  render() {

    if(!this.props.channels) {
      return(
        <Card style= {{ flexGrow: 1}}>
          <CircularProgress
          mode = "indeterminate"
          style ={{paddingTop: '20px',
            paddingBottom: '20px',
            margin: '0 auto',
            display: 'block',
            width: '60px'
          }}/>
        </Card>
      )
    }
    var chanelNodes = Object.keys(this.props.channels).map((key, index) => {
      let channel = this.props.channels[key];
      return <Chanel key={index} channel={channel} />;
    });

    return (
      <Card style ={{flexGrow: 1}}>
        <List>{chanelNodes}</List>
      </Card>
    );
  }
}

export default ChannelList;
