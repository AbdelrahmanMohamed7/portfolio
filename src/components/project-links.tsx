import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const primaryLink =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#115e59]";

const secondaryLink =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/20 px-5 py-2.5 text-sm font-bold text-[#151412] transition-colors hover:border-[#0f766e] hover:text-[#0f766e]";

export function CaseStudyLink({ slug }: { slug: string }) {
  return (
    <Link className={primaryLink} href={`/projects/${slug}`}>
      Read case study
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}

export function RepositoryLink({
  href,
  projectName,
}: {
  href: string;
  projectName: string;
}) {
  return (
    <a
      className={secondaryLink}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      View repository
      <ArrowUpRight aria-hidden="true" size={17} />
      <span className="sr-only"> for {projectName} (opens in a new tab)</span>
    </a>
  );
}

export function BackToWorkLink() {
  return (
    <Link
      className="focus-ring inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[#0f766e] underline decoration-[#0f766e]/35 underline-offset-4 hover:decoration-[#0f766e]"
      href="/#projects"
    >
      <ArrowLeft aria-hidden="true" size={17} />
      Back to selected work
    </Link>
  );
}
