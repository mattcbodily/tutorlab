delete from class
where tutor = $1;

delete from tutors
where tutor_id = $1;