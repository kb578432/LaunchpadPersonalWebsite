import { Prisma } from "@prisma/client";

export const userQueryArgs = Prisma.validator<Prisma.UserDefaultArgs>()({});