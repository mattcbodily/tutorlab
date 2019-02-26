import React, { Component } from 'react';
import axios from 'axios';
import StudentSocketsDisplay from './StudentSocketsDisplay';

class StudentSocketRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            room: []
        }
        this.getStudentRoomId = this.getStudentRoomId.bind(this);
    }

    componentDidMount(){
        this.getStudentRoomId()
    }

    getStudentRoomId(){
        axios.get(`/api/studentroom/${this.props.class.student}/${this.props.class.tutor}/${this.props.class.class_id}`)
        .then(res => {
            this.setState({
                room: res.data
            })
        })
    }

    render(){
        const mappedRoom = this.state.room.map((roomObj, i) => {
            return (
                <StudentSocketsDisplay key = {i}
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

export default StudentSocketRoom;