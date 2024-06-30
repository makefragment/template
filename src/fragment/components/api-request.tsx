/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

type ApiRequestType = {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  url: string;
  params: Record<string, string | string[]>;
  body?: Record<string, any>;
  config?: Record<string, any>;
  Children: ReactNode;
  ErrorDisplay?: ReactNode;
  LoadingDisplay?: ReactNode;
  previewErrorDisplay?: boolean;
  previewLoadingDisplay?: boolean;
  onError?: (error?: any) => void;
  onLoading?: (loading: boolean) => void;
  onSuccess?: (data: any) => void;
};

export const ApiRequest = (props: ApiRequestType) => {
  const {
    method = "GET",
    params,
    url,
    body,
    config,
    ErrorDisplay,
    LoadingDisplay,
    Children,
    previewErrorDisplay,
    previewLoadingDisplay,
    onError,
    onLoading,
    onSuccess,
  } = props;
  const fragmentConfig = useSelector("Fragment");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    reuqestFn();
  }, [method, params, url, body, config]);

  const reuqestFn = async () => {
    onLoading?.(true);
    setIsLoading(true);
    onError?.(null);
    setIsError(false);
    try {
      let result;
      if (method === "GET") {
        result = await axios.get(url, {
          params,
          ...fragmentConfig.apiConfig,
          ...fragmentConfig.previewApiConfig,
          ...config,
        });
      }
      if (method !== "GET") {
        result = await axios[
          method.toLowerCase() as "post" | "delete" | "put" | "patch"
        ](url, body, {
          params,
          ...fragmentConfig.apiConfig,
          ...fragmentConfig.previewApiConfig,
          ...config,
        });
      }
      onLoading?.(false);
      setIsLoading(false);
      onSuccess?.(result?.data);
    } catch (error) {
      onLoading?.(false);
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        onError?.(error.response?.data);
        setIsError(true);
      }
    }
  };

  if (isLoading || previewLoadingDisplay) {
    return <>{LoadingDisplay}</>;
  }

  if (isError || previewErrorDisplay) {
    return <>{ErrorDisplay}</>;
  }

  return <>{Children}</>;
};

export const apiRequestMeta: CodeComponentMeta<ApiRequestType> = {
  name: "ApiRequest",
  displayName: "Fragment/ApiRequest",
  importPath: "@/fragment/components/api-request",
  figmaMappings: [{ figmaComponentName: "ApiRequest" }],
  props: {
    method: {
      type: "choice",
      options: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      defaultValueHint: "GET",
      defaultValue: "GET",
    },
    url: {
      displayName: "URL",
      type: "string",
      defaultValueHint: "/api/v1/users",
      required: true,
    },
    params: {
      displayName: "Query Params",
      type: "object",
      description: `e.g. { id: 20 }`,
      helpText: "It will append this to the end of the URL as ?key=value.",
    },
    body: {
      displayName: "Body",
      type: "object",
      description: `e.g. { id: 20 }`,
      hidden: (ps) => ps.method == "GET",
    },
    config: {
      displayName: "Request Config",
      type: "object",
      description: `e.g. { headers: { 'Authorization': 'XXX' } }`,
      helpText:
        "Read about request configuration options at https://axios-http.com/docs/req_config",
    },
    previewLoadingDisplay: {
      displayName: "Preview Loading Display",
      type: "boolean",
      editOnly: true,
    },
    previewErrorDisplay: {
      displayName: "Preview Error Display",
      type: "boolean",
      editOnly: true,
    },
    Children: "slot",
    LoadingDisplay: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Loading...",
        },
      ],
    },
    ErrorDisplay: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Error fetching data",
        },
      ],
    },
    onSuccess: {
      type: "eventHandler",
      argTypes: [
        {
          name: "data",
          type: "object",
        },
      ],
    },
    onError: {
      type: "eventHandler",
      argTypes: [
        {
          name: "error",
          type: "object",
        },
      ],
    },
    onLoading: {
      type: "eventHandler",
      argTypes: [
        {
          name: "loading",
          type: "boolean",
        },
      ],
    },
  },
  classNameProp: "className",
  states: {
    data: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onSuccess",
    },
    error: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onError",
    },
    loading: {
      type: "readonly",
      variableType: "boolean",
      onChangeProp: "onLoading",
    },
  },
};
