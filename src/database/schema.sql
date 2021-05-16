CREATE DATABASE IF NOT EXISTS hospx;

CREATE  EXTENSION  IF NOT EXISTS "uuid-ossp";

CREATE TABLE  IF NOT EXISTS patients(
    id UUID unique not null default uuid_generate_v4(),
    name varchar not null,
    birth_date date not null,
    cpf varchar(11) not null,
    rg varchar not null,
    gender varchar(4),
    street text,
    district varchar,
    housenumber integer,
    zip_code integer,
    city varchar,
    state varchar(2),
    country varchar,
    mother_name varchar not null,
    occupation varchar,
    marital_status varchar,
    ethnicity varchar,
    email varchar
);
CREATE TABLE IF NOT EXISTS patients_phones(
    phone_number varchar not null,
    patient_id UUID ,
    type varchar,
    FOREIGN KEY(patient_id) REFERENCES patients(id)
);
CREATE TABLE IF NOT EXISTS doctors(
    id UUID unique not null default uuid_generate_v4(),
    name varchar not null,
    birth_date date not null,
    cpf varchar(11) not null,
    rg varchar not null,
    crm varchar unique not null ,
    gender varchar(4),
    street text,
    district varchar,
    housenumber integer,
    zip_code integer,
    city varchar,
    state varchar(2),
    country varchar,
    mother_name varchar not null,
    email varchar
);

CREATE TABLE IF NOT EXISTS specialty(
    id serial primary key not null unique,
    specialty_name varchar not null
);

CREATE TABLE IF NOT EXISTS medical_specialty(
  id_specialty serial,
  id_doctor UUID,
  FOREIGN KEY(id_specialty) REFERENCES specialty(id),
  FOREIGN KEY(id_doctor) REFERENCES doctors(id)
);

CREATE TABLE IF NOT EXISTS questionary(
    id serial not null unique,
    date_time timestamp  not null default current_timestamp,
    alcoholic_drink char,
    alcoholic_drink_freq char,
    smoke char,
    quit_smoking char,
    physical_activity char,
    physical_activity_freq char,
    high_blood_pressure char,
    high_blood_pressure_control char,
    control_medication_hbp char,
    heart_problem char,
    cholesterol_rate char,
    diabetic char,
    dpoc char,
    depression char,
    cancer char,
    health_satisfaction char,
    life_quality_satisfaction char,
    body_weight decimal,
    height decimal,
    imc decimal
);

CREATE TABLE IF NOT EXISTS anamnesis(
    id serial unique not null,
    id_patient UUID not null,
    date_time timestamp  not null default current_timestamp,
    id_questionary serial not null ,
    FOREIGN KEY(id_patient) REFERENCES patients(id),
    FOREIGN KEY(id_questionary) REFERENCES questionary(id)
);

CREATE TABLE IF NOT EXISTS medicines(
    id serial unique not null,
    name varchar not null,
    frequency varchar not null,
    schedule varchar not null
);

CREATE TABLE IF NOT EXISTS  doctors_prescription(
    id serial unique not null,
    id_patient  UUID not null,
    date_time timestamp not null default current_timestamp,
    id_doctor  UUID not null,
    id_medicines serial,
    FOREIGN KEY(id_patient) REFERENCES patients(id),
    FOREIGN KEY(id_doctor) REFERENCES doctors(id),
    FOREIGN KEY(id_medicines) REFERENCES medicines(id)
);

CREATE TABLE IF NOT EXISTS medical_record(
    id serial not null unique,
    date_time timestamp default current_timestamp,
    id_doctor UUID not null,
    id_patient UUID not null,
    id_anamnesis serial not null,
    id_prescription serial not null,
    FOREIGN KEY(id_doctor) REFERENCES doctors(id),
    FOREIGN KEY(id_patient) REFERENCES patients(id),
    FOREIGN KEY(id_anamnesis) REFERENCES anamnesis(id),
    FOREIGN KEY(id_prescription) REFERENCES doctors_prescription(id)
);
