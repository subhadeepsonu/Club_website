-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registeredEvents" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "eventid" INTEGER NOT NULL,

    CONSTRAINT "registeredEvents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_eventsTouser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_eventsTouser_AB_unique" ON "_eventsTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_eventsTouser_B_index" ON "_eventsTouser"("B");

-- AddForeignKey
ALTER TABLE "registeredEvents" ADD CONSTRAINT "registeredEvents_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registeredEvents" ADD CONSTRAINT "registeredEvents_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_eventsTouser" ADD CONSTRAINT "_eventsTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_eventsTouser" ADD CONSTRAINT "_eventsTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
