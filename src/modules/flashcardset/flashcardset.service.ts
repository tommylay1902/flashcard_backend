import { prisma } from "../../utils/prisma";
import {
  CreateFlashCardSetInput,
  UpdateFlashCardSetInput,
} from "./flashcardset.schema";

//TODO: update to get all flashcards related to logged in user
export async function getAll() {
  const result = prisma.flash_card_set.findMany();
  return result;
}

//TODO: update to get flashcard set that has related id under logged in user
export async function getById(id: number) {
  const result = prisma.flash_card_set.findUnique({ where: { id } });

  return result;
}

export async function create(flashcardSet: CreateFlashCardSetInput) {
  const result = await prisma.flash_card_set.create({ data: flashcardSet });
  return result;
}

export async function update(
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
