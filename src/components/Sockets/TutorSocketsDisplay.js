import React, { Component } from 'react';
import io from 'socket.io-client';
import Nav from './../Nav/Nav';
import TutorSocketsMessages from './TutorSocketsMessages';

class TutorSocketsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: [],
            room: this.props.room.room_id,
            joined: false
        }
        this.joinRoom = this.joinRoom.bind(this);
        this.joinSuccess = this.joinSuccess.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    componentDidMount(){
        this.socket = io();
        this.socket.emit('join room', {
            room: this.state.room,
            student: this.props.class.student,
            tutor: this.props.class.tutor,
            classid: this.props.class.class_id
        })
        this.socket.on('room joined', data => {
            this.joinSuccess(data)
        })
        this.socket.on('room created', data => {
            this.joinRoom(data)
        })
        this.socket.on('message dispatched', data => {
            this.updateMessages(data)
        })
    }

    componentWillUnmount(){
        this.socket.disconnect();
    }

    sendMessage(){
        this.socket.emit('message sent', {
            message: this.state.input,
            room: this.state.room,
            student: this.props.class.student
        })
        this.setState({
            input: ''
        })
    }

    updateMessages(messages){
        this.setState({
            messages
        })
    }

    joinRoom(){
        if(this.state.room){
            this.socket.emit('join room', {
                room: this.state.room,
                student: this.props.class.student,
                tutor: this.props.class.tutor,
                classid: this.props.class.class_id
            })
        }
    }

    joinSuccess(messages){
        this.setState({
            joined: true,
            messages
        })
    }

    render(){
        const mappedMessages = this.state.messages.map((messageObj, i) => {
            return (
                <TutorSocketsMessages key = {i}
                                      message = {messageObj}/>
            )
        })
        return(
            <div className = 'Socketsdiv'>
                <Nav />
                <h1>Send a Message</h1>
                <div className = 'Messagesdiv'>
                    <div>
                        {mappedMessages}
                    </div>
                    {
                        this.state.joined
                            ?
                            <div>
                                <input className = 'Messageinput' value = {this.state.input} onChange = {e => {
                                    this.setState({
                                        input: e.target.value
                                    })
                                }} />
                                <button className = 'Messagebutton' onClick = {this.sendMessage}>Send</button>
                            </div>
                            :
                            <div>
                                Loading...
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default TutorSocketsDisplay;