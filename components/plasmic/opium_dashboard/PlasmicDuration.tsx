// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: hYLHU_pJKp9-

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
import { TimePicker } from "@/fragment/components/time-picker"; // plasmic-import: 0Mwoeihejk-H/codeComponent
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicDuration.module.css"; // plasmic-import: hYLHU_pJKp9-/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: q8mRvXMvOrv9/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BMYyZW6g83gg/icon

createPlasmicElementProxy;

export type PlasmicDuration__VariantMembers = {
  check: "check";
};
export type PlasmicDuration__VariantsArgs = {
  check?: SingleBooleanChoiceArg<"check">;
};
type VariantPropType = keyof PlasmicDuration__VariantsArgs;
export const PlasmicDuration__VariantProps = new Array<VariantPropType>(
  "check"
);

export type PlasmicDuration__ArgsType = {
  centerId?: string;
  newduration?: string;
  onNewdurationChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicDuration__ArgsType;
export const PlasmicDuration__ArgProps = new Array<ArgPropType>(
  "centerId",
  "newduration",
  "onNewdurationChange"
);

export type PlasmicDuration__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  dialog?: Flex__<typeof Dialog>;
  fragmentTimePicker?: Flex__<typeof TimePicker>;
  button?: Flex__<typeof Button>;
};

