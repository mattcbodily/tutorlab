select t.tutor_id, t.first_name, t.last_name, t.email, c.class_id from tutors t
join tutor_class_join tc on t.tutor_id = tc.tutor_student
join class c on tc.class = c.class_id
where tc.accepted = true
and c.tutor = $1;