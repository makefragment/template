/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as SelectPrimitive from "@/components/ui/select";

type SelectType = {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: any;
  options?: { label?: string; value: string; disabled?: boolean }[];
  disabled?: boolean;
  triggerClassName?: string;
  name?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Select = (props: SelectType) => {
  const {
    placeholder,
    value,
    onChange,
    options,
    disabled,
    triggerClassName,
    open,
    name,
    onOpenChange,
  } = props;
  const fragmentConfig = useSelector("Fragment");
  return (
    <SelectPrimitive.Select
      disabled={disabled}
      onValueChange={onChange}
      value={value}
      dir={fragmentConfig.rtl ? "rtl" : "ltr"}
      open={open}
      name={name}
      onOpenChange={onOpenChange}
    >
      <SelectPrimitive.SelectTrigger className={triggerClassName}>
        <SelectPrimitive.SelectValue placeholder={placeholder} />
      </SelectPrimitive.SelectTrigger>
      <SelectPrimitive.SelectContent>
        {options?.map((option) => (
          <SelectPrimitive.SelectItem
            key={option.value}
            disabled={option.disabled}
            value={option.value}
          >
            {option?.label ?? option.value}
          </SelectPrimitive.SelectItem>
        ))}
      </SelectPrimitive.SelectContent>
    </SelectPrimitive.Select>
  );
};

export const selectMeta: CodeComponentMeta<SelectType> = {
  name: "Select",
  displayName: "Fragment/Select",
  importPath: "@/fragment/components/select",
  figmaMappings: [{ figmaComponentName: "Select" }],
  section: "Fragment",
  props: {
    placeholder: "string",
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "value",
          type: "string",
        },
      ],
    },
    value: {
      type: "choice",
      displayName: "Selected value",
      description: "Initial selected option",
      options: (ps) => {
        const rec = (op: any) => {
          if (typeof op === "string") {
            return [{ value: op, label: op }];
          } else {
            return [{ value: op.value, label: op.label || op.value }];
          }
        };
        return (ps.options ?? []).flatMap((o: any) => rec(o));
      },
    },
    options: {
      type: "array",
      itemType: {
        type: "object",
        nameFunc: (item: any) => item?.label ?? item?.value,
        fields: {
          label: {
            type: "string",
            description:
              "If you want to show a different value to the user than the Value, you can optionally specify a label.",
          },
          value: {
            type: "string",
            description:
              "Value that identifies this option. Will also be the value shown to the user, unless you specify a Label.",
          },
          disabled: {
            type: "boolean",
            advanced: true,
          },
        },
        defaultValue: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        exprHint:
          'An array of items, like `["Option1", "Option2"]`, or an array of objects with `value`, `label`, or `disabled`, like `[{value: "usa", label: "United States"}, {value: "bra", label: "Brazil"}]`',
      },
    },
    disabled: "boolean",
    name: {
      type: "string",
      advanced: true,
      description: "The HTML name of the select",
    },
    open: {
      type: "boolean",
      advanced: true,
    },
    onOpenChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "open",
          type: "boolean",
        },
      ],
    },
  },
  classNameProp: "triggerClassName",
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
    open: {
      type: "writable",
      variableType: "boolean",
      valueProp: "open",
      onChangeProp: "onOpenChange",
    },
  },
};
