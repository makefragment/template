// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: i6SPs9Tk2LaM

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

import { Switch } from "@/fragment/components/switch"; // plasmic-import: dH6_VlwkAh4P/codeComponent
import { Input } from "@/fragment/components/input"; // plasmic-import: ByhbQ0nAxig8/codeComponent
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicProfilePassword.module.css"; // plasmic-import: i6SPs9Tk2LaM/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicProfilePassword__VariantMembers = {};
export type PlasmicProfilePassword__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfilePassword__VariantsArgs;
export const PlasmicProfilePassword__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProfilePassword__ArgsType = {};
type ArgPropType = keyof PlasmicProfilePassword__ArgsType;
export const PlasmicProfilePassword__ArgProps = new Array<ArgPropType>();

export type PlasmicProfilePassword__OverridesType = {
  root?: Flex__<"div">;
  _switch?: Flex__<typeof Switch>;
  input?: Flex__<typeof Input>;
  input2?: Flex__<typeof Input>;
  button?: Flex__<typeof Button>;
};

export interface DefaultProfilePasswordProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfilePassword__RenderFunc(props: {
  variants: PlasmicProfilePassword__VariantsArgs;
  args: PlasmicProfilePassword__ArgsType;
  overrides: PlasmicProfilePassword__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "_switch.checked",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "input2.value",
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
        className={classNames(projectcss.all, sty.freeBox__j39Cj)}
      >
        <Switch
          data-plasmic-name={"_switch"}
          data-plasmic-override={overrides._switch}
          checked={generateStateValueProp($state, ["_switch", "checked"])}
          className={classNames("__wab_instance", sty._switch)}
          onCheckedChange={generateStateOnChangeProp($state, [
            "_switch",
            "checked"
          ])}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__z8T8G
          )}
        >
          {
            "\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062b\u0627\u0628\u062a \u0641\u0639\u0627\u0644 \u0627\u0633\u062a"
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__foiIa)}
      >
        <Input
          data-plasmic-name={"input"}
          data-plasmic-override={overrides.input}
          className={classNames("__wab_instance", sty.input)}
          onChange={generateStateOnChangeProp($state, ["input", "value"])}
          placeholder={"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}
          type={"password"}
          value={generateStateValueProp($state, ["input", "value"])}
        />

        <Input
          data-plasmic-name={"input2"}
          data-plasmic-override={overrides.input2}
          className={classNames("__wab_instance", sty.input2)}
          onChange={generateStateOnChangeProp($state, ["input2", "value"])}
          placeholder={
            "\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
          }
          type={"password"}
          value={generateStateValueProp($state, ["input2", "value"])}
        />
      </Stack__>
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        children2={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1Gj7T
            )}
          >
            {
              "\u0630\u062e\u06cc\u0631\u0647 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
            }
          </div>
        }
        className={classNames("__wab_instance", sty.button)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "_switch", "input", "input2", "button"],
  _switch: ["_switch"],
  input: ["input"],
  input2: ["input2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  _switch: typeof Switch;
  input: typeof Input;
  input2: typeof Input;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfilePassword__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfilePassword__VariantsArgs;
    args?: PlasmicProfilePassword__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfilePassword__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfilePassword__ArgsType,
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
          internalArgPropNames: PlasmicProfilePassword__ArgProps,
          internalVariantPropNames: PlasmicProfilePassword__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfilePassword__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfilePassword";
  } else {
    func.displayName = `PlasmicProfilePassword.${nodeName}`;
  }
  return func;
}

export const PlasmicProfilePassword = Object.assign(
  // Top-level PlasmicProfilePassword renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _switch: makeNodeComponent("_switch"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicProfilePassword
    internalVariantProps: PlasmicProfilePassword__VariantProps,
    internalArgProps: PlasmicProfilePassword__ArgProps
  }
);

export default PlasmicProfilePassword;
/* prettier-ignore-end */
