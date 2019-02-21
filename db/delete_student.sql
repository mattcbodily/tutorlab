delete from student_class_join
where student = $1;

delete from students
where student_id = $1;