export interface DefaultDurationProps {
  centerId?: string;
  newduration?: string;
  onNewdurationChange?: (val: string) => void;
  check?: SingleBooleanChoiceArg<"check">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDuration__RenderFunc(props: {
  variants: PlasmicDuration__VariantsArgs;
  args: PlasmicDuration__ArgsType;
  overrides: PlasmicDuration__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          centerId: "5532"
        },
        props.args
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
        path: "duration",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fragmentTimePicker.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "00:00"
      },
      {
        path: "sampleDuration",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "newduration",
        type: "writable",
        variableType: "text",

        valueProp: "newduration",
        onChangeProp: "onNewdurationChange"
      },
      {
        path: "check",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.check
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect, {
          [sty.sideEffectcheck]: hasVariant($state, "check", "check")
        })}
        onMount={async () => {
          const $steps = {};

          $steps["apiWorkhours"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://api.paziresh24.com/V1/doctor/center/workhours",
                    (() => {
                      try {
                        return {
                          center_id: $props.centerId
                        };
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["apiWorkhours"] != null &&
            typeof $steps["apiWorkhours"] === "object" &&
            typeof $steps["apiWorkhours"].then === "function"
          ) {
            $steps["apiWorkhours"] = await $steps["apiWorkhours"];
          }

          $steps["updateDuration"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["duration"]
                  },
                  operation: 0,
                  value: $steps.apiWorkhours.data
                };
                return (({ variable, value, startIndex, deleteCount }) => {
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
            $steps["updateDuration"] != null &&
            typeof $steps["updateDuration"] === "object" &&
            typeof $steps["updateDuration"].then === "function"
          ) {
            $steps["updateDuration"] = await $steps["updateDuration"];
          }

          $steps["sampleDuration"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://apigw.paziresh24.com/v1/sample-duration"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["sampleDuration"] != null &&
            typeof $steps["sampleDuration"] === "object" &&
            typeof $steps["sampleDuration"].then === "function"
          ) {
            $steps["sampleDuration"] = await $steps["sampleDuration"];
          }

          $steps["updateSampleDuration"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["sampleDuration"]
                  },
                  operation: 0,
                  value: $steps.sampleDuration.data
                };
                return (({ variable, value, startIndex, deleteCount }) => {
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
            $steps["updateSampleDuration"] != null &&
            typeof $steps["updateSampleDuration"] === "object" &&
            typeof $steps["updateSampleDuration"].then === "function"
          ) {
            $steps["updateSampleDuration"] = await $steps[
              "updateSampleDuration"
            ];
          }
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__bE5G
        )}
      >
        {
          "\u0645\u062f\u062a \u0632\u0645\u0627\u0646\u200c \u0627\u06cc\u062f\u0647\u200c\u0622\u0644 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u0631\u0627\u0626\u0647 \u06cc\u06a9 \u0648\u06cc\u0632\u06cc\u062a \u062c\u0627\u0645\u0639 \u0648 \u067e\u06cc\u0648\u0633\u062a\u0647 \u0628\u0647 \u06cc\u06a9 \u0628\u06cc\u0645\u0627\u0631 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f"
        }
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__mljoZ)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6E1Ri)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__uH8A)}>
            <Dialog
              data-plasmic-name={"dialog"}
              data-plasmic-override={overrides.dialog}
              body={
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__vXIx)}
                >
                  <TimePicker
                    data-plasmic-name={"fragmentTimePicker"}
                    data-plasmic-override={overrides.fragmentTimePicker}
                    className={classNames(
                      "__wab_instance",
                      sty.fragmentTimePicker
                    )}
                    minuteExclude={(() => {
                      try {
                        return [...Array(61).keys()].filter(
                          num => num % 5 !== 0 || num === 0
                        );
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
                    notShowExclude={true}
                    onChange={generateStateOnChangeProp($state, [
                      "fragmentTimePicker",
                      "value"
                    ])}
                    value={generateStateValueProp($state, [
                      "fragmentTimePicker",
                      "value"
                    ])}
                  />

                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    children2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___7V3Od
                        )}
                      >
                        {"\u062b\u0628\u062a"}
                      </div>
                    }
                    className={classNames("__wab_instance", sty.button)}
                    onClick={async event => {
                      const $steps = {};

                      $steps["updateNewduration"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["newduration"]
                              },
                              operation: 0,
                              value: `${
                                parseInt(
                                  $state.fragmentTimePicker.value.split(":")[0]
                                ) *
                                  60 +
                                parseInt(
                                  $state.fragmentTimePicker.value.split(":")[1]
                                )
                              }`
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
                        $steps["updateNewduration"] != null &&
                        typeof $steps["updateNewduration"] === "object" &&
                        typeof $steps["updateNewduration"].then === "function"
                      ) {
                        $steps["updateNewduration"] = await $steps[
                          "updateNewduration"
                        ];
                      }

                      $steps["updateDialogOpen"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["dialog", "open"]
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
                        $steps["updateDialogOpen"] != null &&
                        typeof $steps["updateDialogOpen"] === "object" &&
                        typeof $steps["updateDialogOpen"].then === "function"
                      ) {
                        $steps["updateDialogOpen"] = await $steps[
                          "updateDialogOpen"
                        ];
                      }

                      $steps["updateDurationDataDuration"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["duration", "data", "duration"]
                              },
                              operation: 0,
                              value: `${
                                parseInt(
                                  $state.fragmentTimePicker.value.split(":")[0]
                                ) *
                                  60 +
                                parseInt(
                                  $state.fragmentTimePicker.value.split(":")[1]
                                )
                              }`
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
                        $steps["updateDurationDataDuration"] != null &&
                        typeof $steps["updateDurationDataDuration"] ===
                          "object" &&
                        typeof $steps["updateDurationDataDuration"].then ===
                          "function"
                      ) {
                        $steps["updateDurationDataDuration"] = await $steps[
                          "updateDurationDataDuration"
                        ];
                      }
                    }}
                  />
                </Stack__>
              }
              className={classNames("__wab_instance", sty.dialog)}
              onOpenChange={generateStateOnChangeProp($state, [
                "dialog",
                "open"
              ])}
              open={generateStateValueProp($state, ["dialog", "open"])}
              title={
                "\u0632\u0645\u0627\u0646 \u062f\u0644\u062e\u0648\u0627\u0647"
              }
              trigger={
                <Icon2Icon
                  className={classNames(projectcss.all, sty.svg__l9OeP)}
                  role={"img"}
                />
              }
            />
          </div>
          {(() => {
            try {
              return (
                !$state.sampleDuration["sample-duration"].includes(
                  $state.newduration
                ) ||
                !$state.sampleDuration["sample-duration"].includes(
                  $state.duration.data.duration
                )
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })() ? (
            <div className={classNames(projectcss.all, sty.freeBox__waRdG)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mwWqf
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return `${
                        $state.newduration || $state.duration.data.duration
                      } دقیقه`;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__xGfkX)}
                role={"img"}
              />
            </div>
          ) : null}
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $state.sampleDuration["sample-duration"]
                  .split(",")
                  .map(item => ({ name: item }));
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
                className={classNames(projectcss.all, sty.freeBox__itxxt)}
                dir={"rtl"}
                key={currentIndex}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateNewduration"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["newduration"]
                          },
                          operation: 0,
                          value: currentItem.name
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
                    $steps["updateNewduration"] != null &&
                    typeof $steps["updateNewduration"] === "object" &&
                    typeof $steps["updateNewduration"].then === "function"
                  ) {
                    $steps["updateNewduration"] = await $steps[
                      "updateNewduration"
                    ];
                  }

                  $steps["updateDuration"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["duration", "data", "duration"]
                          },
                          operation: 0,
                          value: currentItem.name
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
                    $steps["updateDuration"] != null &&
                    typeof $steps["updateDuration"] === "object" &&
                    typeof $steps["updateDuration"].then === "function"
                  ) {
                    $steps["updateDuration"] = await $steps["updateDuration"];
                  }

                  $steps["sendEvent"] = true
                    ? (() => {
                        const actionArgs = {
                          args: [
                            (() => {
                              try {
                                return undefined;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()
                          ]
                        };
                        return $globalActions["Splunk.sendLog"]?.apply(null, [
                          ...actionArgs.args
                        ]);
                      })()
                    : undefined;
                  if (
                    $steps["sendEvent"] != null &&
                    typeof $steps["sendEvent"] === "object" &&
                    typeof $steps["sendEvent"].then === "function"
                  ) {
                    $steps["sendEvent"] = await $steps["sendEvent"];
                  }
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pcO2
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return `${parseInt(currentItem.name).toLocaleString(
                          "fa"
                        )} دقیقه`;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "5 \u062f\u0642\u06cc\u0642\u0647";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
                {(
                  hasVariant($state, "check", "check")
                    ? (() => {
                        try {
                          return $state.check === true;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return false;
                          }
                          throw e;
                        }
                      })()
                    : (() => {
                        try {
                          return (
                            currentItem.name ===
                            $state.duration.data.duration.toString()
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return false;
                          }
                          throw e;
                        }
                      })()
                ) ? (
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__cBvHc, {
                      [sty.svgcheck__cBvHcRijdN]: hasVariant(
                        $state,
                        "check",
                        "check"
                      )
                    })}
                    onClick={async event => {
                      const $steps = {};

                      $steps["updateDuration"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["duration"]
                              },
                              operation: 0
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
                        $steps["updateDuration"] != null &&
                        typeof $steps["updateDuration"] === "object" &&
                        typeof $steps["updateDuration"].then === "function"
                      ) {
                        $steps["updateDuration"] = await $steps[
                          "updateDuration"
                        ];
                      }
                    }}
                    role={"img"}
                  />
                ) : null}
              </div>
            );
          })}
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect", "dialog", "fragmentTimePicker", "button"],
  sideEffect: ["sideEffect"],
  dialog: ["dialog", "fragmentTimePicker", "button"],
  fragmentTimePicker: ["fragmentTimePicker"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  dialog: typeof Dialog;
  fragmentTimePicker: typeof TimePicker;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDuration__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDuration__VariantsArgs;
    args?: PlasmicDuration__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDuration__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDuration__ArgsType,
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
          internalArgPropNames: PlasmicDuration__ArgProps,
          internalVariantPropNames: PlasmicDuration__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDuration__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDuration";
  } else {
    func.displayName = `PlasmicDuration.${nodeName}`;
  }
  return func;
}

export const PlasmicDuration = Object.assign(
  // Top-level PlasmicDuration renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    dialog: makeNodeComponent("dialog"),
    fragmentTimePicker: makeNodeComponent("fragmentTimePicker"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicDuration
    internalVariantProps: PlasmicDuration__VariantProps,
    internalArgProps: PlasmicDuration__ArgProps
  }
);

export default PlasmicDuration;
/* prettier-ignore-end */
