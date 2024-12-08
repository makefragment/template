// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon39Icon(props: Icon39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.67 12.094c-.993-1.976-1.63-4.26-1.88-6.82-.036-.366-.054-.55-.027-.768.097-.788.775-1.535 1.549-1.708.215-.048.438-.048.885-.048v0c.391 0 .586 0 .759.03a2 2 0 011.479 1.155c.071.16.119.35.213.73l.414 1.654c.296 1.182.443 1.773.265 2.32-.177.546-.645.937-1.58 1.719L4.67 12.094zm0 0c1.472 2.93 3.726 5.184 6.656 6.656m0 0c1.976.993 4.26 1.63 6.82 1.88.366.036.55.054.768.027.788-.097 1.535-.775 1.708-1.549.048-.215.048-.439.048-.885v0c0-.391 0-.587-.03-.759a2 2 0 00-1.155-1.479c-.16-.071-.35-.119-.73-.213l-1.654-.414c-1.182-.296-1.773-.444-2.32-.266-.546.178-.937.646-1.719 1.58l-1.736 2.078z"
        }
        stroke={"#000"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon39Icon;
/* prettier-ignore-end */
