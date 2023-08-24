# Technical Documentation: FlexiArt Web Application

## Introduction

This technical documentation provides an overview of the FlexiArt web application, an enterprise-level software company
website. The application is built using Angular 15 for the frontend and Node.js with Express.js for the backend. It
includes various features such as user authentication, live chat support, AI chatbot integration, two-step verification,
manual backups, and MongoDB database integration. The frontend is hosted on Netlify, while the backend is hosted on
Render, with a MongoDB Atlas cluster for the database.

## Frontend

### Framework and Dependencies

- Angular 15 is used for building the frontend of the application.
- The application relies on several Angular packages for features such as animations, forms, routing, material design,
  and more.
- Third-party libraries such as Font Awesome, ngx-cookie-service, ng-image-slider, and ng-particles are integrated to
  enhance the user experience.

### Routing

- The application employs Angular's routing mechanism to create different pages for various sections.
- A routing module defines the paths and corresponding components for each page.
- The routing structure includes pages for home, about, services, works, technologies, contact, FAQ, blog, user
dashboard, login, administration, chatbot, and more.

### User Interaction

- The frontend offers a variety of user interaction components, including image sliders, star ratings, chatbots, and
  more.
- It utilizes Angular's reactive forms for handling user inputs and form submissions.

### Hosting

- The frontend is hosted on Netlify and connected to a GoDaddy domain.

## Backend

### Framework and Dependencies

- The backend is developed using Node.js with Express.js, providing a RESTful API for the frontend to communicate with.
- Key dependencies include Express, Mongoose for MongoDB interaction, body-parser for parsing request bodies, cors for
  enabling cross-origin requests, and jsonwebtoken for user authentication.

### API Endpoints

- The backend defines various API endpoints to handle user registration, contact requests, dialog flow interactions,
  feedback submission, gallery management, offers, subscriptions, email sending, and more.
- Each API endpoint corresponds to a specific route and functionality.

### Security

- The application implements user authentication using JSON Web Tokens (JWT) for securing API endpoints.
- Two-step verification is integrated using the speakeasy library, allowing users to enable two-factor authentication
  through an authenticator app.
- The backend utilizes bcrypt for hashing sensitive data such as passwords.

### Backup

- Manual backups of the application's data are supported using the mongodb-backup library.
- A backup route is defined to trigger data backups when needed.

### Sitemap

- A sitemap generation feature is included to enhance search engine optimization (SEO).
- The application generates an XML sitemap using the sitemap package to list URLs and their changefrequency and
  priority.

### Hosting

- The backend is hosted on Render, providing a platform for deploying and managing Node.js applications.

## Database

- The application's data is stored in a MongoDB database.
- A MongoDB Atlas cluster is used to manage the database, offering scalability and data redundancy.
- Mongoose is employed as an Object Data Modeling (ODM) library to interact with the MongoDB database.

## Deployment

- The frontend is deployed on Netlify, connecting to a GoDaddy domain for accessibility.
- The backend is deployed on Render, providing a scalable environment for the Node.js application.

## Additional Features

- The application includes live chat support using Tawk when agents are online and an AI chatbot for handling inquiries
  when agents are unavailable.
- Email addresses, login details, and live chat data are stored using cookies.
- The backend manages email sending, including features such as sending email templates and newsletters.

## Conclusion

This technical documentation provides an overview of the FlexiArt web application, detailing its architecture, frontend
and backend technologies, features, deployment, and more. It serves as a guide for understanding the application's
structure and functionality, aiding in maintenance, updates, and further development. If you have any further questions
or need more specific information, please don't hesitate to ask. 

Contact : [Kavindu Kokila](mailto:kavindu.kokila.info@gmail.com?subject=[GitHub]%20Flexiart%20Project%20Problems)
