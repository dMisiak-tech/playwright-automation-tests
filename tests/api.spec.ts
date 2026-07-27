import { test, expect } from '@playwright/test';

test('Pobieranie listy użytkowników z API', async ({ request }) => {
  // Wyślij zapytanie GET do darmowego API testowego
  const response = await request.get('https://reqres.in/api/users?page=1');

  // Sprawdź status odpowiedzi (HTTP 200 OK)
  expect(response.status()).toBe(200);

  // Sprawdź zawartość odpowiedzi JSON
  const body = await response.json();
  expect(body.page).toBe(1);
  expect(body.data.length).toBeGreaterThan(0);
});