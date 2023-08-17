import { MSWDevTools } from "msw-devtools";
import { ReactNode } from "react";

import { IS_DEVELOPMENT } from "@/config/constants";
import { db } from "@/testing/mocks/db";
import { handlers } from "@/testing/mocks/handlers";

export type MSWWrapperPorps = {
  children: ReactNode;
};

require("@/testing/mocks/initialize");
export const MSWWrapper = ({ children }: MSWWrapperPorps) => {
  return (
    <>
      {IS_DEVELOPMENT && <MSWDevTools db={db} handlers={handlers} />}
      {children}
    </>
  );
};
