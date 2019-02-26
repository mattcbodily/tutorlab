select room_id from student_socket_room
where tutor = $1
and class = $2
and tutor_student = $3;