insert into student_socket_room (
    tutor,
    class,
    tutor_student
) values (
    $1,
    $2,
    $3
)
returning room_id;