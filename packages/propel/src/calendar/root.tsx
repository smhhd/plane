/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { DayPicker as PersianDayPicker } from "react-day-picker/persian";
import { ChevronLeftIcon } from "../icons/arrows/chevron-left";

import { cn } from "../utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  /** When true, renders the Jalali (Persian/Solar Hijri) calendar instead of Gregorian. */
  isJalali?: boolean;
};

const Chevron = ({ className, ...props }: React.ComponentProps<"svg"> & { orientation?: "left" | "right" | "up" | "down" }) => (
  <ChevronLeftIcon
    className={cn(
      "size-4",
      { "rotate-180": props.orientation === "right", "-rotate-90": props.orientation === "down" },
      className
    )}
    {...props}
  />
);

const JalaliChevron = ({ className, ...props }: React.ComponentProps<"svg"> & { orientation?: "left" | "right" | "up" | "down" }) => (
  <ChevronLeftIcon
    className={cn(
      "size-4",
      { "rotate-180": props.orientation === "left", "-rotate-90": props.orientation === "down" },
      className
    )}
    {...props}
  />
);

export function Calendar({ isJalali, className, showOutsideDays = true, ...props }: CalendarProps) {
  const currentYear = new Date().getFullYear();
  const thirtyYearsAgoFirstDay = new Date(currentYear - 30, 0, 1);
  const thirtyYearsFromNowFirstDay = new Date(currentYear + 30, 11, 31);

  if (isJalali) {
    return (
      <PersianDayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        startMonth={thirtyYearsAgoFirstDay}
        endMonth={thirtyYearsFromNowFirstDay}
        components={{ Chevron: JalaliChevron }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      weekStartsOn={props.weekStartsOn}
      components={{ Chevron }}
      startMonth={thirtyYearsAgoFirstDay}
      endMonth={thirtyYearsFromNowFirstDay}
      {...props}
    />
  );
}
