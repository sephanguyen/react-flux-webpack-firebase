import alt from '../alt';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDPgk7t4U_XRxRijoUEQQW7jUGVRCRFcSs',
  authDomain: 'learn-c3079.firebaseapp.com',
  databaseURL: 'https://learn-c3079.firebaseio.com/',
  projectId: 'learn-c3079',
  storageBucket: 'learn-c3079.appspot.com',
  messagingSenderId: '1096814500959'
});

class Actions {
  constructor() {
    this.generateActions('channelsReceived', 'channelsFailed');
  }
  login(args) {
    return dispatch => {
      let provider = new firebase.auth.GoogleAuthProvider();

      let messageRef = firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(authData) {
          console.log(authData);
          dispatch(authData);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }
}

export default alt.createActions(Actions);
