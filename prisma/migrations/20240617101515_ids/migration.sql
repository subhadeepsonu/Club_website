/*
  Warnings:

  - The primary key for the `department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `departmentName` on the `members` table. All the data in the column will be lost.
  - Added the required column `departmentid` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_departmentName_fkey";

-- AlterTable
ALTER TABLE "department" DROP CONSTRAINT "department_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "department_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "events" DROP CONSTRAINT "events_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "events_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "members" DROP COLUMN "departmentName",
ADD COLUMN     "departmentid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_departmentid_fkey" FOREIGN KEY ("departmentid") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
