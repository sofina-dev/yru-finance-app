export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace('/api', '');

  const GAS_BASE = "https://script.google.com/macros/s/AKfycbzijoRa_2vZ3y5F3KzVkxJxgO14MsSyfik3boH1cqLH_Bc5bz2ChNk5iPXj_WycksuF1w/exec";

  const target = GAS_BASE + path + url.search;
  const res = await fetch(target);

  return new Response(res.body, res);
}
