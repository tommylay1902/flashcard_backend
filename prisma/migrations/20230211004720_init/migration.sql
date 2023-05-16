/*
  Warnings:

  - You are about to drop the `Flashcard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlashcardSet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardSetId_fkey";

-- DropForeignKey
ALTER TABLE "FlashcardSet" DROP CONSTRAINT "FlashcardSet_userId_fkey";

-- DropTable
DROP TABLE "Flashcard";

-- DropTable
DROP TABLE "FlashcardSet";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flash_card_set" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "flash_card_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flash_card" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "flashcardSetId" INTEGER,

    CONSTRAINT "flash_card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "flash_card_set" ADD CONSTRAINT "flash_card_set_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flash_card" ADD CONSTRAINT "flash_card_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "flash_card_set"("id") ON DELETE SET NULL ON UPDATE CASCADE;
