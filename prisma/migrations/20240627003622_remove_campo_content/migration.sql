/*
  Warnings:

  - You are about to drop the column `content` on the `Task` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed_at" TEXT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Task" ("completed_at", "created_at", "description", "id", "published", "title", "updated_at") SELECT "completed_at", "created_at", "description", "id", "published", "title", "updated_at" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
