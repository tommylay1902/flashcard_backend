/*
  Warnings:

  - Made the column `flashcardSetId` on table `flash_card` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "flash_card" DROP CONSTRAINT "flash_card_flashcardSetId_fkey";

-- AlterTable
ALTER TABLE "flash_card" ALTER COLUMN "flashcardSetId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "flash_card" ADD CONSTRAINT "flash_card_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "flash_card_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
