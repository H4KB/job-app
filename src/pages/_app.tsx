import type { AppProps } from "next/app";
import { NextPage } from "next";

import { AppProvider } from "@/providers/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(<Component {...pageProps} />);
  return <AppProvider>{pageContent}</AppProvider>;
};

export default App;
