import Actions from '../actions';
import firebase from 'firebase';

let ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        let messageRef = firebase
          .app()
          .database()
          .ref('channels');
        messageRef.once('value', dataSnapshot => {
          let channels = dataSnapshot.val();
          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
};
