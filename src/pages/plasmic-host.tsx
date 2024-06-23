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
