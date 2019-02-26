import React, { Component } from 'react';
import axios from 'axios';
import TutorSocketsDisplay from './TutorSocketsDisplay';

class TutorSocketRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            room: []
        }
        this.getStudentRoomId = this.getStudentRoomId.bind(this);
        this.createRoom = this.createRoom.bind(this);
    }

    componentDidMount(){
        this.getStudentRoomId()
    }

    getStudentRoomId(){
        axios.get(`/api/studentroom/${this.props.class.student}/${this.props.class.tutor}/${this.props.class.class_id}`)
        .then(res => {
            const room = res.data;
            if(!room.length){
                this.createRoom();
            } else {
                this.setState({
                    room: res.data
                })
            }
        })
    }

    createRoom(){
        const newRoom = {
            student: this.props.class.student,
            tutor: this.props.class.tutor,
            classid: this.props.class.class_id
        };
        axios.post(`/api/createroom`, newRoom)
        .then(res => {
            this.setState({
                room: res.data
            })
        })
    }

    render(){
        console.log(this.state.room)
        const mappedRoom = this.state.room.map((roomObj, i) => {
            return (
                <TutorSocketsDisplay key = {i}
                                            room = {roomObj}
                                            class = {this.props.class} />
            )
        })
        return (
            <div>
                {mappedRoom}
            </div>
        )
    }
}

export default TutorSocketRoom;