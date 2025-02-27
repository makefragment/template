/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as ChartPrimitive from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Line,
  LineChart,
  Pie,
  PieChart,
} from "recharts";

type ChartType = {
  cartesianGrid: any[];
  data: Record<string, any>[];
  chartConfig: Record<string, any>[];
  xAxis?: Record<string, any>;
  yAxis?: Record<string, any>;
  tooltip?: Record<string, any>;
  layout?: "horizontal" | "vertical";
  label?: boolean;
  type?: "bar" | "area" | "line" | "pie";
  stack?: boolean;
  dataKey?: Record<string, any>;
  nameKey?: Record<string, any>;
  legend?: boolean;
  className?: string;
};

import { type ChartConfig } from "@/components/ui/chart";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export const Chart = (props: ChartType) => {
  const {
    cartesianGrid,
    data,
    chartConfig = [],
    xAxis,
    yAxis,
    tooltip,
    layout,
    label,
    type = "bar",
    stack,
    dataKey = {},
    nameKey,
    legend,
    className,
  } = props;

  const reformmatedConfig = ([dataKey ?? {}, ...chartConfig]?.reduce?.(
    (acc, item) => {
      const key = item.key;
      acc[key] = item;
      return acc;
    },
    {}
  ) ?? {}) satisfies ChartConfig;

  const ComponentContainerChart: any = useMemo(() => {
    if (type === "bar") {
      return BarChart;
    }
    if (type === "area") {
      return AreaChart;
    }
    if (type === "line") {
      return LineChart;
    }
    if (type === "pie") {
      return PieChart;
    }
  }, [type]);

  const ComponentChart: any = useMemo(() => {
    if (type === "bar") {
      return Bar;
    }
    if (type === "area") {
      return Area;
    }
    if (type === "line") {
      return Line;
    }
    if (type === "pie") {
      return Pie;
    }
  }, [type]);

  return (
    <ChartPrimitive.ChartContainer
      config={reformmatedConfig}
      className={cn(className)}
    >
      <ComponentContainerChart
        accessibilityLayer
        {...(type === "bar" && { layout })}
        {...(type !== "pie" && { data })}
        margin={{
          right: 16,
          left: 16,
          top: 16,
        }}
      >
        {type !== "pie" && cartesianGrid?.length > 0 && (
          <CartesianGrid
            vertical={cartesianGrid.includes("vertical")}
            horizontal={cartesianGrid.includes("horizontal")}
          />
        )}
        {type !== "pie" && xAxis?.enabled && (
          <XAxis
            {...(xAxis.key !== "auto" && { dataKey: xAxis.key })}
            tickLine={xAxis?.tickLine ?? false}
            tickMargin={xAxis?.tickMargin ?? 10}
            axisLine={xAxis?.axisLine ?? false}
            {...(xAxis.key !== "auto" && { type: xAxis.type })}
          />
        )}
        {type !== "pie" && yAxis?.enabled && (
          <YAxis
            {...(yAxis.key !== "auto" && { dataKey: yAxis.key })}
            tickLine={yAxis?.tickLine ?? false}
            tickMargin={yAxis?.tickMargin ?? 10}
            axisLine={yAxis?.axisLine ?? false}
            {...(yAxis.key !== "auto" && { type: yAxis.type })}
          />
        )}
        {tooltip?.enabled && (
          <ChartPrimitive.ChartTooltip
            content={<ChartPrimitive.ChartTooltipContent {...tooltip} />}
          />
        )}
        {type === "pie" && (
          <ComponentChart
            data={data.map((item) => ({
              ...item,
              fill: reformmatedConfig[item[nameKey?.key]]?.color,
            }))}
            dataKey={dataKey?.key}
            nameKey={nameKey?.key}
          >
            {label && (
              <LabelList
                dataKey={nameKey?.key}
                fontSize={12}
                fontWeight={100}
                formatter={(value: string) => reformmatedConfig[value]?.label}
              />
            )}
          </ComponentChart>
        )}
        {legend && (
          <ChartPrimitive.ChartLegend
            content={<ChartPrimitive.ChartLegendContent />}
          />
        )}
        {type !== "pie" &&
          chartConfig?.map((item) => (
            <ComponentChart
              {...(type === "bar" && { layout })}
              key={item.key}
              dataKey={item.key}
              fill={item.color}
              stroke={item.color}
              radius={7}
              {...(type !== "bar" && { type: item?.type ?? "natural" })}
              {...(type !== "bar" && { dot: item?.dot ?? false })}
              {...(stack && { stackId: "a" })}
              allowReorder="yes"
            >
              {label && (
                <LabelList
                  dataKey={item.key}
                  position={
                    type !== "bar"
                      ? "top"
                      : layout === "vertical"
                      ? "right"
                      : "top"
                  }
                  offset={8}
                  fontSize={12}
                />
              )}
            </ComponentChart>
          ))}
      </ComponentContainerChart>
    </ChartPrimitive.ChartContainer>
  );
};

