// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon29Icon(props: Icon29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 20"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.75 5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM8 .25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM1.75 17A3.25 3.25 0 015 13.75h6A3.25 3.25 0 0114.25 17c0 .69-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25zM5 12.25A4.75 4.75 0 00.25 17 2.75 2.75 0 003 19.75h10A2.75 2.75 0 0015.75 17 4.75 4.75 0 0011 12.25H5z"
        }
        fill={"#3F3F79"}
      ></path>
    </svg>
  );
}

export default Icon29Icon;
/* prettier-ignore-end */
