/* eslint-disable react/display-name */
"use client";

import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import {
  ReactNode,
  useEffect,
  useState,
  useId,
  useImperativeHandle,
  forwardRef,
  useMemo,
} from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";

type ApiRequestType = {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  url: string;
  params: Record<string, string | string[]>;
  body?: Record<string, any>;
  config?: Record<string, any>;
  children: ReactNode;
  errorDisplay?: ReactNode;
  loadingDisplay?: ReactNode;
  previewErrorDisplay?: boolean;
  previewLoadingDisplay?: boolean;
  onError?: (error?: any) => void;
  onLoading?: (loading: boolean) => void;
  onSuccess?: (data: any) => void;
};

export const ApiRequest = forwardRef((props: ApiRequestType, ref) => {
  const {
    method = "GET",
    params,
    url,
    body,
    config,
    errorDisplay,
    loadingDisplay,
    children,
    previewErrorDisplay,
    previewLoadingDisplay,
    onError,
    onLoading,
    onSuccess,
  } = props;
  const fragmentConfig = useSelector("Fragment");
  const id = useId();
  const [isLoading, setIsLoading] = useState(false);
  const fetchProps = useMemo(
    () => ({
      method,
      url,
      params,
      body,
      config: {
        ...fragmentConfig?.apiConfig,
        ...fragmentConfig?.previewApiConfig,
        ...config,
      },
      id: id,
    }),
    [method, url, params, body, config, fragmentConfig, id]
  );
  const { error } = useSWR(
    JSON.stringify(fetchProps),
    () => reuqestFn(fetchProps),
    {
      onError(err) {
        onLoading?.(false);
        setIsLoading(false);
        if (axios.isAxiosError(err)) {
          onError?.(err.response?.data);
        }
      },
      onSuccess(data) {
        onLoading?.(false);
        setIsLoading(false);
        onSuccess?.(data?.data);
      },
      errorRetryCount: 0,
      revalidateOnFocus: false,
      keepPreviousData: false,
    }
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        refresh: () => {
          mutate(JSON.stringify(fetchProps), () => reuqestFn(fetchProps), {
            revalidate: true,
          });
        },
      };
    },
    []
  );

  const reuqestFn = async ({ method, url, params, body, config }: any) => {
    onLoading?.(true);
    onError?.(null);
    onSuccess?.(null);
    setIsLoading(true);
    if (method === "GET") {
      return await axios.get(url, {
        params,
        ...config,
      });
    }
    return await axios[
      method.toLowerCase() as "post" | "delete" | "put" | "patch"
    ](url, body, {
      params,
      ...config,
    });
  };

  if (isLoading || previewLoadingDisplay) {
    return loadingDisplay;
  }

  if (!!error || previewErrorDisplay) {
    return errorDisplay;
  }
  return children;
});

export const apiRequestMeta: CodeComponentMeta<ApiRequestType> = {
  name: "ApiRequest",
  displayName: "Fragment/ApiRequest",
  importPath: "@/fragment/components/api-request",
  figmaMappings: [{ figmaComponentName: "ApiRequest" }],
  section: "Fragment",
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
    children: { displayName: "Children", type: "slot" },
    loadingDisplay: {
      displayName: "Loading Display",
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Loading...",
        },
      ],
    },
    errorDisplay: {
      displayName: "Error Display",
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
  refActions: {
    refresh: {
      argTypes: [],
      displayName: "Refresh Data",
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
