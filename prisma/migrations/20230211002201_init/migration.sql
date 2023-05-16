-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardSetId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" ALTER COLUMN "flashcardSetId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "FlashcardSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
