// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: Ita2Jf6_aAkK

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

import Dialog from "../../Dialog"; // plasmic-import: FJiI2-N1is_F/component
import { DatePicker } from "@/fragment/components/date-picker"; // plasmic-import: b38lDo6Nm8Rh/codeComponent
import DrCenters from "../../DrCenters"; // plasmic-import: IkLsGKQP_uPj/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import PatientList from "../../PatientList"; // plasmic-import: uw2UKvNlq2Yr/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import AddPatient from "../../AddPatient"; // plasmic-import: tPaqHhQ134RQ/component

import { useScreenVariants as useScreenVariantsbr2UhI7UlpvR } from "../fragment_icons/PlasmicGlobalVariant__Screen"; // plasmic-import: BR2UhI7ulpvR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicBookList.module.css"; // plasmic-import: Ita2Jf6_aAkK/css

import CalendarIcon from "../fragment_icons/icons/PlasmicIcon__Calendar"; // plasmic-import: e2zWN9c_lxv7/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicBookList__VariantMembers = {};
export type PlasmicBookList__VariantsArgs = {};
type VariantPropType = keyof PlasmicBookList__VariantsArgs;
export const PlasmicBookList__VariantProps = new Array<VariantPropType>();

export type PlasmicBookList__ArgsType = {};
type ArgPropType = keyof PlasmicBookList__ArgsType;
export const PlasmicBookList__ArgProps = new Array<ArgPropType>();

export type PlasmicBookList__OverridesType = {
  bookList?: Flex__<"div">;
  date?: Flex__<"div">;
  calendar?: Flex__<typeof Dialog>;
  تقومماهانه?: Flex__<"div">;
  fragmentDatePicker?: Flex__<typeof DatePicker>;
  center?: Flex__<"div">;
  drCenters?: Flex__<typeof DrCenters>;
  sideEffect?: Flex__<typeof SideEffect>;
  patientList?: Flex__<typeof PatientList>;
  addPatient?: Flex__<"div">;
  dialog?: Flex__<typeof Dialog>;
  button?: Flex__<typeof Button>;
  drCenters2?: Flex__<typeof DrCenters>;
};

