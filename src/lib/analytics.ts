/**
 * Analytics event helper for the GTM dataLayer (container GTM-KN8MSZTK,
 * loaded in `src/app/layout.tsx`).
 *
 * GTM picks up the `dataLayer` array whether or not it has initialised yet,
 * so pushing before the container loads is safe — events queue and flush.
 *
 * Conversion/event tracking is keyed on these event names and on element
 * `id` attributes (GTM click triggers). Treat both as a tracking contract:
 * renaming or removing them can silently break a configured Key Event.
 */

type EventParams = Record<string, unknown>;

type DataLayerWindow = Window & { dataLayer?: EventParams[] };

/** Push a named event into the GTM dataLayer. No-ops during SSR. */
export function pushEvent(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
}
