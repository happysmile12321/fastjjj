import {Router} from "https://deno.land/x/oak/mod.ts"



const router = new Router();
router.get("/todos", async (ctx,next) => {
  await next();
});
router.post("/todos", async (ctx,next) => {
  await next();
});

export default router;