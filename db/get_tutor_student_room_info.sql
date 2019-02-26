select tc.tutor_student, c.class_id, c.tutor from tutor_class_join tc
join class c on tc.class = c.class_id
where tc.tutor_student = $1
and c.tutor = $2;