import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello",
    });
  })
  .get("/hello/:test", (c) => {
    const test = c.req.param("test");

    return c.json({
      message: "Hello",
      test: test,
    });
  });
export const GET = handle(app);
export const PUT = handle(app);
