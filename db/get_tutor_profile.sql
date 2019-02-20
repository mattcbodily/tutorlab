select first_name, last_name, email, profile_pic, price, tutor_description from tutors
where tutor_id = $1;