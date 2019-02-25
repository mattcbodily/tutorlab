select sc.student, c.class_id, c.tutor from student_class_join sc
join class c on sc.class = c.class_id
where sc.student = $1
and c.tutor = $2;