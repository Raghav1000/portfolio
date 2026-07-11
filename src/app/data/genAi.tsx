import { TbSparkles } from "react-icons/tb";
import { LuBrainCircuit, LuDatabase } from "react-icons/lu";
import { RiTerminalBoxLine } from "react-icons/ri";
import type { ReactNode } from "react";

export type TGenAiHighlight = {
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
};

export const genAiHighlights: TGenAiHighlight[] = [
  {
    title: "AI-Generated Jockey Silks",
    description:
      "A Google Gemini prompt pipeline generates silk descriptions, a Golang service composites the pattern layers, and a React/SVG frontend renders them crisply at every resolution.",
    icon: <TbSparkles size={22} />,
    tags: ["Gemini", "Golang", "React / SVG"],
  },
  {
    title: "AI-Assisted Promotions",
    description:
      "Prompt-driven promotion-config generation plus a natural-language-to-SQL layer for live customer segmentation on Apache Pinot — describe an audience in plain English, get the query.",
    icon: <LuDatabase size={22} />,
    tags: ["NestJS", "NL-to-SQL", "Apache Pinot"],
  },
  {
    title: "Claude Code Skill Authoring",
    description:
      "A custom Claude Code skill that automates documentation generation and validation-report QA, codifying engineering standards into a repeatable AI-assisted workflow.",
    icon: <RiTerminalBoxLine size={22} />,
    tags: ["Claude", "Automation", "DevEx"],
  },
  {
    title: "Applied GenAI Foundations",
    description:
      "Hands-on with prompt engineering, LLM tool-use, and production patterns for shipping reliable generative features — not demos, but systems running in production.",
    icon: <LuBrainCircuit size={22} />,
    tags: ["Prompt Engineering", "LLM Tool-Use"],
  },
];
