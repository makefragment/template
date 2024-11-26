// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: eYafZiJOKVtf

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

import { Input } from "@/fragment/components/input"; // plasmic-import: ByhbQ0nAxig8/codeComponent
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import Dialog from "../../Dialog"; // plasmic-import: FJiI2-N1is_F/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicProfilePersonalPhoneNumber.module.css"; // plasmic-import: eYafZiJOKVtf/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicProfilePersonalPhoneNumber__VariantMembers = {};
export type PlasmicProfilePersonalPhoneNumber__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfilePersonalPhoneNumber__VariantsArgs;
export const PlasmicProfilePersonalPhoneNumber__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProfilePersonalPhoneNumber__ArgsType = {
  phoneNumber?: string;
};
type ArgPropType = keyof PlasmicProfilePersonalPhoneNumber__ArgsType;
export const PlasmicProfilePersonalPhoneNumber__ArgProps =
  new Array<ArgPropType>("phoneNumber");

export type PlasmicProfilePersonalPhoneNumber__OverridesType = {
  root?: Flex__<"div">;
  input?: Flex__<typeof Input>;
  dialog?: Flex__<typeof Dialog>;
  newPhoneNumber?: Flex__<typeof Input>;
  text?: Flex__<"div">;
};

export interface DefaultProfilePersonalPhoneNumberProps {
  phoneNumber?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfilePersonalPhoneNumber__RenderFunc(props: {
  variants: PlasmicProfilePersonalPhoneNumber__VariantsArgs;
  args: PlasmicProfilePersonalPhoneNumber__ArgsType;
  overrides: PlasmicProfilePersonalPhoneNumber__OverridesType;
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
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.phoneNumber;
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
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "newPhoneNumber.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tFkby)}
      >
        <Input
          data-plasmic-name={"input"}
          data-plasmic-override={overrides.input}
          className={classNames("__wab_instance", sty.input)}
          disabled={true}
          onChange={generateStateOnChangeProp($state, ["input", "value"])}
          placeholder={
            "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"
          }
          type={"text"}
          value={generateStateValueProp($state, ["input", "value"])}
        />

        <Button
          children2={"\u0648\u06cc\u0631\u0627\u06cc\u0634"}
          className={classNames("__wab_instance", sty.button__excDn)}
          color={"text"}
          onClick={async event => {
            const $steps = {};

            $steps["updateDialogOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["dialog", "open"]
                    },
                    operation: 4
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateDialogOpen"] != null &&
              typeof $steps["updateDialogOpen"] === "object" &&
              typeof $steps["updateDialogOpen"].then === "function"
            ) {
              $steps["updateDialogOpen"] = await $steps["updateDialogOpen"];
            }
          }}
          outline={true}
          size={"compact"}
        />
      </Stack__>
      <Dialog
        data-plasmic-name={"dialog"}
        data-plasmic-override={overrides.dialog}
        body={
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__giATp)}
          >
            <Input
              data-plasmic-name={"newPhoneNumber"}
              data-plasmic-override={overrides.newPhoneNumber}
              className={classNames("__wab_instance", sty.newPhoneNumber)}
              onChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "newPhoneNumber",
                  "value"
                ]).apply(null, eventArgs);
                (async value => {
                  const $steps = {};

                  $steps["updateNewPhoneNumberValue"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["newPhoneNumber", "value"]
                          },
                          operation: 0,
                          value: (() => {
                            return value.replace(/[^0-9]/g, "");
                          })()
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
                    $steps["updateNewPhoneNumberValue"] != null &&
                    typeof $steps["updateNewPhoneNumberValue"] === "object" &&
                    typeof $steps["updateNewPhoneNumberValue"].then ===
                      "function"
                  ) {
                    $steps["updateNewPhoneNumberValue"] = await $steps[
                      "updateNewPhoneNumberValue"
                    ];
                  }
                }).apply(null, eventArgs);
              }}
              placeholder={
                "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062c\u062f\u06cc\u062f"
              }
              type={"text"}
              value={generateStateValueProp($state, [
                "newPhoneNumber",
                "value"
              ])}
            />

            <Button
              children2={
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "\u0627\u0631\u0633\u0627\u0644 \u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f"
                  }
                </div>
              }
              className={classNames("__wab_instance", sty.button__ytoLr)}
              onClick={async event => {
                const $steps = {};

                $steps["invokeGlobalAction"] = (() => {
                  const regex = /^09\d{9}/;
                  return !regex.test($state.newPhoneNumber.value);
                })()
                  ? (() => {
                      const actionArgs = {
                        args: [
                          "error",
                          "\u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a."
                        ]
                      };
                      return $globalActions["Fragment.showToast"]?.apply(null, [
                        ...actionArgs.args
                      ]);
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

                $steps["invokeGlobalAction2"] = (() => {
                  const regex = /^09\d{9}/;
                  return regex.test($state.newPhoneNumber.value);
                })()
                  ? (() => {
                      const actionArgs = {
                        args: [
                          "POST",
                          "https://api.paziresh24.com/V1/doctor/profile/change-mobile-otp",
                          undefined,
                          (() => {
                            try {
                              return { username: $state.newPhoneNumber.value };
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
                      return $globalActions["Fragment.apiRequest"]?.apply(
                        null,
                        [...actionArgs.args]
                      );
                    })()
                  : undefined;
                if (
                  $steps["invokeGlobalAction2"] != null &&
                  typeof $steps["invokeGlobalAction2"] === "object" &&
                  typeof $steps["invokeGlobalAction2"].then === "function"
                ) {
                  $steps["invokeGlobalAction2"] = await $steps[
                    "invokeGlobalAction2"
                  ];
                }
              }}
            />
          </Stack__>
        }
        className={classNames("__wab_instance", sty.dialog)}
        noTrigger={true}
        onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
        open={generateStateValueProp($state, ["dialog", "open"])}
        title={
          "\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"
        }
        trigger={null}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "input", "dialog", "newPhoneNumber", "text"],
  input: ["input"],
  dialog: ["dialog", "newPhoneNumber", "text"],
  newPhoneNumber: ["newPhoneNumber"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  input: typeof Input;
  dialog: typeof Dialog;
  newPhoneNumber: typeof Input;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfilePersonalPhoneNumber__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfilePersonalPhoneNumber__VariantsArgs;
    args?: PlasmicProfilePersonalPhoneNumber__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfilePersonalPhoneNumber__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfilePersonalPhoneNumber__ArgsType,
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
          internalArgPropNames: PlasmicProfilePersonalPhoneNumber__ArgProps,
          internalVariantPropNames:
            PlasmicProfilePersonalPhoneNumber__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfilePersonalPhoneNumber__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfilePersonalPhoneNumber";
  } else {
    func.displayName = `PlasmicProfilePersonalPhoneNumber.${nodeName}`;
  }
  return func;
}

export const PlasmicProfilePersonalPhoneNumber = Object.assign(
  // Top-level PlasmicProfilePersonalPhoneNumber renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    input: makeNodeComponent("input"),
    dialog: makeNodeComponent("dialog"),
    newPhoneNumber: makeNodeComponent("newPhoneNumber"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicProfilePersonalPhoneNumber
    internalVariantProps: PlasmicProfilePersonalPhoneNumber__VariantProps,
    internalArgProps: PlasmicProfilePersonalPhoneNumber__ArgProps
  }
);

export default PlasmicProfilePersonalPhoneNumber;
/* prettier-ignore-end */
