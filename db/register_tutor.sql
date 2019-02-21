insert into tutors (
    first_name,
    last_name,
    email,
    password,
    price,
    tutor_description
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
) 
returning tutor_id, first_name, last_name, email, price, tutor_description;