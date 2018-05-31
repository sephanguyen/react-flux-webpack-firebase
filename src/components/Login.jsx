import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';
import { Card, CardText, RaisedButton } from 'material-ui';

class Login extends React.Component {

    onClick() {
        Actions.login();    
    }

    render() {

        return (
            <Card style={{
                'maxWidth': '800px',
                'margin': '30px auto',
                'padding': '50px'
            }}>
                <CardText style= {{
                    'textAlign': 'center'
                }}>
                    To start  chatting away, please log in  with your Google account
                </CardText>
                <RaisedButton style= {{
                    display: 'block'
                }} onClick= {() => this.onClick()} label="Login with Gogoogle"/>
            </Card>
        );
    }
}

export default Login;
