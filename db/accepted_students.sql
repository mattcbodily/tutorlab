select s.student_id, s.first_name, s.last_name, s.email from students s
join student_class_join sc on s.student_id = sc.student
join class c on sc.class = c.class_id
join tutors t on c.tutor = t.tutor_id
where sc.accepted = true
and t.tutor_id = $1;