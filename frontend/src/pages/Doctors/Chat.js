import React from 'react';

// Integrate the SDK
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';

// The following uses the App instance as an example.
export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            appConfig: {
                appID: 1263665104,        // The AppID you get from the ZEGOCLOUD admin console.
                serverSecret: '45553e637e99eccac94a8e7de56406b2' // The serverSecret you get from ZEGOCLOUD Admin Console.
            },
            // The userID and userName is a strings of 1 to 32 characters.
            // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
            userInfo: {
                // Your ID as a user.
                userID: '01',
                // Your name as a user.
                userName: 'Me',
                // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
                userAvatarUrl: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
        }
    }
    async componentDidMount() {
        const zimKit = new ZIMKitManager();
        const token = zimKit.generateKitTokenForTest(this.state.appConfig.appID, this.state.appConfig.serverSecret, this.state.userInfo.userID);
        await zimKit.init(this.state.appConfig.appID);
        await zimKit.connectUser(this.state.userInfo, token);
    }
    render() {
        return (
            <Common></Common> 
        );
    }
}