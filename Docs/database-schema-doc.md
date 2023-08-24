# Database Schema Documentation: FlexiArt Web Application

This documentation outlines the database schema used in the FlexiArt web application. The application relies on MongoDB
for data storage and retrieval. Here are the database schema models and their respective fields:

## Contact Schema

**Model Name:** `Contact`

**Description:** Represents user contact form submissions.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| fullName   | String    | Yes      | Full name of the user        |
| email      | String    | Yes      | User's email address         |
| msg        | String    | Yes      | Message from the user        |

## Dialogflow Schema

**Model Name:** Not stored in the database

**Description:** Handles interactions with the Dialogflow bot.

| Field Name      | Data Type | Required | Description                  |
|-----------------|-----------|----------|------------------------------|
| sessionId       | String    | No       | Unique session identifier    |
| runIntent       | Function  | Yes      | Sends queries to Dialogflow  |

## Feedback Schema

**Model Name:** `Feedbacks`

**Description:** Represents user feedback.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| fullName   | String    | Yes      | Full name of the user        |
| msg        | String    | Yes      | Feedback message             |
| date       | Date      | Yes      | Date of feedback submission  |

## Gallery Schema

**Model Name:** `Gallery`

**Description:** Represents images in the gallery.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| src        | String    | Yes      | Image source path            |
| thumb      | String    | Yes      | Thumbnail image source path  |
| caption    | String    | Yes      | Image caption                |

## Offers Schema

**Model Name:** `Offers`

**Description:** Represents available offers.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| img        | String    | Yes      | Image source path            |
| date       | String    | Yes      | Date of the offer            |
| id         | String    | Yes      | Offer identifier             |

## Project Count Schema

**Model Name:** `Project-Count`

**Description:** Represents project, client, and solution counts.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| clients    | String    | Yes      | Number of clients            |
| projects   | String    | Yes      | Number of projects           |
| solutions  | String    | Yes      | Number of solutions          |

## Register Schema

**Model Name:** `Users`

**Description:** Represents registered users.

| Field Name | Data Type | Required | Description                  |
|------------|-----------|----------|------------------------------|
| email      | String    | Yes      | User's email address         |
| password   | String    | Yes      | User's password              |
| fullName   | String    | Yes      | Full name of the user        |
| phone      | String    | Yes      | User's phone number          |
| address    | String    | Yes      | User's address               |
| verified   | Boolean   | No       | Verification status          |

These schemas represent the data models used in the FlexiArt web application. Each schema defines the structure of its
respective data type, including field names, data types, and whether the fields are required or not. This organized
structure enables efficient data management and retrieval throughout the application's lifecycle.

For further details or queries related to the database schemas, feel free to contact us.

Contact : [Kavindu Kokila](mailto:kavindu.kokila.info@gmail.com?subject=[GitHub]%20Flexiart%20Project%20Problems)
