CREATE TABLE IF not exists icecream (
  id SERIAL PRIMARY KEY,
  flavor VARCHAR(255),
  description VARCHAR(255),
  rating VARCHAR(6),
  url VARCHAR(255),
  brand VARCHAR(255)
);
