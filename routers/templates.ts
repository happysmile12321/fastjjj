import { Router } from "https://deno.land/x/oak/mod.ts"
//
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

const router = new Router();
router.get("/", async (ctx,next) => {
  await next();
  ctx.response.body = "hello,world";
});

router.post("/books/:id", async (ctx,next) => {
  await next();
});
export default router;