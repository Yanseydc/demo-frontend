# Demo

This project was created with angular, it's a simple crud with a form to creat and user.
A table to show the registered users, and two actions update and delete.

To manage the state of the app, I tried to use NgRX but failed in my attempt.
So I know it's basic but I went with localstorage.

This is hosted in vercel this is a cloud platform for static pages

This is the url to ahve access: https://demo-frontend-at34fflxf-yanseydc.vercel.app/users.

#Development
I just simply added two components to create and list registers stored in mongodb and and API hosted in heroku
this is the list of endpoints created in the api
`POST: https://demo-spring-api.herokuapp.com/api/v1/users`

`GET: https://demo-spring-api.herokuapp.com/api/v1/users`

`PUT: https://demo-spring-api.herokuapp.com/api/v1/users`

`DELETE: https://demo-spring-api.herokuapp.com/api/v1/users/objectId`

body example for post and put request: 
{
    "firstName": "Denis",
    "lastName": "DC",
    "email": "denis@gmail.com"
}


#DATABASE
Database is hosted in mongodb ATLAS, it's a free cloud service to store your data.
![image](https://user-images.githubusercontent.com/45616244/142591459-376dacfd-01d6-4b38-8895-afc7c3e60903.png)
This is the example that you will find in the vercel app.

