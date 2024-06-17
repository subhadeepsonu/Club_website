/*
  Warnings:

  - You are about to drop the column `year` on the `members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "year",
ALTER COLUMN "role" SET DEFAULT 'Member';
