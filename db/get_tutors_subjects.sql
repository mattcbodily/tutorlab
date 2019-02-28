select s.subject_name from subjects s
join class c on s.subject_id = c.subject
join tutors t on c.tutor = t.tutor_id
where t.tutor_id = $1;