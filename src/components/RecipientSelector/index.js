import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONSTANTS
import { Styles, UI } from '../../constants';

// ACTIONS
import { recipientChanged } from '../../store/message/actions';

// Dropdown to select recipient to message
class RecipientSelector extends Component {

    // A recipient has been selected
    handleRecipientChange = event => {
        this.props.recipientChanged(event.target.value);
        //alert(event.target.value)
    };

    render() {
        return (this.props.users.length)
            ? <div style={Styles.fieldStyle}>
                <label style={Styles.labelStyle} htmlFor="selectRecipient">Recipient</label>
        

            <ul value={this.props.recipient}>
            {this.props.users.map( (user, index) =>
                        <li style={Styles.userList}key={index} value={user} onClick={this.handleRecipientChange}>{user}</li>)}
                
            </ul>
              </div>
            : null;
    }
}

// Map required state into props
const mapStateToProps = (state) => ({
    recipient: state.messageState.recipient,
    users: state.messageState.users

});

// Map dispatch function into props
const mapDispatchToProps = (dispatch) => ({
    recipientChanged: recipient => dispatch(recipientChanged(recipient))
});

// Export props-mapped HOC
export default connect(mapStateToProps, mapDispatchToProps)(RecipientSelector);
