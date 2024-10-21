import { Hono } from 'hono';
import { handle } from "hono/cloudflare-pages";
const app = new Hono();

app.get('/api/page', async (c) => {
  return c.json({ message: 'Hello from the Cloudflare Pages Functions!' });
});

app.get('/api/page/:uuid', async (c) => {
  const uuid = c.req.param('uuid')
  return c.json({ message: `This is where your ${uuid} page could live.` });
});

export const onRequest = handle(app);