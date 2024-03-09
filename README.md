# Cinema Management System - Frontend

## Introduction

This repository encompasses the frontend for an all-encompassing cinema management system developed with Angular. The system empowers users to seamlessly view, book, and rate movies, while administrators can efficiently manage projections, films, and users.

## Main Features

1. **Authentication:**
    - User-friendly login and registration functionalities.
    - Access to diverse features with the ability to save preferences.

2. **Movie Display:**
    - Showcase movies available for the current day and week.
    - Facilitate movie searches by genre and view them based on average user ratings.

3. **User Feedback Management:**
    - Allow users to leave feedback and assign ratings to watched movies.
    - Utilize feedback to calculate an average movie rating.

4. **Projection and Movie Management:**
    - Empower administrators to manage cinema projections, including creation, deletion, and modification.
    - Streamline the management of the film inventory by adding new films, removing them, or modifying details.

5. **Reservation Management:**
    - Enable users to book seats for available shows.
    - Display reservations in the user profile with details about booked seats and show information.

6. **User Profile Page:**
    - Present personal information about the user, including name, surname, and date of birth.
    - List reservations made by the user and published feedback for movies.

7. **Admin Page:**
    - Provide advanced functionalities for administrators to manage projections, films, and users.
    - Allow administrators to create, delete, and modify projections and films, as well as manage user accounts.

8. **Booking Page:**
    - Allow users to view real-time seat availability for shows.
    - Provide access to discounted seats for children under 12.

## Technologies Used

- **Database:** PostgreSQL with PGAdmin 4 for database management.
- **Backend:** Java with the Spring framework, including Spring Security and Spring Data JPA for security and data management.
- **Frontend:** Angular, utilizing Typescript, CSS, and HTML for creating user interfaces.

## Installation & Set Up

Follow these steps to install and set up the frontend:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PaoloLauria/cinema-management-system-frontend.git
   ```

2. **Install Node Modules:**
   - Navigate to the project's root directory containing the 'package.json' file.
   - Run the following command to install the necessary Node modules:
     ```bash
     npm install
     ```

3. **Run the Application:**
   - Execute the application using Angular CLI or any other tool of your choice.

For the corresponding backend, refer to [Cinema Management System - Backend](https://github.com/paoloLauria/cinema-management).