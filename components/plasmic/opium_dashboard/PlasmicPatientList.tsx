// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: uw2UKvNlq2Yr

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
import AppointmentCard from "../../AppointmentCard"; // plasmic-import: 43GvxJ8wCSXI/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicPatientList.module.css"; // plasmic-import: uw2UKvNlq2Yr/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: BN2FHeznHhq_/icon

createPlasmicElementProxy;

export type PlasmicPatientList__VariantMembers = {};
export type PlasmicPatientList__VariantsArgs = {};
type VariantPropType = keyof PlasmicPatientList__VariantsArgs;
export const PlasmicPatientList__VariantProps = new Array<VariantPropType>();

export type PlasmicPatientList__ArgsType = {
  searchquery?: string;
  date?: string;
  selectedCenter?: string;
  centers?: any;
};
type ArgPropType = keyof PlasmicPatientList__ArgsType;
export const PlasmicPatientList__ArgProps = new Array<ArgPropType>(
  "searchquery",
  "date",
  "selectedCenter",
  "centers"
);

export type PlasmicPatientList__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
  appointmentCard?: Flex__<typeof AppointmentCard>;
};

export interface DefaultPatientListProps {
  searchquery?: string;
  date?: string;
  selectedCenter?: string;
  centers?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPatientList__RenderFunc(props: {
  variants: PlasmicPatientList__VariantsArgs;
  args: PlasmicPatientList__ArgsType;
  overrides: PlasmicPatientList__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          selectedCenter: "all"
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
        path: "centersData",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "visitChannel",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "allvisitorsdata",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "insurances",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
        sty.root
      )}
    >
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={(() => {
          try {
            return [$props.selectedCenter, $props.centers, $props.date];
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

          $steps["updateLoading"] = true
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
            $steps["updateLoading"] != null &&
            typeof $steps["updateLoading"] === "object" &&
            typeof $steps["updateLoading"].then === "function"
          ) {
            $steps["updateLoading"] = await $steps["updateLoading"];
          }

          $steps["apiAllVisitorsData"] =
            $props.centers.length > 0
              ? (() => {
                  const actionArgs = {
                    args: [
                      "GET",
                      "https://apigw.paziresh24.com/v1/allvisitorsdata",
                      (() => {
                        try {
                          return {
                            centers:
                              $props.selectedCenter == "all"
                                ? $props.centers.map(center => center.id)
                                : $props.selectedCenter,
                            date: $props.date
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
            $steps["apiAllVisitorsData"] != null &&
            typeof $steps["apiAllVisitorsData"] === "object" &&
            typeof $steps["apiAllVisitorsData"].then === "function"
          ) {
            $steps["apiAllVisitorsData"] = await $steps["apiAllVisitorsData"];
          }

          $steps["updateAllvisitorsdata"] =
            $props.centers.length > 0
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["allvisitorsdata"]
                    },
                    operation: 0,
                    value: $steps.apiAllVisitorsData.data
                      .map(item => item.data)
                      .flat()
                      .sort((a, b) => new Date(a.from) - new Date(b.from))
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
            $steps["updateAllvisitorsdata"] != null &&
            typeof $steps["updateAllvisitorsdata"] === "object" &&
            typeof $steps["updateAllvisitorsdata"].then === "function"
          ) {
            $steps["updateAllvisitorsdata"] = await $steps[
              "updateAllvisitorsdata"
            ];
          }

          $steps["updateLoading2"] =
            $props.centers.length > 0
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
            $steps["updateLoading2"] != null &&
            typeof $steps["updateLoading2"] === "object" &&
            typeof $steps["updateLoading2"].then === "function"
          ) {
            $steps["updateLoading2"] = await $steps["updateLoading2"];
          }

          $steps["apiOnlineVisitChannels"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    undefined,
                    "https://apigw.paziresh24.com/v1/visit-channels"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["apiOnlineVisitChannels"] != null &&
            typeof $steps["apiOnlineVisitChannels"] === "object" &&
            typeof $steps["apiOnlineVisitChannels"].then === "function"
          ) {
            $steps["apiOnlineVisitChannels"] = await $steps[
              "apiOnlineVisitChannels"
            ];
          }

          $steps["updateVisitChannel"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["visitChannel"]
                  },
                  operation: 0,
                  value: $steps.apiOnlineVisitChannels.data
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
            $steps["updateVisitChannel"] != null &&
            typeof $steps["updateVisitChannel"] === "object" &&
            typeof $steps["updateVisitChannel"].then === "function"
          ) {
            $steps["updateVisitChannel"] = await $steps["updateVisitChannel"];
          }

          $steps["apiInsurances"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://prescription-api.paziresh24.com/V1/insurances/"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["apiInsurances"] != null &&
            typeof $steps["apiInsurances"] === "object" &&
            typeof $steps["apiInsurances"].then === "function"
          ) {
            $steps["apiInsurances"] = await $steps["apiInsurances"];
          }

          $steps["updateInsurances"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["insurances"]
                  },
                  operation: 0,
                  value: $steps.apiInsurances.data
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
            $steps["updateInsurances"] != null &&
            typeof $steps["updateInsurances"] === "object" &&
            typeof $steps["updateInsurances"].then === "function"
          ) {
            $steps["updateInsurances"] = await $steps["updateInsurances"];
          }
        }}
      />

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
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Icon10Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
      {(() => {
        try {
          return $state.loading == false;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })()
        ? (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $state.allvisitorsdata;
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
              <AppointmentCard
                data-plasmic-name={"appointmentCard"}
                data-plasmic-override={overrides.appointmentCard}
                bookDelete={(() => {
                  try {
                    return currentItem.book_delete;
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
                bookId={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? ""
                      : currentItem.id;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "undefined";
                    }
                    throw e;
                  }
                })()}
                bookStatus={(() => {
                  try {
                    return currentItem.book_status;
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
                bookType={(() => {
                  try {
                    return $props.centers.some(
                      item =>
                        item.user_center_id == currentItem.user_center_id &&
                        item.id == "5532"
                    )
                      ? "آنلاین"
                      : "حضوری";
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
                cell={(() => {
                  try {
                    return currentItem.cell;
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
                centerId={(() => {
                  try {
                    return $props.centers.find(
                      item => item.user_center_id === currentItem.user_center_id
                    ).id;
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
                centerName={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? `نسخه نویسی مطب دکتر ${currentItem.doctor_additional_data.fullName}`
                      : $props.centers.find(
                          item =>
                            item.user_center_id === currentItem.user_center_id
                        ).name;
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
                className={classNames("__wab_instance", sty.appointmentCard)}
                date={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? new Date(currentItem.created_at)
                          .toLocaleDateString("fa-IR", {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                          })
                          .replace(/،/g, "")
                          .replace(/سال/g, "")
                      : new Date(currentItem.from_date)
                          .toLocaleDateString("fa-IR", {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                          })
                          .replace(/،/g, "")
                          .replace(/سال/g, "");
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
                finalized={(() => {
                  try {
                    return (
                      (currentItem.type === "book" &&
                        currentItem.prescription.finalized) ||
                      (currentItem.type === "prescription" &&
                        currentItem.finalized) ||
                      false
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
                insurances={(() => {
                  try {
                    return (
                      ($state.insurances.tamin !== null &&
                        $state.insurances.tamin) ||
                      ($state.insurances.salamat.length > 0 &&
                        $state.insurances.salamat.includes(true))
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
                key={currentIndex}
                name={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? `${currentItem.patientAdditionalData.name} ${currentItem.patientAdditionalData.lastName}`.replace(
                          /\s+/g,
                          " "
                        )
                      : currentItem.display_name === ""
                      ? "بدون نام"
                      : currentItem.display_name;
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
                nationalcode={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? currentItem.patientNationalCode
                      : currentItem.national_code;
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
                onlineBorder={(() => {
                  try {
                    return (
                      currentItem.from < Date.now() / 1000 &&
                      currentItem.to > Date.now() / 1000
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()}
                onlineChannel={(() => {
                  try {
                    return currentItem.online_channel;
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
                paymentStatus={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? "پرداخت شامل این بیمار نمی‌شود"
                      : (() => {
                          const paymentStatusMapping = {
                            paid: "پرداخت شده",
                            not_paid: "پرداخت نشده",
                            refund: "استرداد شده"
                          };
                          return paymentStatusMapping[
                            currentItem.payment_status
                          ];
                        })();
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
                prescriptionId={(() => {
                  try {
                    return (
                      (currentItem.type === "book" &&
                        currentItem.prescription &&
                        currentItem.prescription.id) ||
                      (currentItem.type === "prescription" && currentItem.id) ||
                      null
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
                refId={(() => {
                  try {
                    return currentItem.type === "prescription" &&
                      currentItem.finalized
                      ? currentItem.salamat_prescription.trackingCode ||
                          currentItem.tamin_prescription[0].trackingCode ||
                          ""
                      : currentItem.type === "prescription" &&
                        !currentItem.finalized
                      ? "نسخه ای ثبت نشده است"
                      : currentItem.ref_id;
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
                secureCall={(() => {
                  try {
                    return (
                      $props.centers.some(
                        item =>
                          item.user_center_id == currentItem.user_center_id &&
                          item.id == "5532"
                      ) &&
                      $state.visitChannel[0].data.some(
                        channel => channel.type === "secure_call"
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
                })()}
                time={(() => {
                  try {
                    return currentItem.type === "prescription"
                      ? new Date(currentItem.created_at).toLocaleTimeString(
                          "fa-IR",
                          { hour: "2-digit", minute: "2-digit" }
                        )
                      : new Date(currentItem.from * 1000).toLocaleTimeString(
                          "fa-IR",
                          { hour: "2-digit", minute: "2-digit", hour12: false }
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
                type={(() => {
                  try {
                    return currentItem.type;
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
            );
          })
        : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect", "freeBox", "svg", "appointmentCard"],
  sideEffect: ["sideEffect"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  appointmentCard: ["appointmentCard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  freeBox: "div";
  svg: "svg";
  appointmentCard: typeof AppointmentCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPatientList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPatientList__VariantsArgs;
    args?: PlasmicPatientList__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPatientList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPatientList__ArgsType,
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
          internalArgPropNames: PlasmicPatientList__ArgProps,
          internalVariantPropNames: PlasmicPatientList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPatientList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPatientList";
  } else {
    func.displayName = `PlasmicPatientList.${nodeName}`;
  }
  return func;
}

export const PlasmicPatientList = Object.assign(
  // Top-level PlasmicPatientList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    appointmentCard: makeNodeComponent("appointmentCard"),

    // Metadata about props expected for PlasmicPatientList
    internalVariantProps: PlasmicPatientList__VariantProps,
    internalArgProps: PlasmicPatientList__ArgProps
  }
);

export default PlasmicPatientList;
/* prettier-ignore-end */
