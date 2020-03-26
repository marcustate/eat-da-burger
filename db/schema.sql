CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger_db
(
    id int NOT NULL AUTO INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
); 