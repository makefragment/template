// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kE2m6SaQqQewvhrZdkGhrf

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: -7Wv9opV6KW-/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: 5nz5r4z3T_gd/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: CH7TboY_vqgc/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    fragmentProps,
    growthBookProps,
    splunkProps,
    antdConfigProviderProps
  } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : undefined
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
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
          <AntdConfigProvider
            {...antdConfigProviderProps}
            borderRadius={
              antdConfigProviderProps &&
              "borderRadius" in antdConfigProviderProps
                ? antdConfigProviderProps.borderRadius!
                : 6
            }
            colorBgBase={
              antdConfigProviderProps &&
              "colorBgBase" in antdConfigProviderProps
                ? antdConfigProviderProps.colorBgBase!
                : "#ffffff"
            }
            colorError={
              antdConfigProviderProps && "colorError" in antdConfigProviderProps
                ? antdConfigProviderProps.colorError!
                : "#ff4d4f"
            }
            colorInfo={
              antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
                ? antdConfigProviderProps.colorInfo!
                : "#1677ff"
            }
            colorPrimary={
              antdConfigProviderProps &&
              "colorPrimary" in antdConfigProviderProps
                ? antdConfigProviderProps.colorPrimary!
                : "#1677ff"
            }
            colorSuccess={
              antdConfigProviderProps &&
              "colorSuccess" in antdConfigProviderProps
                ? antdConfigProviderProps.colorSuccess!
                : "#52c41a"
            }
            colorWarning={
              antdConfigProviderProps &&
              "colorWarning" in antdConfigProviderProps
                ? antdConfigProviderProps.colorWarning!
                : "#faad14"
            }
            controlHeight={
              antdConfigProviderProps &&
              "controlHeight" in antdConfigProviderProps
                ? antdConfigProviderProps.controlHeight!
                : 32
            }
            defaultDark={
              antdConfigProviderProps &&
              "defaultDark" in antdConfigProviderProps
                ? antdConfigProviderProps.defaultDark!
                : false
            }
            lineWidth={
              antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
                ? antdConfigProviderProps.lineWidth!
                : 1
            }
            loadingText={
              antdConfigProviderProps &&
              "loadingText" in antdConfigProviderProps
                ? antdConfigProviderProps.loadingText!
                : undefined
            }
            removeLoading={
              antdConfigProviderProps &&
              "removeLoading" in antdConfigProviderProps
                ? antdConfigProviderProps.removeLoading!
                : true
            }
            sizeStep={
              antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeStep!
                : 4
            }
            sizeUnit={
              antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                ? antdConfigProviderProps.sizeUnit!
                : 4
            }
            themeStyles={
              antdConfigProviderProps &&
              "themeStyles" in antdConfigProviderProps
                ? antdConfigProviderProps.themeStyles!
                : true
                ? {
                    fontFamily: "Vazirmatn",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#535353",
                    letterSpacing: "normal"
                  }
                : undefined
            }
            wireframe={
              antdConfigProviderProps && "wireframe" in antdConfigProviderProps
                ? antdConfigProviderProps.wireframe!
                : false
            }
          >
            {children}
          </AntdConfigProvider>
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
