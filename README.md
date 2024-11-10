SampleAuth - Secure Authentication System with Email Services 🎉
Welcome to SampleAuth, a complete authentication solution built with the MERN stack, including email verification, password reset, and welcome notifications. This project provides a secure and user-friendly way for users to register, verify, log in, and reset passwords, making it ideal for robust web applications.

🔗 Get the FLOWCHART OF THIS APPLICATION HERE ----->>  [AUTHENTICATION-PROJECT](https://app.eraser.io/workspace/JWIMYngTGFNN8pjHMHh3)

📑 **Table of Contents**

Features
Project Structure
Installation
Environment Variables
Usage
API Endpoints
Tech Stack
Contributing
License

✨ **Features**

User Registration & Login - Secure authentication with JWT.
Email Verification - Sends a verification code to user email upon registration.
Password Reset - Allows users to reset their password via an email link.
Welcome Email - Sends a personalized welcome email after successful verification.
Session Management - Secure cookies and token storage.

📁 **Project Structure**

```
SampleAuth/
├── Backend/
│   ├── Controller/         # Controllers for request handling
│   ├── Db/                 # Database connection
│   ├── Mailtrap/           # Email templates and configuration
│   ├── Models/             # Mongoose models
│   ├── Routes/             # API routes
│   └── utils/              # Utility functions for tokens, cookies, etc.
├── Frontend/
│   ├── public/             # Public assets
│   ├── src/                # React components and pages
│   └── package.json        # Frontend dependencies
├── .env                    # Environment variables
└── package.json            # Root dependencies
```


🔧 **Installation**
1. Clone the repository
  ```
  git clone https://github.com/Tejas2005SG/SampleAuth.git
  cd SampleAuth
  
  ```
2. Install Backend Dependencies
  ```
  cd Backend
  npm install
  
  ```

3. Install Frontend Dependencies
  ```
  cd ../Frontend
  npm install

  ```

🔑 **Environment Variables**
To configure the project, create a .env file in the Backend/ directory with the following variables:

```
PORT=                 # Server port
MONGO_URI=            # MongoDB connection URI
ACCESS_TOKEN_SECRET=  # Secret key for access token
REFRESH_TOKEN_SECRET= # Secret key for refresh token
MAILTRAP_USER=        # Mailtrap username for sending emails
MAILTRAP_PASS=        # Mailtrap password for sending emails

```

🚀 **Usage**
1. Start the Backend Server
  ```
  cd Backend
  npm start

  ```
2. Start the Frontend
```
cd ../Frontend
npm start

```

🔗 **API Endpoints**
POST /api/register - Registers a new user and sends a verification email.
POST /api/login - Authenticates user and returns a JWT token.
POST /api/verify-email - Verifies the user's email with a code.
POST /api/forgot-password - Sends a password reset link to email.
POST /api/reset-password - Resets the user password.

🛠️ **Tech Stack**

1. Frontend: React, Tailwind CSS
2. Backend: Node.js, Express.js, MongoDB, Mongoose, Mailtrap
3. Authentication: JWT, Cookies
4. Email Service: Mailtrap for email notifications

🤝 **Contributing**
Feel free to open issues and create pull requests. All contributions are welcome!






