export async function onRequest(context) {
  return context.env.ASSETS.fetch(new Request(new URL('/index.html', context.request.url)));
}
