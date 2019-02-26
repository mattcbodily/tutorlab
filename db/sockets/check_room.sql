-- select room_id from student_socket_room
-- where student = $1
-- and tutor = $2
-- and class = $3;

select room_id from student_socket_room
where room_id = $1;