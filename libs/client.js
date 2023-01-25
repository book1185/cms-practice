import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '1hbtu5ppz7',
  apiKey: process.env.API_KEY,
});