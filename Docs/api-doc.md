# API Documentation: FlexiArt Web Application
## Introduction
This API documentation provides detailed information about the APIs used in the FlexiArt web application. These APIs facilitate communication between the frontend and backend, enabling various functionalities such as user registration, contact requests, authentication, data retrieval, email sending, and more.

## Base URL
The base URL for accessing the API endpoints is: `<url>/api/v1/`

## Authentication
The application uses JSON Web Tokens (JWT) for user authentication. To access protected endpoints, include the JWT token in the Authorization header using the Bearer scheme.

## API Endpoints
### User Registration
- **Endpoint:** `/api/v1/user/register`
- **Method:** POST
- **Description:** Registers a new user account.
- **Request Body:**

```json
{
"username": "exampleUser",
"email": "user@example.com",
"password": "userPassword"
}
```
- **Response:** Returns a success message if registration is successful.

### User Login
- **Endpoint:** `/api/v1/user/login`
- **Method:** POST
- **Description:** Logs in a registered user.
- **Request Body:**
```json
{
"email": "user@example.com",
"password": "userPassword"
}
```
- **Response:** Returns a JWT token upon successful login.

### Contact Form Submission
- **Endpoint:** /api/v1/flexiart/contact
- **Method:** POST
- **Description:** Handles user contact form submissions.
- **Request Body:**
```json
{
"name": "John Doe",
"email": "john@example.com",
"message": "Hello, FlexiArt team!"
}
```
- **Response:** Returns a success message if the message is sent successfully.

### Dialog Flow Interaction
- **Endpoint:** /api/v1/dialogFlow
- **Method:** POST
- **Description:** Sends user messages to a Dialog Flow bot for processing.
- **Request Body:**
```json
{
"message": "How can you help me?"
}
```
- **Response:** Returns a response from the Dialog Flow bot.

### Feedback Submission
- **Endpoint:** `/api/v1/feedback`
- **Method:** POST
- **Description:** Allows users to submit feedback.
- **Request Body:**
```json
{
"email": "user@example.com",
"feedback": "Great website!"
}
```
- **Response:** Returns a success message if feedback is submitted successfully.

### Gallery Management
- **Endpoint:** `/api/v1/gallery`
- **Method:** GET
- **Description:** Retrieves a list of gallery items.
- **Response:** Returns a list of gallery items with details.
### Offers Retrieval
- **Endpoint:** `/api/v1/offers`
- **Method:** GET
- **Description:** Retrieves available offers.
- **Response:** Returns a list of offers with details.
### Subscription List Retrieval
- **Endpoint:** `/api/v1/subscribe`
- **Method:** GET
- **Description:** Retrieves the list of subscribers.
- **Response:** Returns a list of subscriber emails.
### Email Sending
- **Endpoint:** `/api/v1/sendMail`
- **Method:** POST
- **Description:** Sends emails for various purposes.
- **Request Body:**
```json
{
"to": "recipient@example.com",
"subject": "Welcome to FlexiArt",
"html": "<p>Welcome to FlexiArt. We're excited to have you on board!</p>"
}
```
- **Response:** Returns a success message if the email is sent successfully.

### Manual Backup
- **Endpoint:** `/api/v1/backup`
- **Method:** POST
- **Description:** Triggers a manual backup of the application data.
## Conclusion
This API documentation provides a comprehensive overview of the APIs used in the FlexiArt web application. Each API endpoint is described with its purpose, request structure, response format, and authentication requirements. Properly utilizing these APIs will enable the frontend and backend components of the application to work seamlessly together, providing users with a robust and feature-rich experience. If you have any further questions or need assistance, please feel free to reach out.
