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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicDuration.module.css"; // plasmic-import: hYLHU_pJKp9-/css

createPlasmicElementProxy;

export type PlasmicDuration__VariantMembers = {};
export type PlasmicDuration__VariantsArgs = {};
type VariantPropType = keyof PlasmicDuration__VariantsArgs;
export const PlasmicDuration__VariantProps = new Array<VariantPropType>();

export type PlasmicDuration__ArgsType = {
  centerId?: string;
};
type ArgPropType = keyof PlasmicDuration__ArgsType;
export const PlasmicDuration__ArgProps = new Array<ArgPropType>("centerId");

export type PlasmicDuration__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  text?: Flex__<"div">;
};

export interface DefaultDurationProps {
  centerId?: string;
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
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
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
                        return (() => {
                          {
                            centers: $props.centerId;
                          }
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
                  value: $steps.apiWorkhours.data.duration
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
        }}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {
          "\u0645\u062f\u062a \u0632\u0645\u0627\u0646\u200c \u0627\u06cc\u062f\u0647\u200c\u0622\u0644 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u0631\u0627\u0626\u0647 \u06cc\u06a9 \u0648\u06cc\u0632\u06cc\u062a \u062c\u0627\u0645\u0639 \u0648 \u067e\u06cc\u0648\u0633\u062a\u0647 \u0628\u0647 \u06cc\u06a9 \u0628\u06cc\u0645\u0627\u0631 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f"
        }
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect", "text"],
  sideEffect: ["sideEffect"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  text: "div";
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
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDuration
    internalVariantProps: PlasmicDuration__VariantProps,
    internalArgProps: PlasmicDuration__ArgProps
  }
);

export default PlasmicDuration;
/* prettier-ignore-end */
