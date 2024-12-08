// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: abv63v9O9ARy

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicProfilePersonalName.module.css"; // plasmic-import: abv63v9O9ARy/css

createPlasmicElementProxy;

export type PlasmicProfilePersonalName__VariantMembers = {};
export type PlasmicProfilePersonalName__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfilePersonalName__VariantsArgs;
export const PlasmicProfilePersonalName__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProfilePersonalName__ArgsType = {
  firstNameValue?: string;
  onFirstNameValueChange?: (val: string) => void;
  lastNameValue?: string;
  onLastNameValueChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicProfilePersonalName__ArgsType;
export const PlasmicProfilePersonalName__ArgProps = new Array<ArgPropType>(
  "firstNameValue",
  "onFirstNameValueChange",
  "lastNameValue",
  "onLastNameValueChange"
);

export type PlasmicProfilePersonalName__OverridesType = {
  root?: Flex__<"div">;
  firstName?: Flex__<typeof Input>;
  lastName?: Flex__<typeof Input>;
};

export interface DefaultProfilePersonalNameProps {
  firstNameValue?: string;
  onFirstNameValueChange?: (val: string) => void;
  lastNameValue?: string;
  onLastNameValueChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfilePersonalName__RenderFunc(props: {
  variants: PlasmicProfilePersonalName__VariantsArgs;
  args: PlasmicProfilePersonalName__ArgsType;
  overrides: PlasmicProfilePersonalName__OverridesType;
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
        path: "firstName.value",
        type: "writable",
        variableType: "text",

        valueProp: "firstNameValue",
        onChangeProp: "onFirstNameValueChange"
      },
      {
        path: "succes",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "lastName.value",
        type: "writable",
        variableType: "text",

        valueProp: "lastNameValue",
        onChangeProp: "onLastNameValueChange"
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
      <Input
        data-plasmic-name={"firstName"}
        data-plasmic-override={overrides.firstName}
        className={classNames("__wab_instance", sty.firstName)}
        disabled={false}
        name={"name"}
        onChange={generateStateOnChangeProp($state, ["firstName", "value"])}
        placeholder={"\u0646\u0627\u0645"}
        type={"text"}
        value={generateStateValueProp($state, ["firstName", "value"])}
      />

      <Input
        data-plasmic-name={"lastName"}
        data-plasmic-override={overrides.lastName}
        className={classNames("__wab_instance", sty.lastName)}
        disabled={false}
        name={"lastname"}
        onChange={generateStateOnChangeProp($state, ["lastName", "value"])}
        placeholder={
          "\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"
        }
        type={"text"}
        value={generateStateValueProp($state, ["lastName", "value"])}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "firstName", "lastName"],
  firstName: ["firstName"],
  lastName: ["lastName"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  firstName: typeof Input;
  lastName: typeof Input;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfilePersonalName__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfilePersonalName__VariantsArgs;
    args?: PlasmicProfilePersonalName__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfilePersonalName__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfilePersonalName__ArgsType,
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
          internalArgPropNames: PlasmicProfilePersonalName__ArgProps,
          internalVariantPropNames: PlasmicProfilePersonalName__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfilePersonalName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfilePersonalName";
  } else {
    func.displayName = `PlasmicProfilePersonalName.${nodeName}`;
  }
  return func;
}

export const PlasmicProfilePersonalName = Object.assign(
  // Top-level PlasmicProfilePersonalName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    firstName: makeNodeComponent("firstName"),
    lastName: makeNodeComponent("lastName"),

    // Metadata about props expected for PlasmicProfilePersonalName
    internalVariantProps: PlasmicProfilePersonalName__VariantProps,
    internalArgProps: PlasmicProfilePersonalName__ArgProps
  }
);

export default PlasmicProfilePersonalName;
/* prettier-ignore-end */
