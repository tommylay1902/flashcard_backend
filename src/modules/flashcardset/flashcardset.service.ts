import { prisma } from "../../utils/prisma";
import { CreateFlashCardSetInput } from "./flashcardset.schema";

export async function createFlashCardSetService(
  flashcardSet: CreateFlashCardSetInput
) {
  const result = await prisma.flash_card_set.create({ data: flashcardSet });
  return result;
}
