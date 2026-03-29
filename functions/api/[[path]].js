export async function onRequest(context) {
  const url = new URL(context.request.url);

  // เช่น /api/receipt -> receipt
  const apiName = url.pathname.replace('/api/', '');

  const GAS_BASE = "https://script.google.com/macros/s/AKfycbz8-s_ZguywHelbx0zpzYsADFFO9xvb8QvhkdHX4YJO3iRzPNTSDM8wg11CD-68H-rp4g/exec";

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
