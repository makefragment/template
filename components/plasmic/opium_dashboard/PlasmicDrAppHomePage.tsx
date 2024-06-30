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

import DrCenters from "../../DrCenters"; // plasmic-import: IkLsGKQP_uPj/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import PatientList from "../../PatientList"; // plasmic-import: uw2UKvNlq2Yr/component
import Dialog from "../../Dialog"; // plasmic-import: FJiI2-N1is_F/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import AddPatient from "../../AddPatient"; // plasmic-import: tPaqHhQ134RQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicDrAppHomePage.module.css"; // plasmic-import: Ita2Jf6_aAkK/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: WD9d-X_nOEzc/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: myuWpZoZw4pf/icon

createPlasmicElementProxy;

export type PlasmicDrAppHomePage__VariantMembers = {};
export type PlasmicDrAppHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicDrAppHomePage__VariantsArgs;
export const PlasmicDrAppHomePage__VariantProps = new Array<VariantPropType>();

export type PlasmicDrAppHomePage__ArgsType = {};
type ArgPropType = keyof PlasmicDrAppHomePage__ArgsType;
export const PlasmicDrAppHomePage__ArgProps = new Array<ArgPropType>();

export type PlasmicDrAppHomePage__OverridesType = {
  root?: Flex__<"div">;
  drCenters?: Flex__<typeof DrCenters>;
  sideEffect?: Flex__<typeof SideEffect>;
  patientList?: Flex__<typeof PatientList>;
  dialog?: Flex__<typeof Dialog>;
  button?: Flex__<typeof Button>;
  addPatient?: Flex__<typeof AddPatient>;
};

export interface DefaultDrAppHomePageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrAppHomePage__RenderFunc(props: {
  variants: PlasmicDrAppHomePage__VariantsArgs;
  args: PlasmicDrAppHomePage__ArgsType;
  overrides: PlasmicDrAppHomePage__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

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
          <div className={classNames(projectcss.all, sty.freeBox__fQz4U)}>
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

            {(() => {
              try {
                return $state.centers.length > 0;
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
                    return new Date()
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
            ) : null}
            <Dialog
              data-plasmic-name={"dialog"}
              data-plasmic-override={overrides.dialog}
              body={
                <AddPatient
                  data-plasmic-name={"addPatient"}
                  data-plasmic-override={overrides.addPatient}
                  className={classNames("__wab_instance", sty.addPatient)}
                />
              }
              className={classNames("__wab_instance", sty.dialog)}
              onOpenChange={generateStateOnChangeProp($state, [
                "dialog",
                "open"
              ])}
              open={generateStateValueProp($state, ["dialog", "open"])}
              title={null}
              trigger={
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
                  endIcon={
                    <ChevronLeftIcon
                      className={classNames(projectcss.all, sty.svg__yU2QN)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChevronRightIcon
                      className={classNames(projectcss.all, sty.svg__oaC4E)}
                      role={"img"}
                    />
                  }
                />
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yEo7)}>
            <div className={classNames(projectcss.all, sty.freeBox__yjkSt)}>
              <Icon9Icon
                className={classNames(projectcss.all, sty.svg__bVuYg)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToDrAppHomePage"] = true
                    ? (() => {
                        const actionArgs = { destination: `/new-page` };
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
                    $steps["goToDrAppHomePage"] != null &&
                    typeof $steps["goToDrAppHomePage"] === "object" &&
                    typeof $steps["goToDrAppHomePage"].then === "function"
                  ) {
                    $steps["goToDrAppHomePage"] = await $steps[
                      "goToDrAppHomePage"
                    ];
                  }

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return $$.splunkEvent({
                              token: "6d18640a-95c3-4368-a8d0-dc0beae3a44b",
                              group: "dr-app-booklist",
                              data: {},
                              type: "click-land-to-booklist-page"
                            });
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
                }}
                role={"img"}
              />

              <Icon8Icon
                className={classNames(projectcss.all, sty.svg__tDtCy)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToHttpsdrpaziresh24Comsetting"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "https://dr.paziresh24.com/setting"
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
                    $steps["goToHttpsdrpaziresh24Comsetting"] != null &&
                    typeof $steps["goToHttpsdrpaziresh24Comsetting"] ===
                      "object" &&
                    typeof $steps["goToHttpsdrpaziresh24Comsetting"].then ===
                      "function"
                  ) {
                    $steps["goToHttpsdrpaziresh24Comsetting"] = await $steps[
                      "goToHttpsdrpaziresh24Comsetting"
                    ];
                  }

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return $$.splunkEvent({
                              token: "6d18640a-95c3-4368-a8d0-dc0beae3a44b",
                              group: "dr-app-booklist",
                              data: {},
                              type: "click-land-to-workhour-page"
                            });
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
                }}
                role={"img"}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "drCenters",
    "sideEffect",
    "patientList",
    "dialog",
    "button",
    "addPatient"
  ],
  drCenters: ["drCenters"],
  sideEffect: ["sideEffect"],
  patientList: ["patientList"],
  dialog: ["dialog", "button", "addPatient"],
  button: ["button"],
  addPatient: ["addPatient"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  drCenters: typeof DrCenters;
  sideEffect: typeof SideEffect;
  patientList: typeof PatientList;
  dialog: typeof Dialog;
  button: typeof Button;
  addPatient: typeof AddPatient;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDrAppHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDrAppHomePage__VariantsArgs;
    args?: PlasmicDrAppHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDrAppHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDrAppHomePage__ArgsType,
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
          internalArgPropNames: PlasmicDrAppHomePage__ArgProps,
          internalVariantPropNames: PlasmicDrAppHomePage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrAppHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDrAppHomePage";
  } else {
    func.displayName = `PlasmicDrAppHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicDrAppHomePage = Object.assign(
  // Top-level PlasmicDrAppHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    drCenters: makeNodeComponent("drCenters"),
    sideEffect: makeNodeComponent("sideEffect"),
    patientList: makeNodeComponent("patientList"),
    dialog: makeNodeComponent("dialog"),
    button: makeNodeComponent("button"),
    addPatient: makeNodeComponent("addPatient"),

    // Metadata about props expected for PlasmicDrAppHomePage
    internalVariantProps: PlasmicDrAppHomePage__VariantProps,
    internalArgProps: PlasmicDrAppHomePage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDrAppHomePage;
/* prettier-ignore-end */
