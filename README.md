Movie Theater Next.js Application
=================================

This is a small Next.js application that consumes the OMDB API to display movie data in a user-friendly manner. The application has the following functionality:

On the home page, it displays a list of movies related to the "impossible" word. Each item is represented by its poster image and basic information.
When a user clicks on a movie in the list, they are taken to a new page that displays more detailed information about the item.

The details page also displays a "Buy now" button. When the user clicks on the button, a modal opens to simulate buying a ticket. The user can select the number of tickets they want to buy and the type of ticket (e.g., adult, child, senior).

The modal displays the total cost of the tickets and a "Confirm Purchase" button. When the user clicks on the "Confirm Purchase" button, the tickets are added to their shopping cart.

Technologies
------------

The application was built using:

- Next.js 13.3
- Tailwind
- Typescript

Available Commands
------------------

- `dev`: Starts the development server.
- `build`: Builds the app for production.
- `start`: Starts the app in production mode.
- `lint`: Lints the project using ESLint.

Installation
-----------

- Clone the repository: `git clone https://github.com/eudp/movie-theater.git`
- Install dependencies: `npm install`
- Create a .env file and add your OMDB API key as `OMDBAPI_API_KEY=your-api-key`
- Start the development server: `npm run dev`
- Open http://localhost:3000 in your browser.

Additional Notes
----------------

A shopping cart feature was implemented using React Context.

The application was styled using TailwindCSS.

ESLint was used to maintain code quality and consistency.

A sample `.env.example` file has been included in the repository as a template for the required .env file.
