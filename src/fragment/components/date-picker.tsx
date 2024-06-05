import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { CodeComponentMeta } from "@plasmicapp/host";

import moment from "jalali-moment";

export const DatePicker = ({ onChange, locale, holidays = [], value }: any) => {
  const dateToJson = (value: number) => {
    const date = moment(value * 1000).locale(locale);
    return {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    };
  };
  return (
    <Calendar
      onChange={(value: any) => {
        return onChange(
          moment(
            `${value?.year}/${value?.month}/${value?.day}`,
            "jYYYY/jMM/jDD",
            locale
          )
            .locale("en")
            .unix()
        );
      }}
      locale={locale}
      customDaysClassName={holidays.map((d: any) => {
        return {
          ...dateToJson(d),
          className: "holiday-style",
        };
      })}
      {...(value && {
        value: dateToJson(value),
      })}
    />
  );
};

export const datePickerMeta: CodeComponentMeta<any> = {
  name: "DatePicker",
  displayName: "Fragment/DatePicker",
  importPath: "@/fragment/components/date-picker",
  props: {
    value: { type: "number" },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "date",
          type: "object",
        },
      ],
    },
    locale: {
      defaultValue: "fa",
      type: "choice",
      options: ["fa", "en"],
    },
    holidays: {
      defaultValue: [],
      type: "array",
      helpText: "Array of day timestamps, e.g., [1710534600, 1710707400].",
    },
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
