CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180) NOT NULL,
    description TEXT NULL,
    image VARCHAR(200) NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;
