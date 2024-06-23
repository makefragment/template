import React, { useEffect, useMemo } from "react";

import {
  DataProvider,
  GlobalActionsProvider,
  GlobalContextMeta,
} from "@plasmicapp/host";

type HamdastProps = React.PropsWithChildren<{
  clientKey: string;
}>;

export const Hamdast = ({ children, clientKey }: HamdastProps) => {
  useEffect(() => {
    if (
      !!(window as any).hamdast &&
      (window as any)?.hamdast?.clientKey !== clientKey
    ) {
      (window as any).hamdast.initialize(clientKey);
    }
  }, [clientKey]);

  const actions = useMemo(() => ({}), []);

  return (
    <GlobalActionsProvider contextName="Hamdast" actions={actions}>
      <DataProvider name="Hamdast" data={{}}>
        {children}
      </DataProvider>
    </GlobalActionsProvider>
  );
};

export const hamdastMeta: GlobalContextMeta<HamdastProps> = {
  name: "Hamdast",
  displayName: "Hamdast",
  importPath: "@/hamdast/hamdast",
  props: {
    clientKey: {
      type: "string",
      displayName: "Client Key",
    },
  },
  providesData: true,
  globalActions: {},
};
