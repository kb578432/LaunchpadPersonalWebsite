import { prisma } from "./prisma";

const performSeed = async () => {
  // create an admin user in our database
  const adminUser = await prisma.user.create({
    data: {
      username: "kyanbarker",
      email: "kyanbarker@gmail.com",
      role: "ADMIN",
      bio: "2nd year CS / Math student at Northeastern University",
      imageUrl: "",
      githubUrl: "https://github.com/kb578432",
      linkedInUrl: "https://www.linkedin.com/in/kyan-barker-273a11258/",
      title: "Student",
    },
  });
  const project1 = await prisma.project.create({
    data: {
      title: "Launchpad personal website",
      description: "Created a personal website",
      skills: ["Prisma", "Typescript"],
      githubUrl:
        "https://github.com/Northeastern-Electric-Racing-Launchpad/web-dev-launchpad-kb578432",
      creatorId: adminUser.id,
    },
  });
  const project2 = await prisma.project.create({
    data: {
      title: "Co-op application manager",
      description: "Created a web app for managing applications to co-ops",
      skills: ["React", "Supabase"],
      githubUrl: "https://github.com/hack-the-us-government",
      creatorId: adminUser.id,
    },
  });
  const experience1 = await prisma.experience.create({
    data: {
      title: "Software Developer",
      description: "Created a personal website",
      companyName: "Northeastern Electric Racing",
      location: "Boston",
      startDate: new Date("2024-09-01"),
      creatorId: adminUser.id,
    },
  });
  const experience2 = await prisma.experience.create({
    data: {
      title: "Software Developer",
      description: "Created a web app for managing applications to co-ops",
      companyName: "Oasis",
      location: "Boston",
      creatorId: adminUser.id,
    },
  });
};

performSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
