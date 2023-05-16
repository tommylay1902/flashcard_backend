import { prisma } from "../../utils/prisma";
import {
  CreateFlashCardSetInput,
  UpdateFlashCardSetInput,
} from "./flashcardset.schema";

export async function createFlashCardSetService(
  flashcardSet: CreateFlashCardSetInput
) {
  const result = await prisma.flash_card_set.create({ data: flashcardSet });
  return result;
}

export async function updateFlashCardSetByIdService(
  id: number,
  flashCardSetUpdate: UpdateFlashCardSetInput
) {
  const result = await prisma.flash_card_set.update({
    where: {
      id,
    },
    data: flashCardSetUpdate,
  });
  console.log(result);
  if (!result) {
    return undefined;
  }

  return result;
}
