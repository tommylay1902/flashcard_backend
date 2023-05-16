import { FastifyReply, FastifyRequest } from "fastify";
import { CreateFlashCardInput, UpdateFlashCardInput } from "./flashcard.schema";
import {
  getFlashCardsBySetService,
  getFlashCardByIdService,
  createFlashCardService,
  updateFlashCardByIdService,
} from "./flashcard.service";

type FlashCardRequest = FastifyRequest<{
  Params: { id: number };
}>;

export async function getFCBySet(
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) {
  try {
    const id = +req.params.id;
    const flashCardsBySet = await getFlashCardsBySetService(id);

    return flashCardsBySet;
  } catch (error) {
    console.log(error);
  }
}

export async function getFlashCardById(
  req: FlashCardRequest,
  reply: FastifyReply
) {
  try {
    const id = +req.params.id;

    const flashCard = await getFlashCardByIdService(id);
    return flashCard;
  } catch (error) {
    console.log(error);
  }
}

export async function createFlashCard(
  req: FastifyRequest<{
    Body: CreateFlashCardInput;
  }>,
  reply: FastifyReply
) {
  try {
    const flashCard = await createFlashCardService(req.body);
    if (!flashCard) {
      reply.code(404).send();
    }
    reply.code(201).send(flashCard);
  } catch (error) {
    console.log(error);
  }
}

export async function updateFlashCardHandler(
  req: FastifyRequest<{
    Params: { id: number };
    Body: UpdateFlashCardInput;
  }>,
  reply: FastifyReply
) {
  try {
    const id = +req.params.id;

    await updateFlashCardByIdService(id, req.body);
  } catch (error) {}
}
