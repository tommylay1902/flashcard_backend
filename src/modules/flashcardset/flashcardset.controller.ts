import { FastifyReply, FastifyRequest } from "fastify";

import {
  createFlashCardSetService,
  updateFlashCardSetByIdService,
} from "./flashcardset.service";
import {
  UpdateFlashCardSetInput,
  CreateFlashCardSetInput,
} from "./flashcardset.schema";

export async function getFlashCardSetById(
  req: FastifyRequest,
  reply: FastifyReply
) {}

export async function createFlashCardSet(
  req: FastifyRequest<{ Body: CreateFlashCardSetInput }>,
  reply: FastifyReply
) {
  const result = await createFlashCardSetService(req.body);
  return reply.code(201).send(result);
}

export async function updateFlashCardSet(
  req: FastifyRequest<{
    Params: { id: number };
    Body: UpdateFlashCardSetInput;
  }>,
  reply: FastifyReply
) {
  console.log(req.params.id);
  const id = +req.params.id;

  const result = await updateFlashCardSetByIdService(id, req.body);
  return reply.code(201).send(result);
}
