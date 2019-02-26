import React, { Component } from 'react';
import axios from 'axios';
import TutorStudentSocketsDisplay from './TutorStudentSocketsDisplay';

class TutorSocketRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            room: []
        }
        this.getStudentRoomId = this.getStudentRoomId.bind(this);
        // this.createRoom = this.createRoom.bind(this);
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

    // createRoom(){
    //     const newRoom = {
    //         student: this.props.class.student,
    //         tutor: this.props.class.tutor,
    //         classid: this.props.class_id
    //     };
    //     axios.post(`/api/createroom`, newRoom)
    //     .then(res => {
    //         this.setState({
    //             room: res.data
    //         })
    //     })
    // }

    render(){
        const mappedRoom = this.state.room.map((roomObj, i) => {
            return (
                <TutorStudentSocketsDisplay key = {i}
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