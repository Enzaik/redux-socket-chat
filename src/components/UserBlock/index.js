import React, { Component } from 'react';

// CONSTANTS
import { Styles } from '../../constants';
import { UI } from '../../constants';

// COMPONENTS
import UserInput from '../UserInput';
import RecipientSelector from '../RecipientSelector';
import PortSelector from '../PortSelector';
import MessageTransport from '../MessageTransport';
import MessageHistory from '../MessageHistory';
import Footer from '../Footer';
import { connect } from 'react-redux';

// Main client component
class UserBlock extends Component {

    // Render the component
    render() {
        return (this.props.users.length) ? <div style={Styles.userBlock}>
             
      <RecipientSelector/>

        </div>
:
<div style={Styles.noDisplayInit}>
             
      <RecipientSelector/>

        </div>
;
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
export default connect(mapStateToProps)(UserBlock);
