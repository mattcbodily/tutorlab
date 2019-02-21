insert into student_class_join (
    student,
    class,
    accepted
) values (
    $1,
    $2,
    false
);