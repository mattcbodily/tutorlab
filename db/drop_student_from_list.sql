delete from student_class_join
where student = $1
and class = $2;