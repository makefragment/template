// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: lSLy8Nehd6MM

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
import Duration from "../../Duration"; // plasmic-import: hYLHU_pJKp9-/component
import Workhours from "../../Workhours"; // plasmic-import: AuSNwEdbo4sV/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicHoursDaysOfWeek.module.css"; // plasmic-import: lSLy8Nehd6MM/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: BN2FHeznHhq_/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicHoursDaysOfWeek__VariantMembers = {};
export type PlasmicHoursDaysOfWeek__VariantsArgs = {};
type VariantPropType = keyof PlasmicHoursDaysOfWeek__VariantsArgs;
export const PlasmicHoursDaysOfWeek__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHoursDaysOfWeek__ArgsType = {
  duration?: any;
  onDurationChange?: (val: string) => void;
  centerId?: string;
  userCenterId?: string;
};
type ArgPropType = keyof PlasmicHoursDaysOfWeek__ArgsType;
export const PlasmicHoursDaysOfWeek__ArgProps = new Array<ArgPropType>(
  "duration",
  "onDurationChange",
  "centerId",
  "userCenterId"
);

export type PlasmicHoursDaysOfWeek__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  sideEffect?: Flex__<typeof SideEffect>;
  durationOfWorkhour?: Flex__<typeof Duration>;
  workhours?: Flex__<typeof Workhours>;
  button?: Flex__<typeof Button>;
};

