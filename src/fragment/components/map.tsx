import { CodeComponentMeta } from "@plasmicapp/host";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MapComponent = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <div>...</div>,
});

type IPosition = {
  lat: number;
  lng: number;
};

type IMap = {
  lat: number;
  lng: number;
  zoom?: number;
  sendPosition: (value: IPosition) => void;
  onChangeLat: (value: number) => void;
  onChangeLng: (value: number) => void;
  height?: string;
  width?: string;
};

export const Map = (props: IMap) => {
  const {
    lat,
    lng,
    sendPosition,
    onChangeLat,
    onChangeLng,
    zoom,
    height,
    width,
  } = props;
  const [latState, setLat] = useState(lat);
  const [lngState, setLng] = useState(lng);

  const handlePositionChange = (pos: IPosition) => {
    setLat(pos.lat);
    onChangeLat(pos.lat);
    setLng(pos.lng);
    onChangeLng(pos.lng);
    if (sendPosition) {
      sendPosition(pos);
    }
  };

  return (
    <div
      style={{
        height,
        width,
      }}
    >
      <MapComponent
        lat={latState}
        lng={lngState}
        zoom={zoom}
        sendPosition={(pos) => handlePositionChange(pos)}
      />
    </div>
  );
};

export default Map;

export const mapMeta: CodeComponentMeta<IMap> = {
  name: "Map",
  displayName: "Fragment/Map",
  importPath: "@/fragment/components/map",
  figmaMappings: [{ figmaComponentName: "Map" }],
  props: {
    lat: {
      type: "number",
      defaultValue: 35.70069003610754,
    },
    lng: {
      type: "number",
      defaultValue: 51.35918498039246,
    },
    zoom: {
      type: "number",
      defaultValue: 20,
    },
    height: {
      type: "string",
      defaultValue: "256px",
    },
    width: {
      type: "string",
      defaultValue: "256px",
    },
    sendPosition: {
      type: "eventHandler",
      argTypes: [
        {
          name: "pos",
          type: "object",
        },
      ],
    },
    onChangeLat: {
      type: "eventHandler",
      argTypes: [{ name: "lat", type: "number" }],
    },
    onChangeLng: {
      type: "eventHandler",
      argTypes: [{ name: "lng", type: "number" }],
    },
  },

  states: {
    lat: {
      type: "writable",
      variableType: "number",
      valueProp: "lat",
      onChangeProp: "onChangeLat",
    },
    lng: {
      type: "writable",
      variableType: "number",
      valueProp: "lng",
      onChangeProp: "onChangeLng",
    },
  },
};
