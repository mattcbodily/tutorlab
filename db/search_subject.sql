select * from subjects
where subject_name like $1
limit 1;