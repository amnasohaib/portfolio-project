// import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tags = [],
  githubLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-foreground-light/10 dark:bg-foreground-dark/10 border border-foreground-light dark:border-foreground-dark">
      <h1 className="text-xl">{title}</h1>
      {description && (
        <p className="text-neutral-500 dark:text-neutral-400">{description}</p>
      )}
    </div>
  );
};

export default ProjectCard;
