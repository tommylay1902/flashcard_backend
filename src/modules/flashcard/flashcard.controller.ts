import { FastifyReply, FastifyRequest } from "fastify";
import { CreateFlashCardInput, UpdateFlashCardInput } from "./flashcard.schema";
import { getBySet, getById, create, update } from "./flashcard.service";

type FlashCardRequest = FastifyRequest<{
  Params: { id: number };
}>;

export async function getFCBySetHandler(
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) {
  try {
    const id = +req.params.id;
    const flashCardsBySet = await getBySet(id);

    return flashCardsBySet;
  } catch (error) {
    console.log(error);
  }
}

export async function getFCHandler(req: FlashCardRequest, reply: FastifyReply) {
  try {
    const id = +req.params.id;

    const flashCard = await getById(id);
    return flashCard;
  } catch (error) {
    console.log(error);
  }
}

export async function createFCHandler(
  req: FastifyRequest<{
    Body: CreateFlashCardInput;
  }>,
  reply: FastifyReply
) {
  try {
    const flashCard = await create(req.body);

    if (!flashCard) {
      reply.code(404).send();
    }
    reply.code(201).send(flashCard);
  } catch (error) {
    console.log(error);
  }
}

export async function updateFCHandler(
  req: FastifyRequest<{
    Params: { id: string };
    Body: UpdateFlashCardInput;
  }>,
  reply: FastifyReply
) {
  try {
    const id = +req.params.id;

    await update(id, req.body);
  } catch (error) {}
}
