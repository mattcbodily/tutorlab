import React, { Component } from 'react';
import io from 'socket.io-client';

class TutorStudentSocketsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: [],
            room: '',
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
            student: this.props.class.tutor_student,
            tutor: this.props.class.tutor,
            classid: this.props.class.class_id
        })
        this.socket.on('room joined', data => {
            this.joinSuccess(data)
        })
        this.socket.on('room created', data => {
            this.joinRoom(data)
        })
        this.socket.on('student message dispatched', data => {
            this.updateMessages(data)
        })
    }

    componentWillUnmount(){
        this.socket.disconnect();
    }

    sendMessage(){
        this.socket.emit('student', {
            message: this.state.input,
            room: this.state.room,
            tutor: this.props.class.tutor,
            student: this.props.class.tutor_student
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
                student: this.props.class.tutor_student,
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
        return(
            <div>
                {this.state.joined ? <h1>My Room: {this.state.room}</h1> : null}
                <div>
                    {this.state.messages.map(messageObj => <h2 key = {messageObj.id}>{messageObj.message}</h2>)}
                </div>
                {
                    this.state.joined
                        ?
                        <div>
                            <input value = {this.state.input} onChange = {e => {
                                this.setState({
                                    input: e.target.value
                                })
                            }} />
                            <button onClick = {this.sendMessage}>Send</button>
                        </div>
                        :
                        <div>
                            Loading...
                        </div>
                }
            </div>
        )
    }
}

export default TutorStudentSocketsDisplay;