import { Prisma } from "@prisma/client";

export const experienceQueryArgs =
  Prisma.validator<Prisma.ExperienceDefaultArgs>()({
    include: {
      creator: true,
    },
  });
