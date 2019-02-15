select t.first_name, t.last_name, t.email, t.price from tutors t
join class c on t.tutor_id = c.class_id
where subject = 1;

-- this is being used as test data and needs to be changed so that it is dynamic