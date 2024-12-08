/*
  Warnings:

  - You are about to drop the column `userCreatedId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userDeletedId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userCreatedId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `userDeletedId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userCreatedId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userDeletedId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userCreatedId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userDeletedId_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "userCreatedId",
DROP COLUMN "userDeletedId",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "deletorId" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "userCreatedId",
DROP COLUMN "userDeletedId",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "deletorId" TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_deletorId_fkey" FOREIGN KEY ("deletorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_deletorId_fkey" FOREIGN KEY ("deletorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
