---

# Portfolio Backend

This repository contains the backend code for the portfolio website. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and handles server-side operations like user authentication, data management, file uploads, and interactions with the MongoDB database.

## Features

- **User Authentication:** Secure login and registration using JWT tokens.
- **API Endpoints:** RESTful APIs for managing projects, skills, and contact form submissions.
- **File Uploads:** Supports image uploads using `cloudinary` for projects or other assets.
- **Environment Configurations:** Easy environment setup using environment variables.
- **Error Handling:** Centralized error handling for consistent API responses.
- **Emailing:** Contact form submissions are handled via `nodemailer` to send emails.
- **Security:** Passwords are securely hashed using `bcrypt`.

## Technologies Used

- **MongoDB**: NoSQL database for storing data.
- **Express.js**: Web framework for building REST APIs.
- **React.js**: Frontend framework for building the portfolio interface (for frontend part).
- **Node.js**: Runtime for server-side JavaScript.
- **Mongoose**: MongoDB ODM to easily manage and model database schemas.
- **JWT**: Used for handling user authentication.
- **Bcrypt.js**: For hashing and comparing user passwords.
- **Nodemailer**: To send emails from the contact form submissions.
- **Cloudinary**: For handling image uploads.
- **CORS**: For allowing cross-origin requests.
- **Express File Upload**: Middleware for handling file uploads.

## Requirements

- Node.js (v14 or above)
- MongoDB (local or cloud instance)
- A `config.env` file with the following environment variables:

  ```bash
  PORT=<backend_port>

  MONGO_URI=<your_MongoDB_url>
  DB_NAME=<your_DB_name>
  
  PORTFOLIO_URL=<your_portfolio_url>
  DASHBOARD_URL=<your_dashboard_url>
  
  CLOUDINARY_API_KEY=<your_cloudinary_api_key>
  CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
  CLOUDINARY_API_SECRET=<your_cloudinary_secret_key>
  
  JWT_SECRET_KEY=<your_JWT_secret_key>
  JWT_EXPIRES=<your_expire_time_in_min>
  COOKIE_NAME=<your_cookie_name>
  COOKIE_EXPIRE=<cookie_expire_time_in_milli_sec>
  PASSWORD_EXPIRE=<passowrd_expire_time_in_milli_sec>
  
  SMTP_HOST=<SMTP_host>
  SMTP_PORT=<SMTP_port>
  SMTP_SERVICE=<SMTP_service>
  SMTP_MAIL=<sender_mail>
  SMTP_PASS=<SMTP_key>
  ```

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bhushan-Wagh98/MERN-Portfolio.git
   cd MERN-Portfolio/backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `config.env` file in `config` folder and add the required environment variables listed above.

### Running the Server

To start the development server, run:

```bash
npm run dev
```

The server will start on the port specified in the `config.env` file.

### API Endpoints

#### Message Routes
- `POST` **/api/v1/message/send** – Send a message.
- `GET` **/api/v1/message/getAll** – Get all messages.
- `DELETE` **/api/v1/message/delete/:id** – Delete a message (authentication required).
  
#### User Routes
- `POST` **/api/v1/user/register** – Register a new user.
- `POST` **/api/v1/user/login** – Log in a user.
- `GET` **/api/v1/user/logout** – Log out the current user (authentication required).
- `GET` **/api/v1/user/profile** – Get user profile (authentication required).
- `GET` **/api/v1/user/profile/portfolio** – Get user profile for the portfolio.
- `PUT` **/api/v1/user/update/profile** – Update user profile (authentication required).
- `PUT` **/api/v1/user/update/password** – Update user password (authentication required).
- `POST` **/api/v1/user/password/forgot** – Request password reset.
- `PUT` **/api/v1/user/password/reset/:token** – Reset password with a token.

#### Timeline Routes
- `POST` **/api/v1/timeline/add** – Add a new timeline event (authentication required).
- `DELETE` **/api/v1/timeline/delete/:id** – Delete a timeline event (authentication required).
- `GET` **/api/v1/timeline/getAll** – Get all timeline events.

#### Software App Routes
- `POST` **/api/v1/software/add** – Add a new software app (authentication required).
- `DELETE` **/api/v1/software/delete/:id** – Delete a software app (authentication required).
- `GET` **/api/v1/software/getAll** – Get all software apps.

#### Skill Routes
- `POST` **/api/v1/skill/add** – Add a new skill (authentication required).
- `DELETE` **/api/v1/skill/delete/:id** – Delete a skill (authentication required).
- `PUT` **/api/v1/skill/update/:id** – Update a skill (authentication required).
- `GET` **/api/v1/skill/getAll** – Get all skills.

#### Project Routes
- `POST` **/api/v1/project/add** – Add a new project (authentication required).
- `DELETE` **/api/v1/project/delete/:id** – Delete a project (authentication required).
- `PUT` **/api/v1/project/update/:id** – Update a project (authentication required).
- `GET` **/api/v1/project/getAll** – Get all projects.
- `GET` **/api/v1/project/:id** – Get a single project.

### Folder Structure

```bash
backend/
├── config/             # Environment variables
├── controllers/        # Handle the logic for each endpoint
├── database/           # Handle the logic for DB
├── middleware/         # Custom middleware functions like authentication
├── models/             # Mongoose schemas and models
├── routes/             # API routes definitions
├── utils/              # Utility functions (e.g., email handling)
├── app.js              # setup
└── server.js           # Main entry point
```

## Contributing

Feel free to fork this repository and submit pull requests if you want to add or improve any features.

--- 
