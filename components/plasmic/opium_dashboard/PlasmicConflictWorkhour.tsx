// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: bTzKES7hyBjP

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicConflictWorkhour.module.css"; // plasmic-import: bTzKES7hyBjP/css

createPlasmicElementProxy;

export type PlasmicConflictWorkhour__VariantMembers = {};
export type PlasmicConflictWorkhour__VariantsArgs = {};
type VariantPropType = keyof PlasmicConflictWorkhour__VariantsArgs;
export const PlasmicConflictWorkhour__VariantProps =
  new Array<VariantPropType>();

export type PlasmicConflictWorkhour__ArgsType = {
  provider?: any;
};
type ArgPropType = keyof PlasmicConflictWorkhour__ArgsType;
export const PlasmicConflictWorkhour__ArgProps = new Array<ArgPropType>(
  "provider"
);

export type PlasmicConflictWorkhour__OverridesType = {
  root?: Flex__<"div">;
  conflictWorkhour?: Flex__<"section">;
  text?: Flex__<"div">;
  h6?: Flex__<"h6">;
};

export interface DefaultConflictWorkhourProps {
  provider?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicConflictWorkhour__RenderFunc(props: {
  variants: PlasmicConflictWorkhour__VariantsArgs;
  args: PlasmicConflictWorkhour__ArgsType;
  overrides: PlasmicConflictWorkhour__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "jncBHCyaVDAU7Xdez17HE8",
        opId: "0b4cbba3-6749-4d70-b024-86b13ae1df14",
        userArgs: {
          params: [$props.provider.slug]
        },
        cacheKey: `plasmic.$.0b4cbba3-6749-4d70-b024-86b13ae1df14.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
      {(() => {
        try {
          return $queries.query.data.response.conflicted_workhours.length != 0;
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
        <section
          data-plasmic-name={"conflictWorkhour"}
          data-plasmic-override={overrides.conflictWorkhour}
          className={classNames(projectcss.all, sty.conflictWorkhour)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h6
                  data-plasmic-name={"h6"}
                  data-plasmic-override={overrides.h6}
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6
                  )}
                >
                  {
                    "\u0633\u0627\u0639\u0627\u062a \u062a\u0639\u06cc\u06cc\u0646 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0632\u06cc\u062a\u200c\u0647\u0627\u06cc \u062d\u0636\u0648\u0631\u06cc \u0648 \u0622\u0646\u0644\u0627\u06cc\u0646 \u0634\u0645\u0627 \u062a\u062f\u0627\u062e\u0644 \u062f\u0627\u0631\u0646\u062f\u060c \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0627\u062e\u062a\u0644\u0627\u0644 \u062f\u0631 \u062c\u0631\u06cc\u0627\u0646 \u0645\u0646\u0638\u0645 \u0648\u06cc\u0632\u06cc\u062a\u200c\u0647\u0627 \u0648 \u062a\u0627\u062e\u06cc\u0631 \u062f\u0631 \u0627\u0631\u0627\u0626\u0647 \u062e\u062f\u0645\u062a \u0628\u0647 \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 \u0645\u0646\u062c\u0631 \u0634\u0648\u062f. \u0644\u0637\u0641\u0627\u064b \u0628\u0631\u0627\u06cc \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u0627\u0632 \u062a\u062f\u0627\u062e\u0644 \u0632\u0645\u0627\u0646\u06cc \u0648 \u062d\u0641\u0638 \u06a9\u06cc\u0641\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u0628\u0647 \u0628\u06cc\u0645\u0627\u0631\u0627\u0646\u060c \u0632\u0645\u0627\u0646\u200c\u0628\u0646\u062f\u06cc\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u062f\u0642\u062a \u0645\u062c\u062f\u062f \u0628\u0631\u0631\u0633\u06cc \u0648 \u062a\u0646\u0638\u06cc\u0645 \u0646\u0645\u0627\u06cc\u06cc\u062f."
                  }
                </h6>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </section>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "conflictWorkhour", "text", "h6"],
  conflictWorkhour: ["conflictWorkhour", "text", "h6"],
  text: ["text", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  conflictWorkhour: "section";
  text: "div";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicConflictWorkhour__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicConflictWorkhour__VariantsArgs;
    args?: PlasmicConflictWorkhour__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicConflictWorkhour__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicConflictWorkhour__ArgsType,
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
          internalArgPropNames: PlasmicConflictWorkhour__ArgProps,
          internalVariantPropNames: PlasmicConflictWorkhour__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicConflictWorkhour__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConflictWorkhour";
  } else {
    func.displayName = `PlasmicConflictWorkhour.${nodeName}`;
  }
  return func;
}

export const PlasmicConflictWorkhour = Object.assign(
  // Top-level PlasmicConflictWorkhour renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    conflictWorkhour: makeNodeComponent("conflictWorkhour"),
    text: makeNodeComponent("text"),
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicConflictWorkhour
    internalVariantProps: PlasmicConflictWorkhour__VariantProps,
    internalArgProps: PlasmicConflictWorkhour__ArgProps
  }
);

export default PlasmicConflictWorkhour;
/* prettier-ignore-end */
