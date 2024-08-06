/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as TextareaPrimitive from "@/components/ui/textarea";
import { HTMLInputTypeAttribute } from "react";

type InputType = {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: any;
  disabled?: boolean;
  className?: string;
  name?: string;
};

export const Textarea = (props: InputType) => {
  const { placeholder, value, onChange, disabled, className, name } = props;
  const fragmentConfig = useSelector("Fragment");
  return (
    <TextareaPrimitive.Textarea
      disabled={disabled}
      onChange={(e) => onChange?.(e.target?.value ?? "")}
      value={value}
      dir={fragmentConfig.rtl ? "rtl" : "ltr"}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export const textareaMeta: CodeComponentMeta<InputType> = {
  name: "Textarea",
  displayName: "Fragment/Textarea",
  importPath: "@/fragment/components/textarea",
  figmaMappings: [{ figmaComponentName: "Textarea" }],
  props: {
    placeholder: "string",
    value: {
      type: "string",
      defaultValue: "",
    },
    disabled: "boolean",
    name: {
      type: "string",
      advanced: true,
      description: "The HTML name of the input",
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{ name: "value", type: "string" }],
    },
  },
  classNameProp: "className",
  defaultStyles: {
    width: "stretch",
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
