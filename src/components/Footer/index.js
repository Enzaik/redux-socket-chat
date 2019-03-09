import React, { Component } from 'react';

// CONSTANTS
import { Styles } from '../../constants';
import { connect } from 'react-redux';
// COMPONENTS
import ConnectButton from './ConnectButton.js';
import StatusLine from './StatusLine.js';

// Footer with status line and connect button
class Footer extends Component {
    render() {
        
        
        
        return (this.props.users.length) ? <div style={Styles.footerStyle}>
            <StatusLine/>
            <ConnectButton/>
        </div> :
        <div style={Styles.footerStyleInit}>
            <StatusLine/>
            {this.props.connected ? <ConnectButton/> : null}
        </div>
    }
}

const mapStateToProps = (state) => ({
    connected: state.socketState.connected,
    user: state.messageState.user,
    users: state.messageState.users,
   // threads: state.messageState.threads,
    recipient: state.messageState.recipient
});

// Export props-mapped HOC
export default connect(mapStateToProps)(Footer);