import { Project } from "shared";
import axios from "../utils/axios";
import { urls } from "../utils/urls";
import { ProjectFormInput } from "../pages/ProjectsPage/ProjectForm";

export function getProjects() {
  return axios.get(urls.PROJECTS);
}

export async function createProject(projectData: ProjectFormInput) {
  const formData = new FormData();
  formData.append("description", projectData.description);
  formData.append("title", projectData.title);
  projectData.images.forEach((image) => formData.append("images", image.file));
  formData.append("githubUrl", projectData.githubUrl);
  formData.append(
    "skills",
    JSON.stringify(projectData.skills.map((skill) => skill.name))
  );

  const response = await axios.post<Project>(urls.CREATE_PROJECT, formData);
  return response.data;
}

interface ProjectEditInput extends ProjectFormInput {
  id: string;
}

export const editProject = async (
  projectData: ProjectEditInput
) => {
  const formData = new FormData();
  formData.append("description", projectData.description);
  formData.append("title", projectData.title);
  projectData.images.forEach((image) => formData.append("images", image.file));
  formData.append("githubUrl", projectData.githubUrl);
  formData.append(
    "skills",
    JSON.stringify(projectData.skills.map((skill) => skill.name))
  );

  const response = await axios.post<Project>(urls.EDIT_PROJECT(projectData.id), formData);
  return response.data;
};
