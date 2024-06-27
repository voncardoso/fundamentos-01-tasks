/*
  Warnings:

  - Added the required column `completed_at` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed_at" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Task" ("content", "id", "published", "title") SELECT "content", "id", "published", "title" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
