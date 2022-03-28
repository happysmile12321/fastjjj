import {Application} from "https://deno.land/x/oak/mod.ts"
import bookRouter from "./routers/book.ts";
const app = new Application();
const listens = Deno.listen({ port: 4001 });
var num: number=0;
app.addEventListener("error", function (error) {
    // console.log("error",error.type);
});
app.use(async(ctx,next) => {
  const time = Date.now();
  await next();
  console.log("response:"+(++num));
  ctx.response.headers.set("x-Cost-Times", (Date.now() - time) + 'ms');
});

app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods())

for await (const conn of listens) {
  (async () => {
    try {
      const httpConns = Deno.serveHttp(conn);
      for await (const { request, respondWith } of httpConns) {
          const response = await app.handle(request, conn);
          if (response) {
            respondWith(response);
          }
        }
    } catch (error) {
      
    }
  })();
}