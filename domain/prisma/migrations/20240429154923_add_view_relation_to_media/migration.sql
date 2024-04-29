-- CreateTable
CREATE TABLE "_MediaViewed" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MediaViewed_A_fkey" FOREIGN KEY ("A") REFERENCES "Medias" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MediaViewed_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_MediaViewed_AB_unique" ON "_MediaViewed"("A", "B");

-- CreateIndex
CREATE INDEX "_MediaViewed_B_index" ON "_MediaViewed"("B");
