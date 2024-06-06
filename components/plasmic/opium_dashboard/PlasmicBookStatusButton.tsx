// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: aW1julV8kikd

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

import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicBookStatusButton.module.css"; // plasmic-import: aW1julV8kikd/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicBookStatusButton__VariantMembers = {
  came: "came";
  visited: "visited";
  deleted: "deleted";
};
export type PlasmicBookStatusButton__VariantsArgs = {
  came?: SingleBooleanChoiceArg<"came">;
  visited?: SingleBooleanChoiceArg<"visited">;
  deleted?: SingleBooleanChoiceArg<"deleted">;
};
type VariantPropType = keyof PlasmicBookStatusButton__VariantsArgs;
export const PlasmicBookStatusButton__VariantProps = new Array<VariantPropType>(
  "came",
  "visited",
  "deleted"
);

export type PlasmicBookStatusButton__ArgsType = {
  onclick?: () => void;
};
type ArgPropType = keyof PlasmicBookStatusButton__ArgsType;
export const PlasmicBookStatusButton__ArgProps = new Array<ArgPropType>(
  "onclick"
);

export type PlasmicBookStatusButton__OverridesType = {
  root?: Flex__<"div">;
  button?: Flex__<typeof Button>;
  text?: Flex__<"div">;
};

export interface DefaultBookStatusButtonProps {
  onclick?: () => void;
  came?: SingleBooleanChoiceArg<"came">;
  visited?: SingleBooleanChoiceArg<"visited">;
  deleted?: SingleBooleanChoiceArg<"deleted">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBookStatusButton__RenderFunc(props: {
  variants: PlasmicBookStatusButton__VariantsArgs;
  args: PlasmicBookStatusButton__ArgsType;
  overrides: PlasmicBookStatusButton__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "came",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.came
      },
      {
        path: "visited",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.visited
      },
      {
        path: "deleted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deleted
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
        sty.root,
        {
          [sty.rootcame]: hasVariant($state, "came", "came"),
          [sty.rootdeleted]: hasVariant($state, "deleted", "deleted"),
          [sty.rootvisited]: hasVariant($state, "visited", "visited"),
          [sty.rootvisited_came]:
            hasVariant($state, "came", "came") &&
            hasVariant($state, "visited", "visited"),
          [sty.rootvisited_deleted_came]:
            hasVariant($state, "came", "came") &&
            hasVariant($state, "visited", "visited") &&
            hasVariant($state, "deleted", "deleted")
        }
      )}
    >
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        children2={
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textcame]: hasVariant($state, "came", "came"),
                [sty.textdeleted]: hasVariant($state, "deleted", "deleted"),
                [sty.textvisited]: hasVariant($state, "visited", "visited")
              }
            )}
          >
            {hasVariant($state, "deleted", "deleted")
              ? "\u0644\u063a\u0648 \u0634\u062f"
              : hasVariant($state, "visited", "visited")
              ? "\u0648\u06cc\u0632\u06cc\u062a \u0634\u062f"
              : hasVariant($state, "came", "came")
              ? "\u067e\u0627\u06cc\u0627\u0646 \u0648\u06cc\u0632\u06cc\u062a"
              : "\u0634\u0631\u0648\u0639 \u0648\u06cc\u0632\u06cc\u062a"}
          </div>
        }
        className={classNames("__wab_instance", sty.button, {
          [sty.buttoncame]: hasVariant($state, "came", "came"),
          [sty.buttondeleted]: hasVariant($state, "deleted", "deleted"),
          [sty.buttonvisited]: hasVariant($state, "visited", "visited")
        })}
        color={
          hasVariant($state, "deleted", "deleted")
            ? "softSand"
            : hasVariant($state, "visited", "visited")
            ? "softGreen"
            : undefined
        }
        endIcon={
          <ChevronLeftIcon
            className={classNames(projectcss.all, sty.svg__yAuH)}
            role={"img"}
          />
        }
        onClick={async event => {
          const $steps = {};

          $steps["runOnclick"] = true
            ? (() => {
                const actionArgs = { eventRef: $props["onclick"] };
                return (({ eventRef, args }) => {
                  return eventRef?.(...(args ?? []));
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runOnclick"] != null &&
            typeof $steps["runOnclick"] === "object" &&
            typeof $steps["runOnclick"].then === "function"
          ) {
            $steps["runOnclick"] = await $steps["runOnclick"];
          }
        }}
        outline={
          hasVariant($state, "deleted", "deleted")
            ? undefined
            : hasVariant($state, "visited", "visited")
            ? undefined
            : hasVariant($state, "came", "came")
            ? true
            : true
        }
        size={"compact"}
        startIcon={
          <ChevronRightIcon
            className={classNames(projectcss.all, sty.svg__cGuhN)}
            role={"img"}
          />
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBookStatusButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBookStatusButton__VariantsArgs;
    args?: PlasmicBookStatusButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBookStatusButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBookStatusButton__ArgsType,
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
          internalArgPropNames: PlasmicBookStatusButton__ArgProps,
          internalVariantPropNames: PlasmicBookStatusButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBookStatusButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBookStatusButton";
  } else {
    func.displayName = `PlasmicBookStatusButton.${nodeName}`;
  }
  return func;
}

export const PlasmicBookStatusButton = Object.assign(
  // Top-level PlasmicBookStatusButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicBookStatusButton
    internalVariantProps: PlasmicBookStatusButton__VariantProps,
    internalArgProps: PlasmicBookStatusButton__ArgProps
  }
);

export default PlasmicBookStatusButton;
/* prettier-ignore-end */
