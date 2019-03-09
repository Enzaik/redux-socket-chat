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

// Main client component
class UserBlock extends Component {

    // Render the component
    render() {
        return (this.props.connected) ? <div style={Styles.userBlock}>
             
      <RecipientSelector/>

        </div>
:
<div style={Styles.userBlock}>
             
      <RecipientSelector/>

        </div>
;
    }
}

// Export props-mapped HOC
export default UserBlock;
