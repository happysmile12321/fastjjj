import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
serve((_req) => {
  var path = new URL(_req.url).pathname;
  switch (path) {
    case "/headers":
    var res = {
      "headers":Object.fromEntries(_req.headers)
    };
    return new Response(JSON.stringify(res), {
      headers: { "content-type": "text/plain" },
    });
  }
  return new Response(JSON.stringify("hello,world"), {
    headers: { "content-type": "text/plain" },
  });
});