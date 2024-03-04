# Ensolvers Challenge

## Deliverables and Considerations
This project use the next technologies
- NodeJS
- ReactJS
- SQLite

In adition with the next packages added
- Node execution combined
    - concurrently (for running both applications simultaneously)

- Backend
    - cookie-parser
    - cors
    - express-validator
    - express
    - jsonwebtoken
    - sequelize (ORM requested in challenge)
    - sqlite3
    
- Frontend
    - react-dom
    - *i haven't added other package because it's a small project, if it scales, i'm for sure will add React Validation Forms, Material UI or Tailwind, React Query, Zustand or Redux*

## Folder Structure
    /root
    └── /frontend
        └── /public
            ├── /index.html
            ├── ... others
        └── /src (for development)
            ├── /assets
            ├── /components
            ├── /helpers
            ├── /hooks
            ├── /pages (i use react-router-dom for client side navigation)
            └── /router (there's a login, so i implemented a Public and Private router)
        ├── App.jsx (entry point, no delete)
        ├── main.jsx (first javascript, no delete)
        ├── index.css
        └── ... others
    └── /backend
        ├── /config (database configuration)
        ├── /controller (functions for every request)
        ├── /db (database itself)
            └── /data.db
        ├── /helpers ( script functions )
        └── /middleware ( functions that runs before a controller being called )
            └── /sessionMiddleware.js (allow to check if a user is valid before make requests)
        └── /models ( Sequelize clases and data objects )
            ├── /notas.js (Notes model)
            └── /user.js (User model)
        ├── /router (express-router files for keep organized every endpoint)
        ├── app.js (backend main script)
        └── ... others
    ├── .env (mut be created with 'SIGN=HASH95BRO' text inside)
    ├── package.json (contains concurrently for running both, frontend and backend app)
    ├── README.md
    ├── concur.postman_collection.json ( POSTMAN export file, so you can import and test it)
    └── ... others
    
## Requirements for run this app
1. Already have installed Nodejs (v18 or higher)
2. clone this repo in any folder
3. run installers (npm install)
    1. **/root:** `npm install`
    2. **/backend:** `npm install`
    3. **/frontend:** `npm install`
    4. The database is a SQLite DB for the purpose of this project, it's already in `/root/backend/db/data.db`
4. Once installed al packages in al levels, just go back to main folder `/root` and run `npm run dev` this will trigger all backend and frontend dev enviroments so you can test it.


## Users / Account Managment
I have just set two users so you can test easily ( user / password )
1. johndoe@ensolvers.com / ensolversjd
2. doejohn@ensolvers.com / ensolversdj
3. *remember to create the `.env` file so you cant test it in your computer*
4. *also remember there's a postman backup file `concur.postman_collection.json` in the root folder so you can import and test the backend endpoints*
5. If any problem occurs, the `http://localhost:4000/api/usuarios/` [POST] endpoint will be open for this purpose in case you want to add a new user. `{"name":"Doe John" "mail":"doejohn@ensolvers.com","password":"ensolversdj"}` as example body data.