/**
 * One date formatter for every dated entry on the site, so Education,
 * Positions, Honours, and Service all read the same way.
 *
 * Accepts whatever the data carries — "Aug 2020 – Jun 2026", "2017–2019",
 * "Jan 2020", "2024 – Present", "2020" — and returns a clean year span:
 *   "2020 – 2026" · "2017 – 2019" · "2024 – Present" · "2020"
 * A single year is shown alone; two distinct years become a span.
 */
export function years(input: string | undefined): string {
  if (!input) return "";
  const present = /present/i.test(input);
  const found = input.match(/\d{4}/g) ?? [];
  if (present) return found.length ? `${found[0]} – Present` : "Present";
  if (found.length === 0) return "";
  const first = found[0];
  const last = found[found.length - 1];
  return first === last ? first : `${first} – ${last}`;
}
