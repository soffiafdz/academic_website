/**
 * Date helpers for the free-text dates the collections carry
 * ("Jul 2025", "Aug 2020 – Aug 2026", "2024 – Present", "2017–2019").
 */

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

const monthOf = (s: string) =>
  MONTHS[(s.match(/[A-Za-z]{3}/) ?? [""])[0].toLowerCase()] ?? 0;

/** Sortable key for a publication: year·12 + month (0 when no month). */
export const dateKey = (d: { year: number; date: string }) =>
  d.year * 12 + monthOf(d.date);

/** Sortable key for one date string; "Present" sorts last. */
export const stamp = (s: string | undefined) => {
  if (!s) return 0;
  if (/present/i.test(s)) return Number.MAX_SAFE_INTEGER;
  return parseInt((s.match(/\d{4}/) ?? ["0"])[0]) * 12 + monthOf(s);
};

/** Last four-digit year in a string, for sorting ranges by their end. */
export const lastYear = (s = "") =>
  parseInt((s.match(/\d{4}/g) ?? ["0"]).pop()!);

/** First four-digit year in a string. */
export const firstYear = (s = "") => (s.match(/\d{4}/) ?? [""])[0];

/**
 * A clean year span for a date gutter:
 *   "Aug 2020 – Jun 2026" → "2020 – 2026" · "Jan 2020" → "2020"
 *   "2024 – Present" → "2024 – Present"
 */
export function years(input: string | undefined): string {
  if (!input) return "";
  const found = input.match(/\d{4}/g) ?? [];
  if (/present/i.test(input)) return found.length ? `${found[0]} – Present` : "Present";
  if (found.length === 0) return "";
  const first = found[0];
  const last = found[found.length - 1];
  return first === last ? first : `${first} – ${last}`;
}
