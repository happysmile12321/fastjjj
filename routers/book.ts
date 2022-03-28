import {Router} from "https://deno.land/x/oak/mod.ts"
import { books } from "./data.ts";
const router = new Router();
router.get("/", async (ctx,next) => {
  await next();
  ctx.response.body = "hello,world";
});

router.get("/books/:id", async (ctx,next) => {
  await next();
  ctx.response.body = books.find(b => b.id === Number(ctx.params.id)) || {};
});
export default router;