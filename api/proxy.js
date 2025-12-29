export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  const targetPath = url.pathname.replace('/proxied-api/', '');
  const targetUrl = `https://zefame-free.com/${targetPath}${url.search}`;

  const newHeaders = new Headers(req.headers);
  newHeaders.set('Referer', 'https://zefame-free.com/');
  newHeaders.set('Origin', 'https://zefame-free.com');

  return fetch(targetUrl, {
    method: req.method,
    headers: newHeaders,
    body: req.body,
  });
}