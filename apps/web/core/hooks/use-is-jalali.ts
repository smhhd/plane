import { useTranslation } from "@plane/i18n";

/**
 * Returns true when the user's current locale is Persian (fa-IR),
 * which means the Jalali calendar should be displayed instead of Gregorian.
 */
export const useIsJalali = (): boolean => {
  const { currentLocale } = useTranslation();
  return currentLocale === "fa-IR";
};
