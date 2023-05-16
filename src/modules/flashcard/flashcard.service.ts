import { prisma } from "../../utils/prisma";
import { CreateFlashCardInput, UpdateFlashCardInput } from "./flashcard.schema";

export async function getFlashCardsBySetService(id: number) {
  const flashCards = await prisma.flash_card.findMany({
    where: { flashcardSetId: id },
  });
  console.log(flashCards);
  return flashCards;
}

export async function getFlashCardByIdService(id: number) {
  try {
    const flashCard = await prisma.flash_card.findUnique({
      where: { id },
    });

    return flashCard;
  } catch (error) {
    console.log(error);
  }
}

export async function createFlashCardService(flashCard: CreateFlashCardInput) {
  const flashCardSet = await prisma.flash_card_set.findUnique({
    where: {
      id: flashCard.flashcardSetId,
    },
  });
  if (!flashCardSet) {
    return undefined;
  }
  const result = await prisma.flash_card.create({ data: flashCard });
  return result;
}

export async function updateFlashCardByIdService(
  id: number,
  flashCardUpdate: UpdateFlashCardInput
) {
  const result = await prisma.flash_card.update({
    where: {
      id,
    },
    data: flashCardUpdate,
  });
  console.log(result);
  if (!result) {
    return undefined;
  }

  return result;
}
