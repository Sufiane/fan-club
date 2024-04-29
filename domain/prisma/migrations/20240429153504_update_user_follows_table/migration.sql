/*
  Warnings:

  - The primary key for the `user_follows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_follows` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_follows" (
    "followerId" INTEGER NOT NULL,
    "followedId" INTEGER NOT NULL,

    PRIMARY KEY ("followedId", "followerId"),
    CONSTRAINT "user_follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user_follows" ("followedId", "followerId") SELECT "followedId", "followerId" FROM "user_follows";
DROP TABLE "user_follows";
ALTER TABLE "new_user_follows" RENAME TO "user_follows";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
