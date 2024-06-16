/*
  Warnings:

  - Added the required column `role` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" ADD COLUMN     "role" TEXT NOT NULL;
