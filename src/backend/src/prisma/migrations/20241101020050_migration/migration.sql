/*
  Warnings:

  - You are about to drop the column `dateCreated` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `dateDeleted` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreated` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `dateDeleted` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `githubLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedInLink` on the `User` table. All the data in the column will be lost.
  - Added the required column `githubUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedInUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "dateCreated",
DROP COLUMN "dateDeleted",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "dateCreated",
DROP COLUMN "dateDeleted",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "githubLink",
DROP COLUMN "linkedInLink",
ADD COLUMN     "githubUrl" TEXT NOT NULL,
ADD COLUMN     "linkedInUrl" TEXT NOT NULL;
