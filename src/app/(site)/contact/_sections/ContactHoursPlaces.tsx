import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

type HoursRow = { label: string; value: string };
type PlaceRow = {
  label: string;
  name: string;
  detail: string;
  href: string;
};

const HOURS: HoursRow[] = [
  { label: "Monday", value: "Closed" },
  { label: "Tuesday – Friday", value: "9 AM – 7 PM" },
  { label: "Saturday", value: "9 AM – 5 PM" },
  { label: "Sunday", value: "10 AM – 3 PM" },
];

const PLACES: PlaceRow[] = [
  {
    label: "Concierge",
    name: "Manhattan & Brooklyn primary",
    detail: "Tuesday through Sunday — all five boroughs by request.",
    href: "/locations/in-home",
  },
  {
    label: "Gowanus clinic",
    name: "472 4th Ave, Brooklyn",
    detail: "Wednesdays only — by appointment.",
    href: "/locations/gowanus",
  },
  {
    label: "Red Hook studio",
    name: "Red Hook, Brooklyn",
    detail: "By invitation only — reserved for established clients.",
    href: "/locations/red-hook",
  },
];

export default function ContactHoursPlaces() {
  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <Eyebrow className="text-brass mb-5" withDash>
            Hours &amp; places
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            When and where to{" "}
            <em className="not-italic italic font-light text-brass">
              find me.
            </em>
          </h2>
        </div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start">
          <div>
            <Eyebrow className="text-brass mb-5" withDash>
              Weekly hours
            </Eyebrow>
            <dl className="m-0 border-t border-line">
              {HOURS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-6 py-4 border-b border-line"
                >
                  <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
                    {row.label}
                  </dt>
                  <dd className="m-0 font-body text-[15px] leading-[1.6] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-body text-[13px] leading-[1.6] text-ink/55">
              The Gowanus clinic operates within Wednesday hours; Red Hook is
              by invitation.
            </p>
          </div>

          <div>
            <Eyebrow className="text-brass mb-5" withDash>
              Three places
            </Eyebrow>
            <ul className="m-0 list-none p-0 border-t border-line">
              {PLACES.map((place) => (
                <li key={place.href} className="border-b border-line py-5">
                  <Link
                    href={place.href}
                    className="group grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6"
                  >
                    <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
                      {place.label}
                    </span>
                    <span className="block">
                      <span className="block font-display font-normal text-[20px] sm:text-[22px] leading-[1.15] text-ink transition-colors duration-200 group-hover:text-brass">
                        {place.name}
                      </span>
                      <span className="mt-1 block font-body text-[14px] leading-[1.6] text-ink/70">
                        {place.detail}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink/55 transition-colors duration-200 group-hover:text-brass">
                        Location detail <IconArrow className="w-3 h-3" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
