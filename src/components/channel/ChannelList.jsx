import React from 'react';
import Chanel from './Channel';
import { Card, List } from 'material-ui';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ['Dogs', 'Cats']
    };
  }

  render() {
    var chanelNodes = this.state.channels.map((channel, index) => {
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
