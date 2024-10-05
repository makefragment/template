// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: thJf7wC4giTS

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
import sty from "./PlasmicQuickAccessWorkhours.module.css"; // plasmic-import: thJf7wC4giTS/css

createPlasmicElementProxy;

export type PlasmicQuickAccessWorkhours__VariantMembers = {};
export type PlasmicQuickAccessWorkhours__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuickAccessWorkhours__VariantsArgs;
export const PlasmicQuickAccessWorkhours__VariantProps =
  new Array<VariantPropType>();

export type PlasmicQuickAccessWorkhours__ArgsType = {};
type ArgPropType = keyof PlasmicQuickAccessWorkhours__ArgsType;
export const PlasmicQuickAccessWorkhours__ArgProps = new Array<ArgPropType>();

export type PlasmicQuickAccessWorkhours__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultQuickAccessWorkhoursProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuickAccessWorkhours__RenderFunc(props: {
  variants: PlasmicQuickAccessWorkhours__VariantsArgs;
  args: PlasmicQuickAccessWorkhours__ArgsType;
  overrides: PlasmicQuickAccessWorkhours__OverridesType;
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
        path: "checkWorkhours",
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

          $steps["apiWorkhour"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://apigw.paziresh24.com/v1/check-workhours"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["apiWorkhour"] != null &&
            typeof $steps["apiWorkhour"] === "object" &&
            typeof $steps["apiWorkhour"].then === "function"
          ) {
            $steps["apiWorkhour"] = await $steps["apiWorkhour"];
          }

          $steps["updateCheckWorkhours"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["checkWorkhours"]
                  },
                  operation: 0,
                  value: $steps.apiWorkhour.data
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
            $steps["updateCheckWorkhours"] != null &&
            typeof $steps["updateCheckWorkhours"] === "object" &&
            typeof $steps["updateCheckWorkhours"].then === "function"
          ) {
            $steps["updateCheckWorkhours"] = await $steps[
              "updateCheckWorkhours"
            ];
          }
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuickAccessWorkhours__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuickAccessWorkhours__VariantsArgs;
    args?: PlasmicQuickAccessWorkhours__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuickAccessWorkhours__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuickAccessWorkhours__ArgsType,
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
          internalArgPropNames: PlasmicQuickAccessWorkhours__ArgProps,
          internalVariantPropNames: PlasmicQuickAccessWorkhours__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuickAccessWorkhours__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuickAccessWorkhours";
  } else {
    func.displayName = `PlasmicQuickAccessWorkhours.${nodeName}`;
  }
  return func;
}

export const PlasmicQuickAccessWorkhours = Object.assign(
  // Top-level PlasmicQuickAccessWorkhours renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicQuickAccessWorkhours
    internalVariantProps: PlasmicQuickAccessWorkhours__VariantProps,
    internalArgProps: PlasmicQuickAccessWorkhours__ArgProps
  }
);

export default PlasmicQuickAccessWorkhours;
/* prettier-ignore-end */
