export async function onRequest(context) {
  const url = new URL(context.request.url);

  // เช่น /api/receipt -> receipt
  const apiName = url.pathname.replace('/api/', '');

  const GAS_BASE = "https://script.google.com/macros/s/AKfycbzijjoRa_2vZ3y5F3KzVkxJxgO14MsSyfik3boH1cqLH_Bc5bz2ChNk5iPXj_wykcsuF1w/exec";

  // ส่งเป็น query parameter แทน path
  const targetUrl = new URL(GAS_BASE);
  targetUrl.searchParams.set("action", apiName);

  // แนบ query เดิมทั้งหมดไปด้วย เช่น id=123
  url.searchParams.forEach((value, key) => {
    targetUrl.searchParams.set(key, value);
  });

  const res = await fetch(targetUrl.toString(), {
    method: context.request.method,
    headers: {
      "Accept": "application/json"
    }
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