export const chartMeta: CodeComponentMeta<ChartType> = {
  name: "Chart",
  displayName: "Fragment/Chart",
  importPath: "@/fragment/components/chart",
  figmaMappings: [{ figmaComponentName: "Chart" }],
  section: "Fragment",
  props: {
    type: {
      type: "cardPicker",
      options: [
        {
          imgUrl:
            "https://raw.githubusercontent.com/makefragment/chart/main/bar.png",
          value: "bar",
          label: "Bar",
          footer: "Bar Chart",
        },
        {
          imgUrl:
            "https://raw.githubusercontent.com/makefragment/chart/main/area.png",
          value: "area",
          label: "Area",
          footer: "Area Chart",
        },
        {
          imgUrl:
            "https://raw.githubusercontent.com/makefragment/chart/main/line.png",
          value: "line",
          label: "Line",
          footer: "Line Chart",
        },
        {
          imgUrl:
            "https://raw.githubusercontent.com/makefragment/chart/main/pie.png",
          value: "pie",
          label: "Pie",
          footer: "Pie Chart",
        },
      ],
    },
    data: {
      type: "array",
    },
    dataKey: {
      type: "object",
      hidden: (ps) => !!ps?.type && !["pie"].includes(ps?.type),
      nameFunc: (item: any) => item?.key,
      fields: {
        key: {
          type: "choice",
          options: (ps) => {
            return Object.keys(ps.data?.[0] ?? []);
          },
        },
        label: {
          type: "string",
        },
      },
    },
    nameKey: {
      type: "object",
      hidden: (ps) => !!ps?.type && !["pie"].includes(ps?.type),
      nameFunc: (item: any) => item?.key,
      fields: {
        key: {
          type: "choice",
          options: (ps) => {
            return Object.keys(ps.data?.[0] ?? []);
          },
        },
        label: {
          type: "string",
        },
      },
    },
    chartConfig: {
      type: "array",
      hidden: (ps) =>
        !!ps?.type && (["pie"].includes(ps?.type) ? !ps?.nameKey : false),
      itemType: {
        type: "object",
        nameFunc: (item: any) => item?.key,
        fields: {
          key: {
            type: "choice",
            options: (ps) => {
              return !!ps?.type && ["pie"].includes(ps?.type)
                ? Array.from(
                    new Set(ps.data?.map((entry) => entry[ps?.nameKey?.key]))
                  )
                : Object.keys(ps.data?.[0] ?? []);
            },
          },
          label: {
            type: "string",
          },
          color: {
            type: "color",
            defaultValue: "#000000",
            defaultValueHint: "#000000",
          },
          type: {
            type: "choice",
            hidden: (ps) => {
              return !!ps?.type && ["bar", "pie"].includes(ps?.type);
            },
            options: ["natural", "linear", "step"],
            defaultValueHint: "natural",
            defaultValue: "natural",
          },
          dot: {
            type: "boolean",
            hidden: (ps) => {
              return !!ps?.type && ["bar", "pie"].includes(ps?.type);
            },
            defaultValueHint: false,
            defaultValue: false,
          },
        },
      },
    },
    layout: {
      type: "choice",
      hidden: (ps) => {
        return ps.type != "bar";
      },
      options: [
        {
          label: "Vertical",
          value: "vertical",
        },
        {
          label: "Horizontal",
          value: "horizontal",
        },
      ],
      defaultValue: "vertical",
      defaultValueHint: "horizontal",
    },
    cartesianGrid: {
      displayName: "Cartesian grid",
      type: "choice",
      hidden: (ps) => ps.type === "pie",
      multiSelect: true,
      options: [
        {
          label: "Vertical",
          value: "vertical",
        },
        {
          label: "Horizontal",
          value: "horizontal",
        },
      ],
    },
    xAxis: {
      displayName: "X axis",
      type: "object",
      hidden: (ps) => ps.type === "pie",
      nameFunc: (item: any) => (item?.enabled ? item?.key : "Configure..."),
      fields: {
        enabled: "boolean",
        key: {
          type: "choice",
          options: (ps) => {
            return ["auto", ...Object.keys(ps.data?.[0] ?? [])];
          },
        },
        type: {
          type: "choice",
          hidden: (_, __, ps) => {
            return ps.item?.key === "auto";
          },
          options: [
            {
              label: "Category",
              value: "category",
            },
            {
              label: "Number",
              value: "number",
            },
          ],
        },
        tickLine: "boolean",
        tickMargin: {
          type: "number",
          defaultValue: 10,
          defaultValueHint: 10,
        },
        axisLine: "boolean",
      },
    },
    yAxis: {
      displayName: "Y axis",
      type: "object",
      hidden: (ps) => ps.type === "pie",
      nameFunc: (item: any) => (item?.enabled ? item?.key : "Configure..."),
      fields: {
        enabled: "boolean",
        key: {
          type: "choice",
          options: (ps) => {
            return ["auto", ...Object.keys(ps.data?.[0] ?? [])];
          },
        },
        type: {
          type: "choice",
          hidden: (_, __, ps) => {
            return ps.item?.key === "auto";
          },
          options: [
            {
              label: "Category",
              value: "category",
            },
            {
              label: "Number",
              value: "number",
            },
          ],
        },
        tickLine: "boolean",
        tickMargin: {
          type: "number",
          defaultValue: 10,
          defaultValueHint: 10,
        },
        axisLine: "boolean",
      },
    },
    tooltip: {
      displayName: "Tooltip",
      type: "object",
      fields: {
        enabled: "boolean",
        indicator: {
          type: "choice",
          options: [
            {
              label: "dot",
              value: "dot",
            },
            {
              label: "line",
              value: "line",
            },
            {
              label: "dashed",
              value: "dashed",
            },
          ],
        },
        hideLabel: "boolean",
        hideIndicator: "boolean",
      },
    },
    label: "boolean",
    stack: {
      type: "boolean",
      hidden: (ps) => ps.type === "pie",
    },
    legend: {
      type: "boolean",
    },
  },
  classNameProp: "className",
  defaultStyles: {
    width: "stretch",
  },
};
