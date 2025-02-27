/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as SliderPrimitive from "@/components/ui/slider";

type SliderType = {
  onChange?: (value: number) => void;
  value?: any;
  disabled?: boolean;
  className?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
};

export const Slider = (props: SliderType) => {
  const {
    value = 0,
    onChange,
    disabled,
    className,
    name,
    max,
    min,
    step,
  } = props;
  const fragmentConfig = useSelector("Fragment");
  return (
    <SliderPrimitive.Slider
      value={[value]}
      onValueChange={(value) => onChange?.(value[0])}
      disabled={disabled}
      name={name}
      className={className}
      max={max}
      min={min}
      step={step}
      dir={fragmentConfig.rtl ? "rtl" : "ltr"}
    />
  );
};

export const sliderMeta: CodeComponentMeta<SliderType> = {
  name: "Slider",
  displayName: "Fragment/Slider",
  importPath: "@/fragment/components/slider",
  figmaMappings: [{ figmaComponentName: "Slider" }],
  section: "Fragment",
  props: {
    max: "number",
    min: "number",
    step: "number",
    disabled: "boolean",
    value: {
      type: "number",
      advanced: true,
    },
    name: {
      type: "string",
      advanced: true,
      description: "The HTML name of the slider",
    },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "value",
          type: "number",
        },
      ],
    },
  },
  classNameProp: "className",
  defaultStyles: {
    width: "stretch",
  },
  states: {
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onChange",
    },
  },
};
