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

// Main client component
class HistoryBlock extends Component {

    // Render the component
    render() {
        return <div class = 'histories' style={Styles.clientStyle}>


            <Footer/>

            <UserInput/>

            <PortSelector/>           

            <MessageHistory/>

            <MessageTransport/>

           

        </div>;
    }
}

// Export props-mapped HOC
export default HistoryBlock;
