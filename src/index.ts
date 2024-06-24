//import hono
import { Hono } from "hono";

//create a new instance of hono
const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

export default app;
