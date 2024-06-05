// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: XrnTG1nYzajh/codeComponent
import { Growthbook } from "@/fragment/growthbook"; // plasmic-import: dJ6m3Gi6AaJW/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: D-MouOpzo74u/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthbookProps?: Partial<
    Omit<React.ComponentProps<typeof Growthbook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, fragmentProps, growthbookProps, splunkProps } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : { withCredentials: true }
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
    >
      <Growthbook
        {...growthbookProps}
        apiHost={
          growthbookProps && "apiHost" in growthbookProps
            ? growthbookProps.apiHost!
            : undefined
        }
        clientKey={
          growthbookProps && "clientKey" in growthbookProps
            ? growthbookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthbookProps && "previewAttributes" in growthbookProps
            ? growthbookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          {children}
        </Splunk>
      </Growthbook>
    </Fragment>
  );
}
