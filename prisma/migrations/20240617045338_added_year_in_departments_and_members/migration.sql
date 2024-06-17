/*
  Warnings:

  - Added the required column `year` to the `department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "department" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "year" INTEGER NOT NULL;
