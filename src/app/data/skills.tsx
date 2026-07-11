export const aiSkills = [
  {
    tooltip: "Google Gemini",
    icon: "/icons/ai/gemini.svg",
  },
  {
    tooltip: "Claude",
    icon: "/icons/ai/claude.svg",
  },
  {
    tooltip: "Prompt Engineering",
    icon: "/icons/ai/prompt.svg",
  },
  {
    tooltip: "LLM Tool-Use",
    icon: "/icons/ai/llm.svg",
  },
  {
    tooltip: "NL-to-SQL",
    icon: "/icons/ai/nlsql.svg",
  },
  {
    tooltip: "Claude Code Skills",
    icon: "/icons/ai/claude-code.svg",
  },
];

export const frontEndSkills = [
  {
    tooltip: "ReactJS",
    icon: "/icons/frontend/react-icon.svg",
  },
  {
    tooltip: "HTML",
    icon: "/icons/frontend/html-icon.svg",
  },
  {
    tooltip: "CSS",
    icon: "/icons/frontend/css-icon.svg",
  },
  {
    tooltip: "SASS",
    icon: "/icons/frontend/sass-icon.svg",
  },
  {
    tooltip: "Tailwind",
    icon: "/icons/frontend/tailwind-icon.svg",
  },
  {
    tooltip: "Material UI",
    icon: "/icons/frontend/material-icon.svg",
  },
  {
    tooltip: "JavaScript",
    icon: "/icons/frontend/javascript-icon.svg",
  },
  {
    tooltip: "TypeScript",
    icon: "/icons/frontend/typescript-icon.svg",
  },
  {
    tooltip: "jQuery",
    icon: "/icons/frontend/jquery-icon.svg",
  },
];
export const backEndSkills = [
  {
    tooltip: "Node.js",
    icon: "/icons/backend/nodejs-icon.svg",
  },
  {
    tooltip: "Golang",
    icon: "/icons/backend/go-icon.svg",
  },
  {
    tooltip: "NestJS",
    icon: "/icons/backend/nestjs-icon.svg",
  },
  {
    tooltip: "Express.js",
    icon: "/icons/backend/express-icon.svg",
  },
  {
    tooltip: "Kafka",
    icon: "/icons/backend/kafka-icon.svg",
  },
  {
    tooltip: "GraphQL",
    icon: "/icons/backend/graphql-icon.svg",
  },
  {
    tooltip: "Firebase",
    icon: "/icons/backend/firebase-icon.svg",
  },
  {
    tooltip: "Python",
    icon: "/icons/backend/python-icon.svg",
  },
];

export const devOpsSkills = [
  {
    tooltip: "Docker",
    icon: "/icons/devops/docker-icon.svg",
  },
  {
    tooltip: "Kubernetes",
    icon: "/icons/devops/kubernetes-icon.svg",
  },
  {
    tooltip: "AWS",
    icon: "/icons/devops/aws-icon.svg",
  },
  {
    tooltip: "Google Cloud",
    icon: "/icons/devops/gcp-icon.svg",
  },
  {
    tooltip: "CI/CD",
    icon: "/icons/devops/ci-cd-icon.svg",
  },
  {
    tooltip: "Nginx",
    icon: "/icons/devops/nginx-icon.svg",
  },
];

export const databaseSkills = [
  {
    tooltip: "MongoDB",
    icon: "/icons/database/mongodb-icon.svg",
  },
  {
    tooltip: "MySQL",
    icon: "/icons/database/mysql-icon.svg",
  },
  {
    tooltip: "Redis",
    icon: "/icons/database/redis-icon.svg",
  },
  {
    tooltip: "Firebase Database",
    icon: "/icons/database/firebase-icon.svg",
  },
  {
    tooltip: "Cassandra",
    icon: "/icons/database/cassandra-icon.svg",
  },
];

export const biSkills = [
  {
    tooltip: "Metabase",
    icon: "/icons/bi/metabase.svg",
  },
  {
    tooltip: "Power BI",
    icon: "/icons/bi/powerbi.svg",
  },
  {
    tooltip: "MicroStrategy",
    icon: "/icons/bi/microstrategy.svg",
  },
];

export const softSkills = [
  {
    tooltip: "Communication",
    icon: "/icons/soft/communication-icon.svg",
  },
  {
    tooltip: "Teamwork",
    icon: "/icons/soft/teamwork-icon.svg",
  },
  {
    tooltip: "Problem Solving",
    icon: "/icons/soft/problem-solving-icon.svg",
  },
  {
    tooltip: "Time Management",
    icon: "/icons/soft/time-management-icon.svg",
  },
  {
    tooltip: "Leadership",
    icon: "/icons/soft/leadership-icon.svg",
  },
];

export type TSkillsTitle = {
  label: string;
  value: string;
  data: {
    tooltip: string;
    icon: string;
  }[];
}[];

export const skillsTitle: TSkillsTitle = [
  { label: "AI / GenAI", value: "aiSkills", data: aiSkills },
  { label: "Frontend", value: "frontEndSkills", data: frontEndSkills },
  { label: "Backend", value: "backendSkills", data: backEndSkills },
  { label: "Database", value: "databaseSkills", data: databaseSkills },
  { label: "BI & Reporting", value: "biSkills", data: biSkills },
  { label: "Devops", value: "devOpsSkills", data: devOpsSkills },
  { label: "Soft Skills", value: "softSkills", data: softSkills },
];

