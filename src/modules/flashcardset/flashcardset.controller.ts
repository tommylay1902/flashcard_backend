import { FastifyReply, FastifyRequest } from "fastify";

import { create, getAll, getById, update } from "./flashcardset.service";
import {
  UpdateFlashCardSetInput,
  CreateFlashCardSetInput,
} from "./flashcardset.schema";

// TODO: update with only getting FC Sets by logged in user
export async function getFCSetHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const result = await getAll();

  return reply.code(200).send(result);
}
//TODO:validate that param is an id
export async function getFCSetByIdHandler(
  req: FastifyRequest<{
    Params: { id: string };
  }>,
  reply: FastifyReply
) {
  console.log(typeof req.params.id);
  const result = await getById(+req.params.id);

  return reply.code(200).send(result);
}

export async function createFCSetHandler(
  req: FastifyRequest<{ Body: CreateFlashCardSetInput }>,
  reply: FastifyReply
) {
  const result = await create(req.body);
  return reply.code(201).send(result);
}

export async function updateFCSetHandler(
  req: FastifyRequest<{
    Params: { id: string };
    Body: UpdateFlashCardSetInput;
  }>,
  reply: FastifyReply
) {
  const id = +req.params.id;

  const result = await update(id, req.body);
  return reply.code(201).send(result);
}
