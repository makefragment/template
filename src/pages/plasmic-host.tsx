import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
  registerGlobalContext,
} from "@plasmicapp/react-web/lib/host";
import { Fragment, fragmentMeta } from "@/fragment/fragment";
import { GrowthBook, growthBookMeta } from "@/fragment/growthbook";
import { DatePicker, datePickerMeta } from "@/fragment/components/date-picker";
import { TimePicker, timePickerMeta } from "@/fragment/components/time-picker";
import { Splunk, splunkMeta } from "@/fragment/splunk";
import { Popover, popoverMeta } from "@/fragment/components/popover";
import { Select, selectMeta } from "@/fragment/components/select";
import { Input, inputMeta } from "@/fragment/components/input";
import { Switch, switchMeta } from "@/fragment/components/switch";
import { ApiRequest, apiRequestMeta } from "@/fragment/components/api-request";
import { Slider, sliderMeta } from "@/fragment/components/slider";
import { Chart, chartMeta } from "@/fragment/components/chart";
import { Hamdast, hamdastMeta } from "@/hamdast/hamdast";
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
registerGlobalContext(Fragment, fragmentMeta);
registerGlobalContext(GrowthBook, growthBookMeta);
registerGlobalContext(Splunk, splunkMeta);
registerGlobalContext(Hamdast, hamdastMeta);
registerComponent(DatePicker, datePickerMeta);
registerComponent(TimePicker, timePickerMeta);
registerComponent(Popover, popoverMeta);
registerComponent(Select, selectMeta);
registerComponent(Input, inputMeta);
registerComponent(Switch, switchMeta);
registerComponent(Slider, sliderMeta);
registerComponent(ApiRequest, apiRequestMeta);
registerComponent(Chart, chartMeta);
