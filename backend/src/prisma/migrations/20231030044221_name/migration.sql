/*
  Warnings:

  - You are about to drop the column `phone` on the `phone` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `phone` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_phone" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_phone" ("createdAt", "id", "lastName", "name") SELECT "createdAt", "id", "lastName", "name" FROM "phone";
DROP TABLE "phone";
ALTER TABLE "new_phone" RENAME TO "phone";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
