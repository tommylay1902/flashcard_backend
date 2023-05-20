import { prisma } from "../../utils/prisma";
import { CreateFlashCardInput, UpdateFlashCardInput } from "./flashcard.schema";

export async function getBySet(id: number) {
  const flashCards = await prisma.flash_card.findMany({
    where: { flashcardSetId: id },
  });
  console.log(flashCards);
  return flashCards;
}

export async function getById(id: number) {
  try {
    const flashCard = await prisma.flash_card.findUnique({
      where: { id },
    });

    return flashCard;
  } catch (error) {
    console.log(error);
  }
}

export async function create(flashCard: CreateFlashCardInput) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

export async function update(
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
