import type { DoctorsNote } from "@/content/locations/types";
import Eyebrow from "@/components/Eyebrow";

type Props = {
  note?: DoctorsNote;
};

export default function LocationDoctorsNoteSection({ note }: Props) {
  if (!note) return null;

  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mx-auto text-center">
          <Eyebrow className="text-brass mb-6" withDash>
            A note
          </Eyebrow>
          <blockquote className="m-0">
            <p className="font-display font-light italic text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.4] text-ink">
              &ldquo;{note.body}&rdquo;
            </p>
            <footer className="mt-6 font-display font-light italic text-[18px] sm:text-[20px] leading-[1.3] text-brass">
              — {note.attr}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
