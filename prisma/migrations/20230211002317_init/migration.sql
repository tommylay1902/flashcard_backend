-- AlterTable
CREATE SEQUENCE flashcard_id_seq;
ALTER TABLE "Flashcard" ALTER COLUMN "id" SET DEFAULT nextval('flashcard_id_seq');
ALTER SEQUENCE flashcard_id_seq OWNED BY "Flashcard"."id";
