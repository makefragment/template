import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import { useEffect } from "react";

import { Timeit } from "react-timeit";

export const TimePicker = ({
  onChange,
  value = "00:00",
  hourExclude,
  minuteExclude,
  notShowExclude,
}: any) => {
  const fragmentConfig = useSelector("Fragment");

  useEffect(() => {
    changeTheme(fragmentConfig?.primaryColor);
  }, [fragmentConfig?.primaryColor]);

  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty("--timeit-primary-color", color);
  };

  return (
    <Timeit
      onChange={(time) => {
        if (value !== time) onChange(time);
      }}
      defualtValue={value}
      hourExclude={hourExclude}
      minuteExclude={minuteExclude}
      notShowExclude={notShowExclude}
    />
  );
};

export const timePickerMeta: CodeComponentMeta<any> = {
  name: "TimePicker",
  displayName: "Fragment/TimePicker",
  importPath: "@/fragment/components/time-picker",
  section: "Fragment",
  props: {
    value: { type: "string", defaultValue: "00:00" },
    hourExclude: {
      type: "array",
      helpText: "[18, 20, 22]",
    },
    minuteExclude: {
      type: "array",
      helpText: "[15, 30, 25]",
    },
    notShowExclude: {
      type: "boolean",
    },
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
