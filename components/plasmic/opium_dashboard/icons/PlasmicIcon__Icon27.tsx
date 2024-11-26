// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      color={"#3f4079"}
      viewBox={"0 0 16 17"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 9.92v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66m1.655 4.99h.01"
        }
        stroke={"#3f4079"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <circle
        cx={"8"}
        cy={"8.994"}
        r={"7.25"}
        stroke={"#3f4079"}
        strokeWidth={"1.5"}
      ></circle>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
