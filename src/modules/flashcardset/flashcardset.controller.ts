import { FastifyReply, FastifyRequest } from "fastify";
import { CreateFlashCardSetInput } from "./flashcardset.schema";
import { createFlashCardSetService } from "./flashcardset.service";

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
