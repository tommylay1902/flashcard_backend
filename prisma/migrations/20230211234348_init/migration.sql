-- DropForeignKey
ALTER TABLE "flash_card_set" DROP CONSTRAINT "flash_card_set_userId_fkey";

-- AlterTable
CREATE SEQUENCE flash_card_set_id_seq;
ALTER TABLE "flash_card_set" ALTER COLUMN "id" SET DEFAULT nextval('flash_card_set_id_seq'),
ALTER COLUMN "userId" DROP NOT NULL;
ALTER SEQUENCE flash_card_set_id_seq OWNED BY "flash_card_set"."id";

-- AddForeignKey
ALTER TABLE "flash_card_set" ADD CONSTRAINT "flash_card_set_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
