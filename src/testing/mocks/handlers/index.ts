import { rest } from "msw";

import { API_URL } from "@/config/constants";

import { authHandler } from "./auth";
import { jobsHander } from "./jobs";
import { organizationsHandler } from "./organizations";

export const handlers = [
  ...authHandler,
  ...jobsHander,
  ...organizationsHandler,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healty: true }));
  }),
];
