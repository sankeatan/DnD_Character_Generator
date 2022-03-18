CREATE DATABASE dndCharacterGenerator_db;

USE dndCharacterGenerator_db;

CREATE TABLE User (
  id INT NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(30) NOT NULL, 
  primary key (id)
);

CREATE TABLE Character (
  id INT NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  lvl INT NOT NULL,
  race varchar(255) NOT NULL,
  class varchar(255) NOT NULL,
  subclass varchar(255) NOT NULL,
  background varchar(255), 
  foreign key (userId)
);

CREATE TABLE FantasyNames (
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Classes (
  class varchar(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE Races (
  race varchar(255) NOT NULL,
  description TEXT NOT NULL
);

