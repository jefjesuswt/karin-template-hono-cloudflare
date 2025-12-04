import { KarinFactory } from "@project-karin/core";
import { HonoAdapter } from "@project-karin/platform-hono";
import { AppController } from "./app/app.controller";

const app = await KarinFactory.create(new HonoAdapter(), {
  scan: false,
  controllers: [AppController],
});

await app.init();

export default {
  fetch: (app.getHttpAdapter() as any).fetch,
};
