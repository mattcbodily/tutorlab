delete from tutor_location_join
where tutor = $1;

delete from class
where tutor = $1;

delete from tutors
where tutor_id = $1;