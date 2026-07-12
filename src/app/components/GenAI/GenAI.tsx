import SectionHeading from "../UI/SectionHeading/SectionHeading";
import Reveal from "../UI/Reveal/Reveal";
import { genAiHighlights } from "@/app/data/genAi";

const GenAI = () => {
  return (
    <section id="genai" className="my-20 md:my-28">
      <Reveal>
        <SectionHeading eyebrow="AI-Augmented Engineering" index="03">
          Building with GenAI
        </SectionHeading>
        <p className="text-sm sm:text-base text-foreground-muted max-w-2xl leading-relaxed mb-8 -mt-4">
          I ship production features powered by large language models — from
          generative visual systems to natural-language data tooling — and build
          internal AI workflows that make engineering teams faster.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {genAiHighlights.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 0.08}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 transition-colors hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary">
                {item.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground-muted">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full border border-primary/25 text-xs text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default GenAI;
