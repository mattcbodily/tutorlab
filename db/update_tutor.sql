update tutors
set(first_name, last_name, email, price, tutor_description) = ($1, $2, $3, $4, $5)
where tutor_id = $6;