import { User } from "@prisma/client";
import { prisma } from "../src/prisma/prisma";

export const clearDatabase = async () => {
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.user.deleteMany();
};

export const createTestUser = async (isAdmin = true): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      username: "kyanbarker",
      email: "kyanbarker@gmail.com",
      role: isAdmin ? "ADMIN" : "GUEST",
      bio: "i love picking pickles",
      imageUrl: "",
      githubUrl: "https://github.com/kb578432",
      linkedInUrl: "https://www.linkedin.com/in/kyan-barker-273a11258/",
      title: "chief pickle picker",
    },
  });
  return user;
};
