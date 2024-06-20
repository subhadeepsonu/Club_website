/*
  Warnings:

  - You are about to drop the `_eventsTouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_eventsTouser" DROP CONSTRAINT "_eventsTouser_A_fkey";

-- DropForeignKey
ALTER TABLE "_eventsTouser" DROP CONSTRAINT "_eventsTouser_B_fkey";

-- DropTable
DROP TABLE "_eventsTouser";
