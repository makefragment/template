// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 135 140"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect y={"10"} width={"15"} height={"120"} rx={"6"}>
        <animate
          attributeName={"height"}
          begin={"0.5s"}
          dur={"1s"}
          values={"120;110;100;90;80;70;60;50;40;140;120"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"y"}
          begin={"0.5s"}
          dur={"1s"}
          values={"10;15;20;25;30;35;40;45;50;0;10"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </rect>

      <rect x={"30"} y={"10"} width={"15"} height={"120"} rx={"6"}>
        <animate
          attributeName={"height"}
          begin={"0.25s"}
          dur={"1s"}
          values={"120;110;100;90;80;70;60;50;40;140;120"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"y"}
          begin={"0.25s"}
          dur={"1s"}
          values={"10;15;20;25;30;35;40;45;50;0;10"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </rect>

      <rect x={"60"} width={"15"} height={"140"} rx={"6"}>
        <animate
          attributeName={"height"}
          begin={"0s"}
          dur={"1s"}
          values={"120;110;100;90;80;70;60;50;40;140;120"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"y"}
          begin={"0s"}
          dur={"1s"}
          values={"10;15;20;25;30;35;40;45;50;0;10"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </rect>

      <rect x={"90"} y={"10"} width={"15"} height={"120"} rx={"6"}>
        <animate
          attributeName={"height"}
          begin={"0.25s"}
          dur={"1s"}
          values={"120;110;100;90;80;70;60;50;40;140;120"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"y"}
          begin={"0.25s"}
          dur={"1s"}
          values={"10;15;20;25;30;35;40;45;50;0;10"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </rect>

      <rect x={"120"} y={"10"} width={"15"} height={"120"} rx={"6"}>
        <animate
          attributeName={"height"}
          begin={"0.5s"}
          dur={"1s"}
          values={"120;110;100;90;80;70;60;50;40;140;120"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"y"}
          begin={"0.5s"}
          dur={"1s"}
          values={"10;15;20;25;30;35;40;45;50;0;10"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </rect>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
