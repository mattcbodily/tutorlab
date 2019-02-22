create table if not exists students (
    student_id serial primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    password varchar(200),
    profile_pic varchar(200),
    age integer
);

create table if not exists tutors (
    tutor_id serial primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    password varchar(200),
    profile_pic varchar(200),
    age integer,
    price integer,
    tutor_description text
);

create table if not exists subjects (
    subject_id serial primary key,
    subject_name varchar(50)
);

create table if not exists lesson_location (
    lesson_location_id serial primary key,
    lesson_location_name varchar(100)
);

create table if not exists class (
    class_id serial primary key,
    tutor int references tutors(tutor_id),
    subject int references subjects(subject_id)
);

create table if not exists student_class_join (
    student_class_join_id serial primary key,
    student int references students(student_id),
    class int references class(class_id),
    accepted boolean
);

create table if not exists tutor_location_join (
    tutor_location_join_id serial primary key,
    tutor int references tutors(tutor_id),
    location int references lesson_location(lesson_location_id)
);

create table if not exists tutor_class_join (
    tutor_class_join_id serial primary key,
    tutor_student int references tutors(tutor_id),
    class int references class(class_id),
    accepted boolean
);