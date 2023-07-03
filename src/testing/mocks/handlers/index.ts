import { API_URL } from "@/config/constants";
import { rest } from "msw";
import { authHandler } from "./auth";
import { jobsHander } from "./jobs";

export const handlers = [
  ...authHandler,
  ...jobsHander,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healty: true }));
  }),
];
