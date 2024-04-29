-- CreateTable
CREATE TABLE "user_follows" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "followerId" INTEGER NOT NULL,
    "followedId" INTEGER NOT NULL,
    CONSTRAINT "user_follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
