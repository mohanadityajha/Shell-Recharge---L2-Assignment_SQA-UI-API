# E-Commerce Website Automation with Playwright

This project automates the testing of an e-commerce website using Playwright with JavaScript. The automation covers login functionality, product searching by different criteria (name, model, and color), and adding products to the cart. The framework uses Playwright's built-in test runner.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [Playwright](https://playwright.dev/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/e-commerce-playwright-automation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd e-commerce-playwright-automation
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Install Playwright browsers:

    ```bash
    npx playwright install
    ```

## Running the Tests

To run the tests, use the following command:

```bash
npx playwright test FileName

This will execute all the test cases defined under the tests folder. The tests will open the browser and perform various actions on the e-commerce website.


Test Cases
1. Login Functionality Test
File: tests/login.test.js

This test checks the login functionality of the website. It inputs a valid username and password and logs in successfully.

Test: Logs in using:
Username: mohanadityajha@gmail.com
Password: Test@2024

1 Login Functionality Test with Enter the UserName and Password

2. Search Product by Name
File: tests/search_by_name.test.js

This test searches for a product using its name and adds it to the cart.

Product Searched: Samsung Galaxy Tab 10.1
Action: Add to Cart

Find the Product Searching by Product Name

3. Search Product by Model
File: tests/search_by_model.test.js

This test searches for a product using its model number and adds it to the cart.

Model Searched: 941BW (Samsung SyncMaster 941BW)
Action: Add to Cart

Find the Product by Model Name

4. Search Product by Color
File: tests/search_by_color.test.js

This test searches for a product by its color and adds it to the cart.

Color Searched: BW (Samsung SyncMaster 941BW)
Action: Add to Cart

Find the Product searching by Color

5. Search Product through Menu and Category
File: tests/menu_search.test.js

This test navigates the product menu and searches for a product by its category (Tablets) and adds it to the cart.

Category Searched: Tablets (Samsung Galaxy Tab)
Action: Add to Cart

Find the Product through Menu Bar and Category Option


Project Structure

📁 e-commerce-playwright-automation
├── 📁 tests
│   ├── login.test.js
│   ├── search_by_name.test.js
│   ├── search_by_model.test.js
│   ├── search_by_color.test.js
│   └── menu_search.test.js
├── 📄 package.json
├── 📄 README.md
└── 📄 playwright.config.js


Configuration
You can modify the Playwright configuration in playwright.config.js to change browser settings, timeouts, and other parameters.

module.exports = {
  use: {
    headless: false, // Run tests in headless mode or not
    baseURL: 'https://naveenautomationlabs.com/opencart/', // Base URL for the tests
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry', // Capture video on first retry
  },
};


Reporting
Playwright provides an in-built HTML report feature. You can generate reports using the following command:

npx playwright show-report

This will generate a visual report of your test executions.

Troubleshooting
Test Failure: If a test fails, you can re-run the tests with debugging enabled:

npx playwright test --debug


Headless Mode: You can toggle between headless and headed mode by modifying the headless option in the configuration.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize the `README.md` file based on any other specific project requirements!





# SWAPI API Testing

This project demonstrates automated testing of the Star Wars API (SWAPI) using JavaScript, Node.js, and Jest for the test framework, with Axios as the HTTP client.

Project Structure
swapi-api-tests/
├── node_modules/
├── swapi.test.js  # Contains the test cases for SWAPI API
├── package.json   # Project metadata and dependencies
└── README.md      # Project documentation

Files Overview:
swapi.test.js: This file contains the test cases for verifying SWAPI responses using Axios to make HTTP requests and Jest for test assertions.
package.json: Defines project dependencies and metadata.
README.md: Documentation of the project, including setup instructions and test descriptions.

Requirements
Node.js v14+ (Install from here)
npm (comes bundled with Node.js)

Installation
Clone the repository or create a new project folder:
git clone <https://github.com/your-repo/swapi-api-tests.git>
cd swapi-api-tests

Install the dependencies:
npm install

Running the Tests
To run the test cases, execute the following command:
npx playwright test Filename

HTML  Test Report
npx playwright show-report

You should see output similar to this:
 PASS  ./swapi.test.js
  SWAPI API Tests
    ✓ should return details for Luke Skywalker (123ms)
    ✓ should return details for the first planet (Tatooine) (86ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total


Test Cases
Test Case 1: Fetching Luke Skywalker’s Details
Endpoint: GET /people/1/
Description: This test case verifies that the SWAPI API returns details for Luke Skywalker (who has an ID of 1).
Assertions:
The API request should return a status code of 200.
The name field in the response should be Luke Skywalker.

test('should return details for Luke Skywalker', async () => {
  const response = await axios.get(`${BASE_URL}/people/1/`);
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Luke Skywalker');
});


Test Case 2: Fetching Tatooine’s Details
Endpoint: GET /planets/1/
Description: This test case verifies that the SWAPI API returns details for the planet Tatooine (with an ID of 1).
Assertions:
The API request should return a status code of 200.
The name field in the response should be Tatooine.

test('should return details for the first planet (Tatooine)', async () => {
  const response = await axios.get(`${BASE_URL}/planets/1/`);
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Tatooine');
});

Code Explanation
Axios: A popular promise-based HTTP client for making API requests in Node.js.
Jest: A delightful JavaScript testing framework with a focus on simplicity. It allows you to run and organize your tests.

Project Dependencies:
jest: The test runner used for executing tests.
axios: HTTP client used to make REST API calls.

Setting up Jest:
In the package.json file, Jest is configured to run tests with the command npx jest:
{
  "name": "swapi-api-tests",
  "version": "1.0.0",
  "description": "Automated testing for SWAPI using Jest and Axios",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "axios": "^1.2.0",
    "jest": "^29.0.0"
  }
}


Customizing the Tests
If you'd like to extend the test cases or modify the API calls, you can update the swapi.test.js file. You can add more endpoints, such as starships, vehicles, or species, and assert additional data fields.

Example of Additional Test:
Here’s an example of testing the starships endpoint:

test('should return details for a starship', async () => {
  const response = await axios.get(`${BASE_URL}/starships/9/`);
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Death Star');
});

test('should return details for a starship', async () => {
  const response = await axios.get(`${BASE_URL}/starships/9/`);
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Death Star');
});


Conclusion
This project provides a simple example of how to set up API tests for a public REST API using Jest and Axios. You can expand the test coverage by adding more endpoints and assertions as needed.

For further reference on SWAPI, visit SWAPI Documentation.



