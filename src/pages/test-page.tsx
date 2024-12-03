import React from "react";

const TestPage = () => {
  return (
    <div>
      <label htmlFor="file">choose image</label>
      <input
        type="file"
        id="selectImage"
        accept="image/png, image/jpg, image/jpeg, image/bmp"
        onChange={(e) => console.log(e?.target?.files)}
      />
    </div>
  );
};

export default TestPage;
