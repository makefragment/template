// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: PIAFRsJicCGh

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: Gl72hv5IMo-p/codeComponent
import Avatar from "../../Avatar"; // plasmic-import: 3i84rYjQRrs4/component
import { UploadWrapper } from "@plasmicpkgs/antd5/skinny/registerUpload";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicProfileHead.module.css"; // plasmic-import: PIAFRsJicCGh/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: BN2FHeznHhq_/icon
import Icon26Icon from "./icons/PlasmicIcon__Icon26"; // plasmic-import: frSwMvWOgAN1/icon

createPlasmicElementProxy;

export type PlasmicProfileHead__VariantMembers = {};
export type PlasmicProfileHead__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfileHead__VariantsArgs;
export const PlasmicProfileHead__VariantProps = new Array<VariantPropType>();

export type PlasmicProfileHead__ArgsType = {};
type ArgPropType = keyof PlasmicProfileHead__ArgsType;
export const PlasmicProfileHead__ArgProps = new Array<ArgPropType>();

export type PlasmicProfileHead__OverridesType = {
  root?: Flex__<"div">;
  profile?: Flex__<typeof ApiRequest>;
  avatar?: Flex__<typeof Avatar>;
  upload?: Flex__<typeof UploadWrapper>;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultProfileHeadProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfileHead__RenderFunc(props: {
  variants: PlasmicProfileHead__VariantsArgs;
  args: PlasmicProfileHead__ArgsType;
  overrides: PlasmicProfileHead__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "upload.files",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "imgPreview",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "profile.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "profile.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "profile.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <ApiRequest
        data-plasmic-name={"profile"}
        data-plasmic-override={overrides.profile}
        className={classNames("__wab_instance", sty.profile)}
        errorDisplay={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__f4832
            )}
          >
            {""}
          </div>
        }
        loadingDisplay={
          <div className={classNames(projectcss.all, sty.freeBox__ehRb)}>
            <Icon10Icon
              className={classNames(projectcss.all, sty.svg__y7K04)}
              role={"img"}
            />
          </div>
        }
        method={"GET"}
        onError={generateStateOnChangeProp($state, ["profile", "error"])}
        onLoading={generateStateOnChangeProp($state, ["profile", "loading"])}
        onSuccess={generateStateOnChangeProp($state, ["profile", "data"])}
        url={"https://api.paziresh24.com/V1/doctor/profile"}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__p2O2Y)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sK3Um)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__f836)}>
              <Avatar
                data-plasmic-name={"avatar"}
                data-plasmic-override={overrides.avatar}
                className={classNames("__wab_instance", sty.avatar)}
                src={(() => {
                  try {
                    return `https://uploader.paziresh24.com/api/file/${$state.profile.data.data.image}`;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />

              <UploadWrapper
                data-plasmic-name={"upload"}
                data-plasmic-override={overrides.upload}
                accept={"image/*"}
                className={classNames("__wab_instance", sty.upload)}
                files={generateStateValueProp($state, ["upload", "files"])}
                listType={"picture"}
                onFilesChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, ["upload", "files"]).apply(
                    null,
                    eventArgs
                  );
                  (async files => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              "POST",
                              "https://api.paziresh24.com/V1/doctor/profile/image",
                              undefined,
                              (() => {
                                try {
                                  return (() => {
                                    let formData = new globalThis.FormData();
                                    formData.append(
                                      "file",
                                      $state.upload.files?.[0]?.contents
                                    );
                                    return formData;
                                  })();
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })(),
                              {
                                headers: {
                                  "Content-Type": "multipart/form-data"
                                }
                              }
                            ]
                          };
                          return $globalActions["Fragment.apiRequest"]?.apply(
                            null,
                            [...actionArgs.args]
                          );
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }

                    $steps["runCode"] = false
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                let formData = new globalThis.FormData();
                                formData.append(
                                  "file",
                                  $state.upload.files?.[0]?.contents
                                );
                                return console.log(formData);
                              })();
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }
                  }).apply(null, eventArgs);
                }}
                showUploadList={false}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___6GKuj)}
                >
                  <Icon26Icon
                    className={classNames(projectcss.all, sty.svg__r5O0X)}
                    role={"img"}
                  />
                </div>
              </UploadWrapper>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lx8K6)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gxBDc
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return `${$state.profile.data.data.name || ""} ${
                        $state.profile.data.data.family || ""
                      }`;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "\u0646\u0627\u0645 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.freeBox__bjZmx,
                  "no-scroll"
                )}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $state.profile.data.data.expertises;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__afQM
                      )}
                      key={currentIndex}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return !!currentItem.alias_title
                              ? currentItem.alias_title
                              : `${currentItem.degree.name || ""} ${
                                  currentItem.expertise.name || ""
                                }`;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "\u0627\u062a\u0627\u0642 \u0639\u0645\u0644";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  );
                })}
              </Stack__>
            </Stack__>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__prR0)}>
            <PlasmicLink__
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              component={Link}
              href={(() => {
                try {
                  return `https://www.paziresh24.com/dr/${$state.profile.data.data.slug}`;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              platform={"nextjs"}
              target={"_blank"}
            >
              {
                "\u0645\u0634\u0627\u0647\u062f\u0647 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644"
              }
            </PlasmicLink__>
          </div>
        </Stack__>
      </ApiRequest>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "profile", "avatar", "upload", "link"],
  profile: ["profile", "avatar", "upload", "link"],
  avatar: ["avatar"],
  upload: ["upload"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  profile: typeof ApiRequest;
  avatar: typeof Avatar;
  upload: typeof UploadWrapper;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileHead__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileHead__VariantsArgs;
    args?: PlasmicProfileHead__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfileHead__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfileHead__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProfileHead__ArgProps,
          internalVariantPropNames: PlasmicProfileHead__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileHead__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileHead";
  } else {
    func.displayName = `PlasmicProfileHead.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileHead = Object.assign(
  // Top-level PlasmicProfileHead renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    profile: makeNodeComponent("profile"),
    avatar: makeNodeComponent("avatar"),
    upload: makeNodeComponent("upload"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicProfileHead
    internalVariantProps: PlasmicProfileHead__VariantProps,
    internalArgProps: PlasmicProfileHead__ArgProps
  }
);

export default PlasmicProfileHead;
/* prettier-ignore-end */
