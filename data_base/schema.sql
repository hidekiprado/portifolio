CREATE DATABASE portfolio

\c portfolio;


CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    name text,
    email text NOT NULL,
    message text NOT NULL
);

