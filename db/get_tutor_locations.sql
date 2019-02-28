select l.lesson_location_name from lesson_location l
join tutor_location_join tl on l.lesson_location_id = tl.location
join tutors t on tl.tutor = t.tutor_id
where t.tutor_id = $1;