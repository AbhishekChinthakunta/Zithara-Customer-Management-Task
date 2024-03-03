# Zithara-Customer-Management-Task
Customer Management Data list using PERN stack, Zithara Technologies Round 2 - Task: React and Node JS Application Development. This is a simple customer management app built with React, Node.js, Express and PostgreSQL.

# Features
1)Displays customer data in a paginated table
2)Search customers by name and location
3)Sort customers by created date and time
4)React frontend with Node/Express backend
5)PostgreSQL database with dummy seeded data


# Usage
Env Variables
Create a .env file in then root and add the following

DB_HOST = localhost
DB_PORT = 5432
DB_USER = postgres
DB_PASS = Abhi123
DB_NAME = zithara


# Installing required Dependencies and running the dev server
npm install,
cd record-app,
node server.js,
npm install

# Database Schema
A PostgreSQL database named customerdb is used with the following schema:
# Column and its Datatype
sno 	              INTEGER,
name	              VARCHAR(15),
age          	      INTEGER,
phone	              INTEGER,
location	          VARCHAR(50),
created_at	        TIMESTAMP,
created_at_time     TIMESTAMP



API Reference
Get all customers (paginated) ,
GET/api/customers

Page, 
Sortby

Search customers ,
GET/api/search  ,
Search

# Frontend
The frontend directory has the React frontend code. It uses React hooks for state management and Axios to call APIs.
Some Key Files:-
App.js,
App.text.js ,
index.css ,
index.js,
reportWebVitals.js ,
setupTests.js

# Backend
Some key files:-
db.js,
server.js ,
package-lock.json ,
package.json
