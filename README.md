# Deliverable CC - UpHill
### Built with ReactJS - Tested with Jest - Github REST API

This web application allows users to see the 3 most popular Github users and the 3 most active users together with their name, image, id, total followers and the most starred project of each Github user. It permits access to the Github user’s page when upon clicking.

Categories are organised by most popular - users created in the last month and having the most followers, by most active - users created last month and having the most repositories, by most starred - repositories created last year having the most stars.

Furthermore, the user's of this application are able to search Github users and repositories for a specific term.





## Getting Started

To get a local copy up and running follow these simple steps.


### Installation

1. Get a free API Key at [https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28](https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28)
2. Clone the repo
   ```sh
   git clone https://github.com/frederico2191/code-challenge
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your `.env` file in the root of the project
   ```js
   REACT_APP_GITHUB_KEY = 'ENTER YOUR ACESS TOKEN';
   ```


### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Remarks: Github REST API

The REST API has a custom rate limit according to the different categories/endpoints. The "core" object provides a rate limit status for all non-search-related resources in the REST API with a limit of 5000 per authenticathed user. This project consumes mostly from the "search" object, with a rate limit of 30 calls per minute per authenticated user.

[https://docs.github.com/en/rest/search?apiVersion=2022-11-28#rate-limit](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#rate-limit)

StrictMode renders components twice on development mode but not production, resulting in double or more the calls consumed on rendering. Depending on your purposes, you might find suitable to comment out the `<StrictMode/>` in file `index.js` at the root of the project.

[https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects](https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)

In the particular case that a given Github has no public repository and at least one private repository, the response throws 422 - "Validation Failed". This error falls under the scope of this project necessary calls and can be visible in the console.

If a query exceeds the time limit, the response property "incomplete_results" is set to true. It is possible that for this reason, in some cases, the API response keeps on varying to the same request.

[https://stackoverflow.com/questions/62885108/github-api-incomplete-results-for-a-simple-search](https://stackoverflow.com/questions/62885108/github-api-incomplete-results-for-a-simple-search)

Please keep in mind these limitations and its implications while running the project.


