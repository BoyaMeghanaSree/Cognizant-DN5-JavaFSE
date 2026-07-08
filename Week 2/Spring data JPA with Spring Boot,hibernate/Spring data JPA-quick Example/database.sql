-- Create Database
CREATE DATABASE ormlearn;

-- Select Database
USE ormlearn;

-- Create Country Table
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50)
);

-- Insert Sample Data
INSERT INTO country VALUES
('IN', 'India'),
('US', 'United States of America');

-- Display Data
SELECT * FROM country;
