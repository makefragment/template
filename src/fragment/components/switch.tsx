/* eslint-disable react/display-name */
import { CodeComponentMeta } from "@plasmicapp/host";
import * as SwitchPrimitive from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type SwitchType = {
  onCheckedChange?: (checked: boolean) => void;
  checked?: any;
  disabled?: boolean;
  className?: string;
  name?: string;
};

export const Switch = (props: SwitchType) => {
  const { checked, onCheckedChange, disabled, className, name } = props;
  return (
    <SwitchPrimitive.Switch
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      checked={checked}
      dir="ltr"
      name={name}
      className={cn(className, "!w-11 !h-6")}
    />
  );
};

export const switchMeta: CodeComponentMeta<SwitchType> = {
  name: "Switch",
  displayName: "Fragment/Switch",
  importPath: "@/fragment/components/switch",
  figmaMappings: [{ figmaComponentName: "Switch" }],
  section: "Fragment",
  props: {
    checked: "boolean",
    disabled: "boolean",
    name: {
      type: "string",
      advanced: true,
      description: "The HTML name of the switch",
    },
    onCheckedChange: {
      type: "eventHandler",
      argTypes: [{ name: "checked", type: "boolean" }],
    },
  },
  classNameProp: "className",
  states: {
    checked: {
      type: "writable",
      variableType: "text",
      valueProp: "checked",
      onChangeProp: "onCheckedChange",
    },
  },
};