export interface DefaultBookListProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBookList__RenderFunc(props: {
  variants: PlasmicBookList__VariantsArgs;
  args: PlasmicBookList__ArgsType;
  overrides: PlasmicBookList__OverridesType;
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
        path: "drCenters.selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "centers",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "all"
      },
      {
        path: "drCenters2.selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectedCenterInAddPatient",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "calendar.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fragmentDatePicker.value",
        type: "private",
        variableType: "number",
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbr2UhI7UlpvR()
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
          data-plasmic-name={"bookList"}
          data-plasmic-override={overrides.bookList}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_fragment_design_system_css.plasmic_tokens,
            sty.bookList
          )}
          dir={"rtl"}
        >
          <div
            data-plasmic-name={"date"}
            data-plasmic-override={overrides.date}
            className={classNames(projectcss.all, sty.date)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___64VOz)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qxVhq
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateCalendarOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["calendar", "open"]
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
                    $steps["updateCalendarOpen"] != null &&
                    typeof $steps["updateCalendarOpen"] === "object" &&
                    typeof $steps["updateCalendarOpen"].then === "function"
                  ) {
                    $steps["updateCalendarOpen"] = await $steps[
                      "updateCalendarOpen"
                    ];
                  }
                }}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $state.fragmentDatePicker.value
                        ? new Date($state.fragmentDatePicker.value * 1000)
                            .toLocaleDateString("fa-IR")
                            .split("/")
                            .join("/")
                        : new Date()
                            .toLocaleDateString("fa-IR")
                            .split("/")
                            .join("/");
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
              <Dialog
                data-plasmic-name={"calendar"}
                data-plasmic-override={overrides.calendar}
                body={
                  <div
                    className={classNames(projectcss.all, sty.freeBox__dhNMk)}
                  >
                    <DatePicker
                      data-plasmic-name={"fragmentDatePicker"}
                      data-plasmic-override={overrides.fragmentDatePicker}
                      className={classNames(
                        "__wab_instance",
                        sty.fragmentDatePicker
                      )}
                      holidays={[]}
                      locale={"fa"}
                      onChange={async (...eventArgs: any) => {
                        generateStateOnChangeProp($state, [
                          "fragmentDatePicker",
                          "value"
                        ]).apply(null, eventArgs);
                        (async date => {
                          const $steps = {};

                          $steps["updateStateتقومOpen"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["calendar", "open"]
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
                            $steps["updateStateتقومOpen"] != null &&
                            typeof $steps["updateStateتقومOpen"] === "object" &&
                            typeof $steps["updateStateتقومOpen"].then ===
                              "function"
                          ) {
                            $steps["updateStateتقومOpen"] = await $steps[
                              "updateStateتقومOpen"
                            ];
                          }
                        }).apply(null, eventArgs);
                      }}
                      value={generateStateValueProp($state, [
                        "fragmentDatePicker",
                        "value"
                      ])}
                    />
                  </div>
                }
                className={classNames("__wab_instance", sty.calendar)}
                onOpenChange={generateStateOnChangeProp($state, [
                  "calendar",
                  "open"
                ])}
                open={generateStateValueProp($state, ["calendar", "open"])}
                title={
                  <div
                    data-plasmic-name={
                      "\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647"
                    }
                    data-plasmic-override={overrides.تقومماهانه}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.تقومماهانه
                    )}
                  >
                    {
                      "\u062a\u0642\u0648\u06cc\u0645 \u0645\u0627\u0647\u0627\u0646\u0647"
                    }
                  </div>
                }
                trigger={
                  <CalendarIcon
                    className={classNames(projectcss.all, sty.svg__g42XL)}
                    role={"img"}
                  />
                }
              />
            </Stack__>
          </div>
          <div
            data-plasmic-name={"center"}
            data-plasmic-override={overrides.center}
            className={classNames(projectcss.all, sty.center)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__k3O51)}>
              <div className={classNames(projectcss.all, sty.freeBox___24C1Y)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l4Akh
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {
                        "\u0644\u06cc\u0633\u062a \u0628\u06cc\u0645\u0627\u0631\u0627\u0646"
                      }
                    </span>
                  </React.Fragment>
                </div>
                <DrCenters
                  data-plasmic-name={"drCenters"}
                  data-plasmic-override={overrides.drCenters}
                  centers={(() => {
                    try {
                      return $state.centers;
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
                  className={classNames("__wab_instance", sty.drCenters)}
                  hasAllOption={true}
                  onSelectedCenterChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "drCenters",
                      "selectedCenter"
                    ]).apply(null, eventArgs);
                    (async val => {
                      const $steps = {};

                      $steps["updateSelectedCenter"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["selectedCenter"]
                              },
                              operation: 0,
                              value: val
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
                        $steps["updateSelectedCenter"] != null &&
                        typeof $steps["updateSelectedCenter"] === "object" &&
                        typeof $steps["updateSelectedCenter"].then ===
                          "function"
                      ) {
                        $steps["updateSelectedCenter"] = await $steps[
                          "updateSelectedCenter"
                        ];
                      }
                    }).apply(null, eventArgs);
                  }}
                />
              </div>
            </div>
            <SideEffect
              data-plasmic-name={"sideEffect"}
              data-plasmic-override={overrides.sideEffect}
              className={classNames("__wab_instance", sty.sideEffect)}
              onMount={async () => {
                const $steps = {};

                $steps["apiCenters"] = true
                  ? (() => {
                      const actionArgs = {
                        args: [
                          "GET",
                          "https://api.paziresh24.com/V1/doctor/centers"
                        ]
                      };
                      return $globalActions["Fragment.apiRequest"]?.apply(
                        null,
                        [...actionArgs.args]
                      );
                    })()
                  : undefined;
                if (
                  $steps["apiCenters"] != null &&
                  typeof $steps["apiCenters"] === "object" &&
                  typeof $steps["apiCenters"].then === "function"
                ) {
                  $steps["apiCenters"] = await $steps["apiCenters"];
                }

                $steps["updateCenters"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["centers"]
                        },
                        operation: 0,
                        value: $steps.apiCenters.data.data
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
                  $steps["updateCenters"] != null &&
                  typeof $steps["updateCenters"] === "object" &&
                  typeof $steps["updateCenters"].then === "function"
                ) {
                  $steps["updateCenters"] = await $steps["updateCenters"];
                }
              }}
            />

            <PatientList
              data-plasmic-name={"patientList"}
              data-plasmic-override={overrides.patientList}
              centers={(() => {
                try {
                  return $state.centers;
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
              className={classNames("__wab_instance", sty.patientList)}
              date={(() => {
                try {
                  return $state.fragmentDatePicker.value
                    ? new Date($state.fragmentDatePicker.value * 1000)
                        .toLocaleDateString("en-gb")
                        .split("/")
                        .reverse()
                        .join("-")
                    : new Date()
                        .toLocaleDateString("en-gb")
                        .split("/")
                        .reverse()
                        .join("-");
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
              selectedCenter={(() => {
                try {
                  return $state.selectedCenter;
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
          </div>
          <div
            data-plasmic-name={"addPatient"}
            data-plasmic-override={overrides.addPatient}
            className={classNames(projectcss.all, sty.addPatient)}
          >
            <Dialog
              data-plasmic-name={"dialog"}
              data-plasmic-override={overrides.dialog}
              body={
                <div
                  className={classNames(projectcss.all, sty.freeBox___8Ydnx)}
                >
                  <DrCenters
                    data-plasmic-name={"drCenters2"}
                    data-plasmic-override={overrides.drCenters2}
                    centers={(() => {
                      try {
                        return $state.centers;
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
                    className={classNames("__wab_instance", sty.drCenters2)}
                    hasAllOption={false}
                    onSelectedCenterChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "drCenters2",
                        "selectedCenter"
                      ]).apply(null, eventArgs);
                      (async val => {
                        const $steps = {};

                        $steps["updateSelectedCenterInAddPatient"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["selectedCenterInAddPatient"]
                                },
                                operation: 0,
                                value: val
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
                          $steps["updateSelectedCenterInAddPatient"] != null &&
                          typeof $steps["updateSelectedCenterInAddPatient"] ===
                            "object" &&
                          typeof $steps["updateSelectedCenterInAddPatient"]
                            .then === "function"
                        ) {
                          $steps["updateSelectedCenterInAddPatient"] =
                            await $steps["updateSelectedCenterInAddPatient"];
                        }
                      }).apply(null, eventArgs);
                    }}
                  />

                  <AddPatient
                    booked={async () => {
                      const $steps = {};

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
                    }}
                    centerId={(() => {
                      try {
                        return $state.selectedCenterInAddPatient;
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
                    className={classNames(
                      "__wab_instance",
                      sty.addPatient___4S6X
                    )}
                    type={"web"}
                    userCenterId={(() => {
                      try {
                        return $state.centers.find(
                          center =>
                            center.id === $state.selectedCenterInAddPatient
                        ).user_center_id;
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
                </div>
              }
              className={classNames("__wab_instance", sty.dialog)}
              onOpenChange={generateStateOnChangeProp($state, [
                "dialog",
                "open"
              ])}
              open={generateStateValueProp($state, ["dialog", "open"])}
              title={null}
              trigger={
                (() => {
                  try {
                    return $state.centers.length > 0;
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
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    children2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hPsEz
                        )}
                      >
                        {
                          "\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u06cc\u0645\u0627\u0631"
                        }
                      </div>
                    }
                    className={classNames("__wab_instance", sty.button)}
                    endIcon={
                      <ChevronLeftIcon
                        className={classNames(projectcss.all, sty.svg__yU2QN)}
                        role={"img"}
                      />
                    }
                    isDisabled={undefined}
                    showStartIcon={undefined}
                    space={undefined}
                    startIcon={
                      <ChevronRightIcon
                        className={classNames(projectcss.all, sty.svg__oaC4E)}
                        role={"img"}
                      />
                    }
                  />
                ) : null
              }
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  bookList: [
    "bookList",
    "date",
    "calendar",
    "\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647",
    "fragmentDatePicker",
    "center",
    "drCenters",
    "sideEffect",
    "patientList",
    "addPatient",
    "dialog",
    "button",
    "drCenters2"
  ],
  date: [
    "date",
    "calendar",
    "\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647",
    "fragmentDatePicker"
  ],
  calendar: [
    "calendar",
    "\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647",
    "fragmentDatePicker"
  ],
  تقومماهانه: ["\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647"],
  fragmentDatePicker: ["fragmentDatePicker"],
  center: ["center", "drCenters", "sideEffect", "patientList"],
  drCenters: ["drCenters"],
  sideEffect: ["sideEffect"],
  patientList: ["patientList"],
  addPatient: ["addPatient", "dialog", "button", "drCenters2"],
  dialog: ["dialog", "button", "drCenters2"],
  button: ["button"],
  drCenters2: ["drCenters2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  bookList: "div";
  date: "div";
  calendar: typeof Dialog;
  تقومماهانه: "div";
  fragmentDatePicker: typeof DatePicker;
  center: "div";
  drCenters: typeof DrCenters;
  sideEffect: typeof SideEffect;
  patientList: typeof PatientList;
  addPatient: "div";
  dialog: typeof Dialog;
  button: typeof Button;
  drCenters2: typeof DrCenters;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBookList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBookList__VariantsArgs;
    args?: PlasmicBookList__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBookList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBookList__ArgsType,
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
          internalArgPropNames: PlasmicBookList__ArgProps,
          internalVariantPropNames: PlasmicBookList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBookList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "bookList") {
    func.displayName = "PlasmicBookList";
  } else {
    func.displayName = `PlasmicBookList.${nodeName}`;
  }
  return func;
}

export const PlasmicBookList = Object.assign(
  // Top-level PlasmicBookList renders the root element
  makeNodeComponent("bookList"),
  {
    // Helper components rendering sub-elements
    date: makeNodeComponent("date"),
    calendar: makeNodeComponent("calendar"),
    تقومماهانه: makeNodeComponent(
      "\u062a\u0642\u0648\u0645\u0645\u0627\u0647\u0627\u0646\u0647"
    ),
    fragmentDatePicker: makeNodeComponent("fragmentDatePicker"),
    center: makeNodeComponent("center"),
    drCenters: makeNodeComponent("drCenters"),
    sideEffect: makeNodeComponent("sideEffect"),
    patientList: makeNodeComponent("patientList"),
    addPatient: makeNodeComponent("addPatient"),
    dialog: makeNodeComponent("dialog"),
    button: makeNodeComponent("button"),
    drCenters2: makeNodeComponent("drCenters2"),

    // Metadata about props expected for PlasmicBookList
    internalVariantProps: PlasmicBookList__VariantProps,
    internalArgProps: PlasmicBookList__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBookList;
/* prettier-ignore-end */
