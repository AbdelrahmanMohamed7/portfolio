import { ArrowLeft, ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";

const liveButtonClass =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-5 py-2.5 text-sm font-bold text-[#0f172a] shadow-sm transition-colors hover:bg-[#2dd4bf]";

const primaryLink =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1e293b] border border-[#14b8a6]/45 px-5 py-2.5 text-sm font-bold text-[#5eead4] transition-colors hover:bg-[#14b8a6] hover:text-[#0f172a]";

const secondaryLink =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-[#f1f5f9] transition-colors hover:border-[#2dd4bf] hover:text-[#5eead4]";

export function LiveSiteLink({
  href,
  projectName,
}: {
  href: string;
  projectName: string;
}) {
  return (
    <a
      className={liveButtonClass}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <Globe aria-hidden="true" size={17} />
      Live website
      <ArrowUpRight aria-hidden="true" size={17} />
      <span className="sr-only"> for {projectName} (opens in a new tab)</span>
    </a>
  );
}

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
      className="focus-ring inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[#5eead4] underline decoration-[#5eead4]/40 underline-offset-4 hover:decoration-[#5eead4]"
      href="/#projects"
    >
      <ArrowLeft aria-hidden="true" size={17} />
      Back to selected work
    </Link>
  );
}
