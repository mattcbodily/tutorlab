select room, message from student_socket_message_join
where room = $1;