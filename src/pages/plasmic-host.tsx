import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
  registerGlobalContext,
} from "@plasmicapp/react-web/lib/host";
import { Fragment } from "@/fragment/fragment";
import { GrowthbookGlobalContext } from "@/fragment/growthbook";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

registerGlobalContext(Fragment, {
  name: "Fragment",
  props: {
    apiConfig: {
      displayName: "API Config",
      type: "object",
      description: `e.g. { withCredentials: true }`,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    previewApiConfig: {
      displayName: "Preview API Config",
      type: "object",
      description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
      editOnly: true,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
  },
  providesData: true,
  globalActions: {
    showToast: {
      displayName: "Show Toast",
      parameters: [
        {
          name: "type",
          type: {
            type: "choice",
            options: ["success", "error"],
            defaultValueHint: "success",
          },
        },
        {
          name: "message",
          type: {
            type: "string",
            defaultValueHint: "A message for you!",
            required: true,
          },
        },
        {
          name: "placement",
          type: {
            type: "choice",
            options: [
              "top-left",
              "top-center",
              "top-right",
              "bottom-left",
              "bottom-center",
              "bottom-right",
            ],
            defaultValueHint: "top-right",
          },
        },
        {
          name: "duration",
          type: {
            type: "number",
            defaultValueHint: 3000,
          },
        },
      ],
    },
    apiRequest: {
      displayName: "API Request",
      parameters: [
        {
          name: "method",
          type: {
            type: "choice",
            options: ["GET", "POST", "DELETE", "PUT", "PATCH"],
            defaultValueHint: "GET",
            defaultValue: "GET",
          },
        },
        {
          name: "url",
          displayName: "URL",
          type: {
            type: "string",
            defaultValueHint: "/api/v1/users",
            required: true,
          },
        },
        {
          displayName: "Query Params",
          name: "params",
          type: {
            type: "object",
            description: `e.g. { id: 20 }`,
            helpText:
              "It will append this to the end of the URL as ?key=value.",
          },
        },
        {
          displayName: "Body",
          name: "body",
          type: {
            type: "object",
            helpText: "It is not applicable for the GET method.",
            description: `e.g. { id: 20 }`,
          },
        },
        {
          name: "config",
          displayName: "Request Config",
          type: {
            type: "object",
            description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
            helpText:
              "Read about request configuration options at https://axios-http.com/docs/req_config",
          },
        },
      ],
    },
  },
  importPath: "@/fragment/fragment",
});

registerGlobalContext(GrowthbookGlobalContext, {
  name: "GrowthbookGlobalContext",
  displayName: "GrowthBook",
  props: {
    apiHost: {
      type: "string",
      displayName: "Api Host",
      defaultValueHint: "https://cdn.growthbook.io",
    },
    clientKey: {
      type: "string",
      displayName: "Client Key",
      defaultValueHint: "sdk-XXX",
    },
    previewAttributes: {
      type: "object",
      editOnly: true,
      displayName: "Preview Attributes",
      description: "Simulate how your rules will apply to users.",
    },
  },
  globalActions: {
    setAttributes: {
      displayName: "Set Attributes",
      parameters: [
        {
          name: "attributes",
          type: "object",
        },
      ],
    },
    setAttributeOverrides: {
      displayName: "Set Attribute Overrides",
      parameters: [
        {
          name: "attributes",
          type: "object",
        },
      ],
    },
  },
  providesData: true,
  importPath: "@/fragment/growthbook",
});
