-- CreateTable
CREATE TABLE "events" (
    "name" TEXT NOT NULL,
    "imgurl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "department" (
    "name" TEXT NOT NULL,
    "imgurl" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imgurl" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_departmentName_fkey" FOREIGN KEY ("departmentName") REFERENCES "department"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
