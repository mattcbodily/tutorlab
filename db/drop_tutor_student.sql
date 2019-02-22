delete from tutor_class_join
where tutor_student = $1
and class = $2;