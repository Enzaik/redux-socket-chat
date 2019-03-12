import React, { Component } from 'react';

// CONSTANTS
import { Styles } from '../../constants';

// COMPONENTS
import UserInput from '../UserInput'
import RecipientSelector from '../RecipientSelector';
import PortSelector from '../PortSelector';
import MessageTransport from '../MessageTransport';
import MessageHistory from '../MessageHistory';
import Footer from '../Footer';
import { connect } from 'react-redux';

// Main client component
class HistoryBlock extends Component {

    // Render the component
    render() {
        return (this.props.users.length) ? <div className = 'histories' style={Styles.clientStyle}>


            <Footer/>

            <UserInput/>

            <PortSelector/>           

            <MessageHistory/>

            <MessageTransport/>

           

        </div>
        :
        <div className = 'histories' style={Styles.clientStyleInit}>


            <Footer/>

            <UserInput/>

            <PortSelector/>           

            <MessageHistory/>

            <MessageTransport/>

           

        </div>
        
        ;
    }
}

// Export props-mapped HOC
const mapStateToProps = (state) => ({
    connected: state.socketState.connected,
    user: state.messageState.user,
    users: state.messageState.users,
   // threads: state.messageState.threads,
    recipient: state.messageState.recipient
});

// Export props-mapped HOC
export default connect(mapStateToProps)(HistoryBlock);
