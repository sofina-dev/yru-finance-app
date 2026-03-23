export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace('/api', '');

  const GAS_BASE = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_ID/exec";

  const target = GAS_BASE + path + url.search;
  const res = await fetch(target);

  return new Response(res.body, res);
}
