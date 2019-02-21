update student_class_join
set accepted = true
where student = $1
and class = $2;