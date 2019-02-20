update students
set(first_name, last_name, email) = ($1, $2, $3)
where student_id = $4;