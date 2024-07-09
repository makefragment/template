// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: OnraYGfaX_Kh

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import Dialog from "../../Dialog"; // plasmic-import: FJiI2-N1is_F/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import UncertainBookStatusList from "../../UncertainBookStatusList"; // plasmic-import: pk_8VfwTEmq0/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicUncertainBookStatusListPage.module.css"; // plasmic-import: OnraYGfaX_Kh/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: BN2FHeznHhq_/icon

createPlasmicElementProxy;

export type PlasmicUncertainBookStatusListPage__VariantMembers = {};
export type PlasmicUncertainBookStatusListPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicUncertainBookStatusListPage__VariantsArgs;
export const PlasmicUncertainBookStatusListPage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUncertainBookStatusListPage__ArgsType = {};
type ArgPropType = keyof PlasmicUncertainBookStatusListPage__ArgsType;
export const PlasmicUncertainBookStatusListPage__ArgProps =
  new Array<ArgPropType>();

export type PlasmicUncertainBookStatusListPage__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  dialog?: Flex__<typeof Dialog>;
  checkNow?: Flex__<typeof Button>;
  uncertainBookStatusList?: Flex__<typeof UncertainBookStatusList>;
  checkLater?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
};

export interface DefaultUncertainBookStatusListPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUncertainBookStatusListPage__RenderFunc(props: {
  variants: PlasmicUncertainBookStatusListPage__VariantsArgs;
  args: PlasmicUncertainBookStatusListPage__ArgsType;
  overrides: PlasmicUncertainBookStatusListPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

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
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "countUncertainBookStatus",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "loading",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "true"
      },
      {
        path: "uncertainBookStatusList.sureVisited",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__q1Xo)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___0IePt)}>
              <SideEffect
                data-plasmic-name={"sideEffect"}
                data-plasmic-override={overrides.sideEffect}
                className={classNames("__wab_instance", sty.sideEffect)}
                onMount={async () => {
                  const $steps = {};

                  $steps["loading"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["loading"]
                          },
                          operation: 0,
                          value: true
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["loading"] != null &&
                    typeof $steps["loading"] === "object" &&
                    typeof $steps["loading"].then === "function"
                  ) {
                    $steps["loading"] = await $steps["loading"];
                  }

                  $steps["apiCountUncertainBookStatus"] = true
                    ? (() => {
                        const actionArgs = {
                          args: [
                            "GET",
                            "https://apigw.paziresh24.com/v1/count-uncertain-book-status"
                          ]
                        };
                        return $globalActions["Fragment.apiRequest"]?.apply(
                          null,
                          [...actionArgs.args]
                        );
                      })()
                    : undefined;
                  if (
                    $steps["apiCountUncertainBookStatus"] != null &&
                    typeof $steps["apiCountUncertainBookStatus"] === "object" &&
                    typeof $steps["apiCountUncertainBookStatus"].then ===
                      "function"
                  ) {
                    $steps["apiCountUncertainBookStatus"] = await $steps[
                      "apiCountUncertainBookStatus"
                    ];
                  }

                  $steps["updateCountUncertainBookStatus"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["countUncertainBookStatus"]
                          },
                          operation: 0,
                          value: $steps.apiCountUncertainBookStatus.data
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateCountUncertainBookStatus"] != null &&
                    typeof $steps["updateCountUncertainBookStatus"] ===
                      "object" &&
                    typeof $steps["updateCountUncertainBookStatus"].then ===
                      "function"
                  ) {
                    $steps["updateCountUncertainBookStatus"] = await $steps[
                      "updateCountUncertainBookStatus"
                    ];
                  }

                  $steps["loadingFalse"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["loading"]
                          },
                          operation: 0,
                          value: false
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["loadingFalse"] != null &&
                    typeof $steps["loadingFalse"] === "object" &&
                    typeof $steps["loadingFalse"].then === "function"
                  ) {
                    $steps["loadingFalse"] = await $steps["loadingFalse"];
                  }
                }}
              />

              {(() => {
                try {
                  return $state.countUncertainBookStatus.length > 0;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1DHaR
                  )}
                >
                  {"\u067e\u0632\u0634\u06a9 \u06af\u0631\u0627\u0645\u06cc"}
                </div>
              ) : null}
              {(() => {
                try {
                  return $state.countUncertainBookStatus.length > 0;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lvAk
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return `وضعیت «${$state.countUncertainBookStatus[0].count_id}» تا از نوبت‌های ویزیت آنلاین را به پذیرش ۲۴ اعلام نکرده‌اید.
هزینه‌های مربوط به این نوبت‌ها برای شما محاسبه نشده است و تا زمان تعیین وضعیت، برای شما محاسبه نمی‌گردد.`;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0648\u0636\u0639\u06cc\u062a \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0646\u0648\u0628\u062a\u200c\u0647\u0627\u06cc \u0648\u06cc\u0632\u06cc\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0631\u0627 \u0628\u0647 \u067e\u0630\u06cc\u0631\u0634 \u06f2\u06f4 \u0627\u0639\u0644\u0627\u0645 \u0646\u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f.\n\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0627\u06cc\u0646 \u0646\u0648\u0628\u062a\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0645\u062d\u0627\u0633\u0628\u0647 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u062a\u0627 \u0632\u0645\u0627\u0646 \u062a\u0639\u06cc\u06cc\u0646 \u0648\u0636\u0639\u06cc\u062a \u0648 \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628\u060c \u0645\u0628\u0644\u063a \u0645\u0631\u0628\u0648\u0637\u0647 \u062f\u0631 \u062d\u0633\u0627\u0628 \u0634\u0631\u06a9\u062a \u0628\u0647 \u0635\u0648\u0631\u062a \u0642\u0631\u0636\u200c\u0627\u0644\u062d\u0633\u0646\u0647 \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f.\n";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              ) : null}
            </div>
            {(() => {
              try {
                return $state.countUncertainBookStatus.length > 0;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__efiaG)}
              >
                <Dialog
                  data-plasmic-name={"dialog"}
                  data-plasmic-override={overrides.dialog}
                  body={
                    <React.Fragment>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__u2Sgq
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__rTs0P
                          )}
                        >
                          {
                            '\u067e\u0632\u0634\u06a9 \u06af\u0631\u0627\u0645\u06cc\n \u062f\u0631 \u0635\u0648\u0631\u062a \u0627\u0646\u062c\u0627\u0645 \u0648\u06cc\u0632\u06cc\u062a \u0628\u06cc\u0645\u0627\u0631\u060c \u06af\u0632\u06cc\u0646\u0647 "\u0648\u06cc\u0632\u06cc\u062a \u06a9\u0631\u062f\u0647 \u0627\u0645" \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.\n \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646\u0635\u0648\u0631\u062a\u060c \u0646\u0648\u0628\u062a \u0628\u06cc\u0645\u0627\u0631 \u0631\u0627 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0646\u0627\u0645 \u0628\u06cc\u0645\u0627\u0631 \u062d\u0630\u0641 \u06a9\u0646\u06cc\u062f.'
                          }
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jPsPn
                        )}
                      >
                        <UncertainBookStatusList
                          data-plasmic-name={"uncertainBookStatusList"}
                          data-plasmic-override={
                            overrides.uncertainBookStatusList
                          }
                          className={classNames(
                            "__wab_instance",
                            sty.uncertainBookStatusList
                          )}
                          onSureVisitedChange={generateStateOnChangeProp(
                            $state,
                            ["uncertainBookStatusList", "sureVisited"]
                          )}
                          sureVisited={generateStateValueProp($state, [
                            "uncertainBookStatusList",
                            "sureVisited"
                          ])}
                        />
                      </div>
                    </React.Fragment>
                  }
                  className={classNames("__wab_instance", sty.dialog)}
                  onOpenChange={generateStateOnChangeProp($state, [
                    "dialog",
                    "open"
                  ])}
                  open={generateStateValueProp($state, ["dialog", "open"])}
                  title={
                    "\u062a\u0639\u06cc\u06cc\u0646 \u0648\u0636\u0639\u06cc\u062a \u0646\u0648\u0628\u062a\u200c\u0647\u0627"
                  }
                  trigger={
                    <Button
                      data-plasmic-name={"checkNow"}
                      data-plasmic-override={overrides.checkNow}
                      children2={
                        "\u0627\u0644\u0627\u0646 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0645"
                      }
                      className={classNames("__wab_instance", sty.checkNow)}
                      onClick={async event => {
                        const $steps = {};
                      }}
                    />
                  }
                />

                <Button
                  data-plasmic-name={"checkLater"}
                  data-plasmic-override={overrides.checkLater}
                  children2={
                    "\u0628\u0639\u062f\u0627 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0645"
                  }
                  className={classNames("__wab_instance", sty.checkLater)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToHttpsdrpaziresh24Comsettingpayment"] = true
                      ? (() => {
                          const actionArgs = {
                            destination:
                              "https://dr.paziresh24.com/setting/payment"
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToHttpsdrpaziresh24Comsettingpayment"] !=
                        null &&
                      typeof $steps[
                        "goToHttpsdrpaziresh24Comsettingpayment"
                      ] === "object" &&
                      typeof $steps["goToHttpsdrpaziresh24Comsettingpayment"]
                        .then === "function"
                    ) {
                      $steps["goToHttpsdrpaziresh24Comsettingpayment"] =
                        await $steps["goToHttpsdrpaziresh24Comsettingpayment"];
                    }
                  }}
                />
              </Stack__>
            ) : null}
            {(() => {
              try {
                return $state.loading;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div className={classNames(projectcss.all, sty.freeBox__vLuLs)}>
                <Icon10Icon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </div>
            ) : null}
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "dialog",
    "checkNow",
    "uncertainBookStatusList",
    "checkLater",
    "svg"
  ],
  sideEffect: ["sideEffect"],
  dialog: ["dialog", "checkNow", "uncertainBookStatusList"],
  checkNow: ["checkNow"],
  uncertainBookStatusList: ["uncertainBookStatusList"],
  checkLater: ["checkLater"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  dialog: typeof Dialog;
  checkNow: typeof Button;
  uncertainBookStatusList: typeof UncertainBookStatusList;
  checkLater: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUncertainBookStatusListPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUncertainBookStatusListPage__VariantsArgs;
    args?: PlasmicUncertainBookStatusListPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicUncertainBookStatusListPage__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicUncertainBookStatusListPage__ArgsType,
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
          internalArgPropNames: PlasmicUncertainBookStatusListPage__ArgProps,
          internalVariantPropNames:
            PlasmicUncertainBookStatusListPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUncertainBookStatusListPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUncertainBookStatusListPage";
  } else {
    func.displayName = `PlasmicUncertainBookStatusListPage.${nodeName}`;
  }
  return func;
}

export const PlasmicUncertainBookStatusListPage = Object.assign(
  // Top-level PlasmicUncertainBookStatusListPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    dialog: makeNodeComponent("dialog"),
    checkNow: makeNodeComponent("checkNow"),
    uncertainBookStatusList: makeNodeComponent("uncertainBookStatusList"),
    checkLater: makeNodeComponent("checkLater"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicUncertainBookStatusListPage
    internalVariantProps: PlasmicUncertainBookStatusListPage__VariantProps,
    internalArgProps: PlasmicUncertainBookStatusListPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUncertainBookStatusListPage;
/* prettier-ignore-end */
