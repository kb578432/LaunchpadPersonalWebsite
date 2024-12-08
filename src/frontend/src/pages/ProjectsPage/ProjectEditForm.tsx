import { Project } from "shared";
import ProjectForm from "./ProjectForm";

export const ProjectEditForm = ({
  open,
  onHide,
  project,
}: {
  open: boolean;
  onHide: () => void;
  project: Project;
}) => {
  const { mutateAsync, isLoading } = useUpdateProject();

  const defaultValues = {
    title: project.title,
    description: project.description,
    skills: project.skills.map((skill) => ({ name: skill })),
    githubUrl: project.githubUrl,
  };
  return (
    <ProjectForm
      open={open}
      onHide={onHide}
      mutateAsync={mutateAsync}
      defaultValues={defaultValues}
      isLoading={isLoading}
    />
  );
};
