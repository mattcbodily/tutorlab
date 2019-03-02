select t.tutor_id, t.first_name, t.last_name, t.email, t.profile_pic, c.class_id from tutors t
join class c on t.tutor_id = c.tutor
join tutor_class_join tc on c.class_id = tc.class
where tc.accepted = true
and tc.tutor_student = $1;