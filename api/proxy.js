export const config = { runtime: "edge" };

export default async function handler(req) {
  const url = new URL(req.url);
  const targetPath = url.pathname.replace("/proxied-api/", "");

  // Use environment variable with fallback
  const API_BASE_URL = process.env.API_BASE_URL || "https://zefame-free.com";
  const targetUrl = `${API_BASE_URL}/${targetPath}${url.search}`;

  const newHeaders = new Headers(req.headers);
  newHeaders.set("Referer", `${API_BASE_URL}/`);
  newHeaders.set("Origin", API_BASE_URL);

  return fetch(targetUrl, {
    method: req.method,
    headers: newHeaders,
    body: req.body,
  });
}
