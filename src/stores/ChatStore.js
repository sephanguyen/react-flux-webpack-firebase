import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = { user: null };
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;
    let listChannels = Object.keys.map(key => {
      let channel = {
        key
      };
      if (index == 0) {
        channel.selected = true;
        selectedChannel = channels[key];
      }
      return channel;
    });

    this.setState({
      channels: listChannels,
      selectedChannel
    });
  }

  @bind(Actions.login)
  log(user) {
    this.setState({ user });
  }
}

export default alt.createStore(ChatStore);
