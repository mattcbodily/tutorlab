select t.tutor_id, t.first_name, t.last_name, t.email from tutors t
join class c on t.tutor_id = c.tutor
join student_class_join sc on c.class_id = sc.class
where sc.accepted = true
and sc.student = $1;