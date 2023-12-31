import { RestRequest } from "msw";

import { IS_TEST } from "@/config/constants";
import { AuthUser } from "@/features/auth";

import { db } from "./db";

import { testData } from "../test-data";

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

export const AUTH_COOKIE = "auth-token";

const sanitizeUser = (user: any): AuthUser => {
  const sanitizedUser = { ...user };
  delete sanitizedUser.password;
  return sanitizedUser;
};

export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: { email: { equals: email } },
  });

  if (user?.password === password) {
    const sanitizedUser = sanitizeUser(user);
    const encodedToken = AUTH_TOKEN;
    return { user: sanitizedUser, jwt: encodedToken };
  }

  throw Error("Invalid username or password");
};

export const getUser = () => sanitizeUser(testData.users[0]);

export const requireAuth = ({
  req,
  shouldThrow = true,
}: {
  req: RestRequest;
  shouldThrow?: boolean;
}): AuthUser | null => {
  if (IS_TEST) {
    return getUser();
  }

  const encodedToken = req.cookies[AUTH_COOKIE];

  if (encodedToken !== AUTH_TOKEN) {
    if (shouldThrow) {
      throw new Error("No authorization token provided");
    }
    return null;
  }

  return getUser();
};
