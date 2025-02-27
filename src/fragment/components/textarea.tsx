/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as TextareaPrimitive from "@/components/ui/textarea";
import { RefAttributes } from "react";

type InputType = {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: any;
  disabled?: boolean;
  className?: string;
  name?: string;
  attributes?: TextareaPrimitive.TextareaProps &
    RefAttributes<HTMLTextAreaElement>;
};

export const Textarea = (props: InputType) => {
  const {
    placeholder,
    value,
    onChange,
    disabled,
    className,
    name,
    attributes,
  } = props;
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
      {...attributes}
    />
  );
};

export const textareaMeta: CodeComponentMeta<InputType> = {
  name: "Textarea",
  displayName: "Fragment/Textarea",
  importPath: "@/fragment/components/textarea",
  figmaMappings: [{ figmaComponentName: "Textarea" }],
  section: "Fragment",
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
    attributes: {
      type: "object",
      advanced: true,
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
