insert into student_socket_message_join (
    room,
    message,
    tutor,
    student
) values (
    $1,
    $2,
    $3,
    $4
);