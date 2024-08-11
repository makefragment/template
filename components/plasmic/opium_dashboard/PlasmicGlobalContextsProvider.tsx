// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: XrnTG1nYzajh/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: D-MouOpzo74u/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: f0pzGvBkxmac/codeComponent
import { Hamdast } from "@/hamdast/hamdast"; // plasmic-import: PpweMV5hxHPx/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;

  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;

  hamdastProps?: Partial<
    Omit<React.ComponentProps<typeof Hamdast>, "children">
  >;

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
    splunkProps,
    growthBookProps,
    hamdastProps,
    antdConfigProviderProps
  } = props;

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
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : true
          ? "var(--antd-colorBgSpotlight)"
          : undefined
      }
      rtl={
        fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : undefined
      }
    >
      <Splunk
        {...splunkProps}
        defaultApiHost={
          splunkProps && "defaultApiHost" in splunkProps
            ? splunkProps.defaultApiHost!
            : "https://p24splk.paziresh24.com"
        }
        defaultApiKey={
          splunkProps && "defaultApiKey" in splunkProps
            ? splunkProps.defaultApiKey!
            : "6d18640a-95c3-4368-a8d0-dc0beae3a44b"
        }
      >
        <GrowthBook
          {...growthBookProps}
          apiHost={
            growthBookProps && "apiHost" in growthBookProps
              ? growthBookProps.apiHost!
              : "https://growthbook-api.paziresh24.com"
          }
          clientKey={
            growthBookProps && "clientKey" in growthBookProps
              ? growthBookProps.clientKey!
              : "sdk-x5P9GQI8GqpDwlY8"
          }
          previewAttributes={
            growthBookProps && "previewAttributes" in growthBookProps
              ? growthBookProps.previewAttributes!
              : undefined
          }
        >
          <Hamdast
            {...hamdastProps}
            clientKey={
              hamdastProps && "clientKey" in hamdastProps
                ? hamdastProps.clientKey!
                : "SZA4Q3NKjR4bZH9eCm0IZrH7omQV2kmr"
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
                antdConfigProviderProps &&
                "colorError" in antdConfigProviderProps
                  ? antdConfigProviderProps.colorError!
                  : "#ff4d4f"
              }
              colorInfo={
                antdConfigProviderProps &&
                "colorInfo" in antdConfigProviderProps
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
                antdConfigProviderProps &&
                "lineWidth" in antdConfigProviderProps
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
                  : undefined
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
                      fontFamily: "var(--iran-sans-x)",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      color: "#000000",
                      letterSpacing: "normal"
                    }
                  : undefined
              }
              wireframe={
                antdConfigProviderProps &&
                "wireframe" in antdConfigProviderProps
                  ? antdConfigProviderProps.wireframe!
                  : false
              }
            >
              {children}
            </AntdConfigProvider>
          </Hamdast>
        </GrowthBook>
      </Splunk>
    </Fragment>
  );
}
