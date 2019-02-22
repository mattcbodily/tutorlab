update tutor_class_join
set accepted = true
where tutor_student = $1
and class = $2;