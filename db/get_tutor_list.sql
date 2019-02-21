select t.tutor_id, t.first_name, t.last_name, t.email, t.price from tutors t
join class c on t.tutor_id = c.tutor
join subjects s on c.subject = s.subject_id
where s.subject_name = $1;