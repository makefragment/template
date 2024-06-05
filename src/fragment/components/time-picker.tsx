import { CodeComponentMeta } from "@plasmicapp/host";

import { Timeit } from "react-timeit";

export const TimePicker = ({ onChange, value = "00:00" }: any) => {
  return (
    <Timeit
      onChange={(time) => {
        if (value !== time) onChange(time);
      }}
      defualtValue={value}
    />
  );
};

export const timePickerMeta: CodeComponentMeta<any> = {
  name: "TimePicker",
  displayName: "Fragment/TimePicker",
  importPath: "@/fragment/components/time-picker",
  props: {
    value: { type: "string", defaultValue: "00:00" },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "time",
          type: "string",
        },
      ],
    },
  },
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange",
    },
  },
};
