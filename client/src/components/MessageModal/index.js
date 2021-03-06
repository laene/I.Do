import React, {Component} from "react";
import { Button, Modal} from 'react-bootstrap';
import MessageContact from '../MessageContact'
import API from '../../utils/API.js'

class MessageModal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
            show: false,
            emailArray: ["kbauertx@gmail.com", "kylecom2000@me.com"],
            textArray: ["4099397554"],
            subject: "",
            message: "THIS IS A TEST MESSAGE",
            guestCheckboxes: {}
        };       
    }

    // --------- CHECKBOX STUFF ----------
    handleCheckboxChange = changeEvent => {
        console.log("handleCheckboxChange")
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            guestCheckboxes: {
                ...prevState.guestCheckboxes,
                [name]: !prevState.guestCheckboxes[name]
            }
        }));
    };

    componentDidMount(){
        const guestCheckboxes = this.props.contacts.reduce(
            (checkboxObj, contact) => ({
                ...checkboxObj,
                [contact.id]: false
            }),
            {}
        )
        this.setState({ 
            guestCheckboxes

        });
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    sendMessageButton= (event) => {
        event.preventDefault();

        let messageObject = {
            emailArray: this.state.emailArray,
            // textArray: this.state.textArray,
            subject: `You have a message from ${this.props.name}`,
            message: this.state.message
        };

        API.message(messageObject, result => {
            console.log("send message button API result:", result)
        });
        this.handleClose();
    }

    render(props) {
        return (
            <div>
                 <Button bsStyle="primary" 
                   onClick={this.handleShow} 
                  style={   {   background: this.props.secondary,
                                color: this.props.font,
                                marginLeft: "25%",
                                width: "50%",
                                border: 0,
                                borderRadius: "25px",
                                outline: "none"}}>
            Message
          </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Message a Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {this.props.contacts.map(contact=>
                            <MessageContact {...contact}
                                onCheckboxChange={this.handleCheckboxChange}
                                secondary={this.props.secondary}
                                font={this.props.font}
                                key={contact._id}
                                />
                        )}
                    </ul>
                
                </Modal.Body>
                <Modal.Footer>
                    
                {/* Handle Send Button */}
                <Button onClick={this.sendMessageButton}>Send</Button>
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        )
    }
}

export default MessageModal;