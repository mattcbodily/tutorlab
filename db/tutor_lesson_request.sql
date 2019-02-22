insert into tutor_class_join (
    tutor_student,
    class,
    accepted
) values (
    $1,
    $2,
    false
);