const axios = require('axios');
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://swapi.dev/api';

test.describe('SWAPI API Tests', () => {
  test('should return details for Luke Skywalker', async () => {

    // Fetch details for character with ID 1 (Luke Skywalker)
    const response = await axios.get(`${BASE_URL}/people/1/`);

    // Check that the request was successful
    expect(response.status).toBe(200);

    // Verify the name of the character
    expect(response.data.name).toBe('Luke Skywalker');
  });

  test('should return details for the first planet (Tatooine)', async () => {
    // Fetch details for planet with ID 1 (Tatooine)
    const response = await axios.get(`${BASE_URL}/planets/1/`);

    // Check that the request was successful
    expect(response.status).toBe(200);

    // Verify the name of the planet
    expect(response.data.name).toBe('Tatooine');
  });
});




