DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS metrics;
DROP TABLE IF EXISTS meals;



CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  search_query VARCHAR(255),
  formatted_address VARCHAR(255),
  latitude NUMERIC(10,7),
  longitude NUMERIC(10,7)
);

CREATE TABLE metrics (
  id SERIAL PRIMARY KEY,
  forecast VARCHAR(255),
  time VARCHAR(255),
  location_id INTEGER NOT NULL,
  FOREIGN KEY (location_id) REFERENCES locations (id)
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  link VARCHAR(255),
  name VARCHAR(255),
  summary VARCHAR(255),
  event_date VARCHAR(255),
  location_id INTEGER NOT NULL,
  FOREIGN KEY (location_id) REFERENCES locations (id)
);