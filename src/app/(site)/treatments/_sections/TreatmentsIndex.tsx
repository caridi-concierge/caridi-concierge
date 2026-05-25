import Eyebrow from "@/components/Eyebrow";
import { treatments } from "@/content/treatments";

/**
 * Pinned jump-nav for the treatments sequence. Sticks to the top of the
 * viewport while scrolling the full-width rows in TreatmentsDetail, then
 * releases when its wrapper (in the page) scrolls past.
 */
export default function TreatmentsIndex() {
  return (
    <nav
      aria-label="Treatments"
      className="sticky top-0 z-20 bg-ivory border-y border-line"
    >
      <div className="mx-auto max-w-[1280px] flex items-center gap-7 px-6 sm:px-10 lg:px-20 py-4 overflow-x-auto">
        <Eyebrow className="text-brass whitespace-nowrap shrink-0">
          Treatments
        </Eyebrow>
        {treatments.map((t, i) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink/70 hover:text-ink whitespace-nowrap transition-colors"
          >
            <span className="text-brass mr-1.5">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            {t.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
