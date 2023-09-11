
# Authentication and Authorisation Documentation

## Introduction

The authentication and authorisation features are located in the user microservice. The user service provides the functionalities of creating and logging into an account through secure methods.

## How to run server

To start the server in this microservice run `npm run devStart`.
This will used `nodemon` package to start the server by running the app.js file.

## JWT

JWT is a JSON Web Token which allows you to send information between two parties securely, without having to worry about sending passwords or other sensitive data. This is an important feature to have since especially storing sensitive personal data for each customer.

### Registration process

User goes through validation and password hashing in order to create a new account. Later there should feature available for users to login through Google.
