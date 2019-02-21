select c.class_id from class c
join tutors t on c.tutor = t.tutor_id
join subjects s on c.subject = s.subject_id
where subject_name = $1
and tutor_id = $2;