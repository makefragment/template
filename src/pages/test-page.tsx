import dynamic from "next/dynamic";
import React from "react";
const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <div>...</div>,
});
const TestPage = () => {
  return (
    <div className="h-64">
      <Map
        lat={34}
        lng={-118}
        zoom={20}
        // setZoom={setMapZoom}
        sendPosition={(pos) => console.log(pos)}
      />
    </div>
  );
};

export default TestPage;
