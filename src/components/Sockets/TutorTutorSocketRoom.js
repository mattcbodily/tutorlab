import React, { Component } from 'react';
import axios from 'axios';
import TutorTutorSocketDisplay from './TutorTutorSocketDisplay';


class TutorTutorSocketRoom extends Component {
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
        axios.get(`/api/tutorstudentroom/${this.props.class.tutor}/${this.props.class.class_id}/${this.props.class.tutor_student}`)
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
            tutor: this.props.class.tutor,
            classid: this.props.class.class_id,
            tutor_student: this.props.class.tutor_student
        }
        axios.post(`/api/createtutorroom`, newRoom)
        .then(res => {
            this.setState({
                room: res.data
            })
        })
    }

    render(){
        const mappedRoom = this.state.room.map((roomObj, i) => {
            return (
                <TutorTutorSocketDisplay key = {i}
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

export default TutorTutorSocketRoom;