export interface DefaultHoursDaysOfWeekProps {
  duration?: any;
  onDurationChange?: (val: string) => void;
  centerId?: string;
  userCenterId?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHoursDaysOfWeek__RenderFunc(props: {
  variants: PlasmicHoursDaysOfWeek__VariantsArgs;
  args: PlasmicHoursDaysOfWeek__ArgsType;
  overrides: PlasmicHoursDaysOfWeek__OverridesType;
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
        path: "duration",
        type: "writable",
        variableType: "object",

        valueProp: "duration",
        onChangeProp: "onDurationChange"
      },
      {
        path: "workhours[].listOfWorkhoureCopy",
        type: "private",
        variableType: "array"
      },
      {
        path: "days",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { id: 6, name: "\u0634\u0646\u0628\u0647", nameEn: "Saturday" },
          {
            id: 7,
            name: "\u06cc\u06a9\u0634\u0646\u0628\u0647",
            nameEn: "Sunday"
          },
          {
            id: 1,
            name: "\u062f\u0648\u0634\u0646\u0628\u0647",
            nameEn: "Monday"
          },
          {
            id: 2,
            name: "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
            nameEn: "Tuesday"
          },
          {
            id: 3,
            name: "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
            nameEn: "Wednesday"
          },
          {
            id: 4,
            name: "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647",
            nameEn: "Thursday"
          },
          { id: 5, name: "\u062c\u0645\u0639\u0647", nameEn: "Friday" }
        ]
      },
      {
        path: "workhours[].checkboxIsChecked",
        type: "private",
        variableType: "boolean"
      },
      {
        path: "workhours[].warning",
        type: "private",
        variableType: "text"
      },
      {
        path: "durationOfWorkhour.newduration",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "loading",
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
      {(() => {
        try {
          return $state.loading === true;
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
        <Icon10Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      ) : null}
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={(() => {
          try {
            return [$props.centerId, $props.userCenterId, $props.duration];
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
        onMount={async () => {
          const $steps = {};

          $steps["startLoading"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["loading"]
                  },
                  operation: 0,
                  value: true
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
            $steps["startLoading"] != null &&
            typeof $steps["startLoading"] === "object" &&
            typeof $steps["startLoading"].then === "function"
          ) {
            $steps["startLoading"] = await $steps["startLoading"];
          }

          $steps["getWorkhours"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://api.paziresh24.com/V1/doctor/center/workhours",
                    (() => {
                      try {
                        return { center_id: $props.centerId };
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
            $steps["getWorkhours"] != null &&
            typeof $steps["getWorkhours"] === "object" &&
            typeof $steps["getWorkhours"].then === "function"
          ) {
            $steps["getWorkhours"] = await $steps["getWorkhours"];
          }

          $steps["updateDuration"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["duration"]
                  },
                  operation: 0,
                  value: $steps.getWorkhours.data
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

          $steps["finishLoading"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["loading"]
                  },
                  operation: 0,
                  value: false
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
            $steps["finishLoading"] != null &&
            typeof $steps["finishLoading"] === "object" &&
            typeof $steps["finishLoading"].then === "function"
          ) {
            $steps["finishLoading"] = await $steps["finishLoading"];
          }
        }}
      />

      {(() => {
        try {
          return !$state.loading;
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
        <div className={classNames(projectcss.all, sty.freeBox___6GKnj)}>
          <Duration
            data-plasmic-name={"durationOfWorkhour"}
            data-plasmic-override={overrides.durationOfWorkhour}
            className={classNames("__wab_instance", sty.durationOfWorkhour)}
            newduration={generateStateValueProp($state, [
              "durationOfWorkhour",
              "newduration"
            ])}
            onNewdurationChange={generateStateOnChangeProp($state, [
              "durationOfWorkhour",
              "newduration"
            ])}
          />
        </div>
      ) : null}
      {(() => {
        try {
          return !$state.loading;
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
        <div className={classNames(projectcss.all, sty.freeBox__kIPq)}>
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $state.days;
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
            return (() => {
              const child$Props = {
                checkboxIsChecked: generateStateValueProp($state, [
                  "workhours",
                  __plasmic_idx_0,
                  "checkboxIsChecked"
                ]),
                className: classNames("__wab_instance", sty.workhours),
                dayOfWeek: (() => {
                  try {
                    return currentItem.id;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })(),
                duration: (() => {
                  try {
                    return $state.duration.data.duration;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })(),
                endedSelectedDay: async id => {
                  const $steps = {};

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              const x = JSON.stringify(
                                $state.workhours[currentIndex]
                                  .listOfWorkhoureCopy
                              );
                              return id.forEach(day => {
                                $state.workhours[
                                  $state.days.findIndex(item => item.id == day)
                                ].listOfWorkhoureCopy = JSON.parse(x);
                                $state.workhours[
                                  $state.days.findIndex(item => item.id == day)
                                ].checkboxIsChecked = true;
                              });
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
                },
                key: currentIndex,
                listOfWorkhoureCopy: generateStateValueProp($state, [
                  "workhours",
                  __plasmic_idx_0,
                  "listOfWorkhoureCopy"
                ]),
                onCheckboxIsCheckedChange: generateStateOnChangeProp($state, [
                  "workhours",
                  __plasmic_idx_0,
                  "checkboxIsChecked"
                ]),
                onListOfWorkhoureCopyChange: generateStateOnChangeProp($state, [
                  "workhours",
                  __plasmic_idx_0,
                  "listOfWorkhoureCopy"
                ]),
                onWarningChange: generateStateOnChangeProp($state, [
                  "workhours",
                  __plasmic_idx_0,
                  "warning"
                ])
              };

              initializePlasmicStates(
                $state,
                [
                  {
                    name: "workhours[].listOfWorkhoureCopy",
                    initFunc: ({ $props, $state, $queries }) =>
                      (() => {
                        try {
                          return $state.duration.data.workhours.some(
                            item => item.day === currentItem.id
                          )
                            ? $state.duration.data.workhours
                                .filter(item => item.day === currentItem.id)
                                .map(item => ({ from: item.from, to: item.to }))
                            : [
                                {
                                  from: "18:00",
                                  to: "21:00"
                                }
                              ];
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [{ from: "18:00", to: "21:00" }];
                          }
                          throw e;
                        }
                      })()
                  },
                  {
                    name: "workhours[].checkboxIsChecked",
                    initFunc: ({ $props, $state, $queries }) =>
                      (() => {
                        try {
                          return $state.duration?.data?.workhours?.some?.(
                            item => item.day === currentItem.id
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
                  }
                ],
                [__plasmic_idx_0]
              );
              return (
                <Workhours
                  data-plasmic-name={"workhours"}
                  data-plasmic-override={overrides.workhours}
                  {...child$Props}
                />
              );
            })();
          })}
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            children2={
              "\u0630\u062e\u06cc\u0631\u0647 \u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc"
            }
            className={classNames("__wab_instance", sty.button)}
            onClick={async event => {
              const $steps = {};

              $steps["runCode5"] = $state.workhours.some(
                wh => wh.checkboxIsChecked && wh.warning
              )
                ? (() => {
                    const actionArgs = {
                      args: [
                        "error",
                        "\u0633\u0627\u0639\u0627\u062a \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0647\u0645\u200c\u067e\u0648\u0634\u0627\u0646\u06cc \u062f\u0627\u0631\u0646\u062f."
                      ]
                    };
                    return $globalActions["Fragment.showToast"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["runCode5"] != null &&
                typeof $steps["runCode5"] === "object" &&
                typeof $steps["runCode5"].then === "function"
              ) {
                $steps["runCode5"] = await $steps["runCode5"];
              }

              $steps["saveWorkhours"] = $state.workhours.every(wh =>
                wh.checkboxIsChecked ? !wh.warning : true
              )
                ? (() => {
                    const actionArgs = {
                      args: [
                        "POST",
                        "https://api.paziresh24.com/V1/doctor/center/workhours",
                        undefined,
                        (() => {
                          try {
                            return {
                              center_id: $props.centerId,
                              cost: 0,
                              duration:
                                $state.durationOfWorkhour.newduration ||
                                $state.duration.data.duration,
                              workHours: $state.workhours
                                .map((day, index) =>
                                  day.checkboxIsChecked === true
                                    ? day.listOfWorkhoureCopy.map(workhour => {
                                        return {
                                          day: $state.days[index].id,
                                          from: workhour.from,
                                          to: workhour.to
                                        };
                                      })
                                    : false
                                )
                                .flat()
                                .filter(item => item != false)
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
                $steps["saveWorkhours"] != null &&
                typeof $steps["saveWorkhours"] === "object" &&
                typeof $steps["saveWorkhours"].then === "function"
              ) {
                $steps["saveWorkhours"] = await $steps["saveWorkhours"];
              }

              $steps["runCode3"] =
                $steps.saveWorkhours.data.status === "SUCCESS" &&
                $state.workhours.every(wh =>
                  wh.checkboxIsChecked ? !wh.warning : true
                )
                  ? (() => {
                      const actionArgs = {
                        args: [
                          undefined,
                          "\u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u0634\u062f."
                        ]
                      };
                      return $globalActions["Fragment.showToast"]?.apply(null, [
                        ...actionArgs.args
                      ]);
                    })()
                  : undefined;
              if (
                $steps["runCode3"] != null &&
                typeof $steps["runCode3"] === "object" &&
                typeof $steps["runCode3"].then === "function"
              ) {
                $steps["runCode3"] = await $steps["runCode3"];
              }

              $steps["runCode4"] =
                $steps.saveWorkhours.data.status != "SUCCESS"
                  ? (() => {
                      const actionArgs = {
                        args: [
                          "error",
                          (() => {
                            try {
                              return (
                                $steps.saveWorkhours?.data?.message ??
                                "در ثبت ساعت کاری با خطا مواجه هستید."
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
                          })()
                        ]
                      };
                      return $globalActions["Fragment.showToast"]?.apply(null, [
                        ...actionArgs.args
                      ]);
                    })()
                  : undefined;
              if (
                $steps["runCode4"] != null &&
                typeof $steps["runCode4"] === "object" &&
                typeof $steps["runCode4"].then === "function"
              ) {
                $steps["runCode4"] = await $steps["runCode4"];
              }

              $steps["sendSuccessEvent"] =
                $steps.saveWorkhours.data.status === "SUCCESS" &&
                $state.workhours.every(wh =>
                  wh.checkboxIsChecked ? !wh.warning : true
                )
                  ? (() => {
                      const actionArgs = {
                        args: [
                          (() => {
                            try {
                              return {
                                group: "workhour",
                                data: {
                                  center_id: $props.centerId,
                                  user_center_id: $props.userCenterId,
                                  Workhour: $state.workhours,
                                  Day: $state.days
                                },
                                type: "click-button-save-new-workhour-successful"
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
                      return $globalActions["Splunk.sendLog"]?.apply(null, [
                        ...actionArgs.args
                      ]);
                    })()
                  : undefined;
              if (
                $steps["sendSuccessEvent"] != null &&
                typeof $steps["sendSuccessEvent"] === "object" &&
                typeof $steps["sendSuccessEvent"].then === "function"
              ) {
                $steps["sendSuccessEvent"] = await $steps["sendSuccessEvent"];
              }

              $steps["sendUnsuccessEvent"] =
                $steps.saveWorkhours.data.status != "SUCCESS"
                  ? (() => {
                      const actionArgs = {
                        args: [
                          (() => {
                            try {
                              return {
                                group: "workhour",
                                data: {
                                  center_id: $props.centerId,
                                  user_center_id: $props.userCenterId,
                                  Workhour: $state.workhours,
                                  Day: $state.days
                                },
                                type: "click-button-save-new-workhour-unsuccessful"
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
                      return $globalActions["Splunk.sendLog"]?.apply(null, [
                        ...actionArgs.args
                      ]);
                    })()
                  : undefined;
              if (
                $steps["sendUnsuccessEvent"] != null &&
                typeof $steps["sendUnsuccessEvent"] === "object" &&
                typeof $steps["sendUnsuccessEvent"].then === "function"
              ) {
                $steps["sendUnsuccessEvent"] = await $steps[
                  "sendUnsuccessEvent"
                ];
              }
            }}
          />
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "svg",
    "sideEffect",
    "durationOfWorkhour",
    "workhours",
    "button"
  ],
  svg: ["svg"],
  sideEffect: ["sideEffect"],
  durationOfWorkhour: ["durationOfWorkhour"],
  workhours: ["workhours"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  sideEffect: typeof SideEffect;
  durationOfWorkhour: typeof Duration;
  workhours: typeof Workhours;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHoursDaysOfWeek__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHoursDaysOfWeek__VariantsArgs;
    args?: PlasmicHoursDaysOfWeek__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHoursDaysOfWeek__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHoursDaysOfWeek__ArgsType,
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
          internalArgPropNames: PlasmicHoursDaysOfWeek__ArgProps,
          internalVariantPropNames: PlasmicHoursDaysOfWeek__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHoursDaysOfWeek__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHoursDaysOfWeek";
  } else {
    func.displayName = `PlasmicHoursDaysOfWeek.${nodeName}`;
  }
  return func;
}

export const PlasmicHoursDaysOfWeek = Object.assign(
  // Top-level PlasmicHoursDaysOfWeek renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    sideEffect: makeNodeComponent("sideEffect"),
    durationOfWorkhour: makeNodeComponent("durationOfWorkhour"),
    workhours: makeNodeComponent("workhours"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHoursDaysOfWeek
    internalVariantProps: PlasmicHoursDaysOfWeek__VariantProps,
    internalArgProps: PlasmicHoursDaysOfWeek__ArgProps
  }
);

export default PlasmicHoursDaysOfWeek;
/* prettier-ignore-end */
