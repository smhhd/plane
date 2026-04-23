import { Calendar } from "@plane/propel/calendar";
import type { CalendarProps } from "@plane/propel/calendar";
import { useIsJalali } from "@/hooks/use-is-jalali";

/**
 * Drop-in replacement for `Calendar` from `@plane/propel/calendar`.
 * Automatically switches to the Jalali calendar when the user's locale is `fa-IR`.
 */
export const LocaleCalendar = (props: CalendarProps) => {
  const isJalali = useIsJalali();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Calendar {...(props as any)} isJalali={isJalali} />;
};
